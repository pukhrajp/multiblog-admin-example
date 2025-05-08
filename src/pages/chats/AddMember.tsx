import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useEffect, useState } from "react";
import Axios from "../../api/axios";
import { User } from "../../types/nav";
import { useAppSelector } from "../../redex/hook";

export const AddMembers = ({
  chat,
  setChange,
}: {
  chat: any;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [userList, setUserList] = useState<User[]>();
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const authUser = useAppSelector((state) => state.authUser);
  useEffect(() => {
    Axios.get("/users")
      .then((res) => {
        const allUsers = res.data.data.users as User[];
        const filteredUsers = allUsers.filter(
          (user) =>
            user._id !== chat.createdBy &&
            !chat.members.some((id: string) => id === user._id)
        );
        setUserList(filteredUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authUser.email, chat]);
  const handleToggleUser = (userId: string) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handlePopoverChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setSelectedUsers([]);
    }
  };

  const handleAddMembers = () => {
    if (selectedUsers.length === 0) return;
    Axios.post("/chats/add-members", {
      conversationId: chat._id,
      userIds: selectedUsers,
    })
      .then((res) => {
        console.log(res.data.data);
        setSelectedUsers([]);
        setChange((prev) => !prev);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Popover open={open} onOpenChange={handlePopoverChange}>
      <PopoverTrigger asChild>
        <div className="bg-black text-white px-4 py-2 rounded cursor-pointer">
          Add Member
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-white shadow-lg rounded-md p-4">
        <div className="grid grid-cols-1 gap-4 p-4">
          {userList?.map((user) => {
            const isSelected = selectedUsers.includes(user._id);
            return (
              <div
                onClick={() => handleToggleUser(user._id)}
                key={user._id}
                className={`p-4 border rounded-md shadow-md cursor-pointer transition ${
                  isSelected ? "bg-blue-100 border-blue-500" : "hover:shadow-lg"
                }`}
              >
                <h2 className="text-lg font-semibold">{user.name}</h2>
              </div>
            );
          })}
          <button
            onClick={handleAddMembers}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Add Selected Members
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
