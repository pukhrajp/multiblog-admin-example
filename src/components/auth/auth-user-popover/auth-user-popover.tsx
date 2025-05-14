import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth-provider/auth-context";
import { Button } from "../../ui/button";

export function AuthUserPopover() {
  const { authUser, authLogout } = React.useContext(AuthContext);
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
      <PopoverContent className="w-80">
        <div>
          <Avatar>
            <AvatarImage src="/images/user-1.jpg" alt="User's Name" />
          </Avatar>
        </div>
        <ul>
          <li>
            <div>
              <h4>{authUser?.name}</h4>
              <p>{authUser?.email}</p>
            </div>
          </li>
          <li>
            <Link to="/about" className="block p-2 hover:bg-gray-200">
              Profile
            </Link>
          </li>
          <li>
            <div className="cursor-pointer" onClick={authLogout}>
              Logout
            </div>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
