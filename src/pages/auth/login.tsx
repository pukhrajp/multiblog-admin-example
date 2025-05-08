import { useContext, useState } from "react";
import myAxios from "../../lib/axios";
import { redirect } from "react-router-dom";
import { AuthContext } from "../../components/auth/auth-provider/auth-context";
import { AuthUser } from "../../types/context";

export function Login() {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });
  const { updateAuthUser } = useContext(AuthContext);

  function updateEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginCreds((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  }

  function updatePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginCreds((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  }

  function handleSubmit() {
    myAxios
      .post("/auth/login", loginCreds)
      .then((res) => {
        console.log("response is: ", res);
        if (res?.data?.data?.accessToken) {
          localStorage.setItem("accessToken", res.data.data.accessToken);
        } else {
          alert("Login failed");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={updateEmail} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={updatePassword}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
