import React, { useEffect, useRef, useState } from "react";
import { pusher } from "../../pusherClient";
import { Button } from "./button";
import { Input } from "./input";
import { useAppSelector } from "../../redex/hook";
import Axios from "../../api/axios";

interface Message {
  username: string;
  message: string;
}

const Chat = ({ chat }: { chat: any }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const authUser = useAppSelector((state) => state.authUser);

  const currentUser = React.useMemo(
    () => authUser.name || "User" + Math.floor(Math.random() * 100),
    [authUser]
  );

  useEffect(() => {
    Axios.post(`/message/${chat._id}`, { username: authUser.name }).then(
      (res) => {
        setMessages(res.data.messages);
      }
    );
  }, [chat]);

  useEffect(() => {
    const channel = pusher.subscribe(chat._id);
    console.log("after subscribe: ", pusher.channel(chat._id));
    channel.bind("new-message", (data: Message) => {
      console.log("data", data);
      setMessages((prev) => [...prev, data]);
    });

    console.log("subscribed to channel", channel.name);

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(chat._id);
      console.log("after unsubscribe: ", pusher.channel(chat._id));
      console.log("Unsubscribed from channel");
    };
  }, [chat._id]);
  const sendMessage = async () => {
    Axios.post("/message", {
      username: currentUser,
      message: newMessage,
      conversationName: chat._id,
    })
      .then((res) => {
        console.log("Message sent successfully", res.data);
      })
      .catch((err) => {
        console.log("Error sending message", err);
      });
    setNewMessage("");
  };
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <div className="h-100 overflow-y-scroll border border-gray-300 p-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent:
                msg.username === currentUser ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                wordBreak: "break-word",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor:
                  msg.username === currentUser ? "#DCF8C6" : "#FFFFFF",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <strong className="w-400">{msg.username}:</strong>
              {msg.message}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-2 gap-4 flex items-center">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && newMessage.trim() !== "") {
              e.preventDefault;
              sendMessage();
            }
          }}
          placeholder="Type a message..."
        />
        <Button
          onClick={() => {
            if (newMessage.trim() !== "") {
              sendMessage();
            }
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
