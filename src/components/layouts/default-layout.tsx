import { Outlet } from "react-router-dom";
import { Sidebar } from "../layout-partials/sidebar";
import { Header } from "../layout-partials/header";
import Axios from "../../api/axios";
import { useEffect } from "react";
import { useAppDispatch } from "../../redex/hook";
import { addAuthUser } from "../../redex/slices/authUserSlice";

export function DefaultLayout() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    Axios.get("/users/currentUser")
      .then((res) => {
        // console.log(res.data.data);
        dispatch(addAuthUser(res.data.data));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="h-screen w-full">
        <Header />
        <div className="p-4 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
