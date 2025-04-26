import { useState } from "react";
import myAxios from "../../lib/axios";
import { redirect } from "react-router-dom";

export function Login() {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });

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
    const promise1 = myAxios.get("/test/queue");
    const promise2 = myAxios.get("/test/queue");
    const promise3 = myAxios.get("/test/queue");

    Promise.all([promise1, promise2, promise3]).then((res) => {
      console.log(res);
    });
    // myAxios
    //   .post("/auth/login", loginCreds)
    //   .then((res) => {
    //     console.log(res.data.accessToken);
    //     if (res.data.accessToken) {
    //       localStorage.setItem("token", res.data.accessToken);
    //       console.log("redirection not working");
    //       return redirect("/");
    //     } else {
    //       alert("Login failed");
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
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
