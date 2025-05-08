import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "../../api/axios"; // adjust the path as needed
import Chat from "../../components/ui/Chat";
import { AddMembers } from "./AddMember";

export function ChatDetail() {
  const { id } = useParams<{ id: string }>();
  const [chat, setChat] = useState<any>(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (id) {
      Axios.get(`/chats/${id}`)
        .then((res) => {
          setChat(res.data.data);
        })
        .catch((err) => console.error(err));
    }
  }, [id, change]);

  if (!chat) return <div className="p-4">Loading chat details...</div>;

  return (
    <div className="p-4 ">
      <div className="flex  items-center justify-between p-4  ">
        <h1 className="text-xl p-4 font-bold">{chat.name}</h1>
        <AddMembers chat={chat} setChange={setChange} />
      </div>
      <Chat chat={chat} />
    </div>
  );
}
