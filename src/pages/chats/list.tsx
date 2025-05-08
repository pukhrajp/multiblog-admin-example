import { Link, useNavigate } from "react-router-dom";
import Axios from "../../api/axios";
import { useEffect, useState } from "react";

export function ChatList() {
  const [chatsList, setChatsList] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get("/chats/list")
      .then((res) => {
        console.log(res.data);
        setChatsList(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const hendleChat = (id: string) => {
    navigate(`/chats/${id}`);
  };
  return (
    <div>
      <div className="flex  items-center justify-between p-4  ">
        <h1>chats List</h1>
        <Link
          to="/chats/create"
          className="block bg-black p-2 text-white rounded-md hover:bg-gray-800"
        >
          add new chat
        </Link>
      </div>
      {chatsList.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 p-4">
          {chatsList.map((item: any) => (
            <div
              onClick={() => hendleChat(item._id)}
              key={item._id}
              className="p-4 border rounded-md shadow-md hover:shadow-lg cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4">No chats available</div>
      )}
    </div>
  );
}
