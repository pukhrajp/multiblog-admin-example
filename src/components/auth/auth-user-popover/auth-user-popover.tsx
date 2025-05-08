import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../api/axios";
import { useAppSelector } from "../../../redex/hook";

export function AuthUserPopover() {
  const navigate = useNavigate();
  const authUser = useAppSelector((state) => state.authUser);
  function logout() {
    Axios.post("/auth/logout")
      .then(() => {
        navigate("/auth/login");
      })
      .catch((err) => console.error(err));
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage
            className="w-10 h-10 rounded-full"
            src="/images/user-1.jpg"
            alt="User's Name"
          />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="bg-sky-50">
        <div className="flax items-center justify-between p-8 border-b border-gray-200 ">
          <Avatar>
            <AvatarImage
              className="rounded-full p-6"
              src="/images/user-1.jpg"
              alt="User's Name"
            />
          </Avatar>
          <div className="flax items-center justify-self-center ">
            Name: {authUser.name}
          </div>
          <div className="flax items-center justify-self-center ">
            {authUser.email}
          </div>
        </div>
        <ul>
          <li>
            <Link to="/about" className="block p-2 hover:bg-gray-200">
              Profile
            </Link>
          </li>
          <li>
            <div
              className="block p-2 hover:bg-gray-200 cursor-pointer "
              onClick={logout}
            >
              Logout
            </div>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
