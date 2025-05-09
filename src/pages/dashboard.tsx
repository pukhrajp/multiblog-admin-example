import { AuthUserPopover } from "../components/auth/auth-user-popover/auth-user-popover";
import { Test, TestComponent } from "../components/test/test";

export function Dashboard() {
  return (
    <div>
      Dashboard
      <AuthUserPopover />
      {/* <Test /> */}
      <TestComponent />
    </div>
  );
}
