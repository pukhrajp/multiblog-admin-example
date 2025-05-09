import { useEffect, useState } from "react";
import { useWebSocket } from "../../lib/hooks";
import { wsSocket } from "../../lib/wsocket";

export function TestComponent() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const channel = wsSocket.subscribe("test");
    channel.bind("message", (data: any) => {
      setMessages((prev) => [...prev, JSON.stringify(data)]);
    });

    return () => {
      channel.unbindAll();
      wsSocket.unsubscribe("test");
    };
  });

  function sendMessage() {
    wsSocket.sendMessage("test", "message", {
      user: { id: 1, name: "Abhishek" },
      message: "Hello World",
    });
  }
  return (
    <div>
      <h2>WebSocket Test</h2>
      {messages.map((msg, i) => (
        <div key={i}>{msg}</div>
      ))}
      <div>
        <input type="text" placeholder="Type a message" />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
}

export function Test() {
  const { messages, sendMessage } = useWebSocket("ws://localhost:3000");

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div>
      <h2>WebSocket Chat</h2>
      <div style={{ border: "1px solid #ccc", padding: 10, minHeight: 100 }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
