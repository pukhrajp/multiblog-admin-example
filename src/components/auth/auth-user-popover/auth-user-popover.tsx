import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Link } from "react-router-dom";

export function AuthUserPopover() {
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
            <Link to="/about" className="block p-2 hover:bg-gray-200">
              Profile
            </Link>
          </li>
          <li>
            <a href="/logout" className="block p-2 hover:bg-gray-200">
              Logout
            </a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
