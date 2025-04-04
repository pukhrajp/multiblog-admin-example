import { AuthUserPopover } from "../auth/auth-user-popover/auth-user-popover";
import { Input } from "../ui/input";

export function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-100">
      <div>
        <Input placeholder="Search..." className="w-64" />
      </div>
      <div>
        <AuthUserPopover />
      </div>
    </header>
  );
}
