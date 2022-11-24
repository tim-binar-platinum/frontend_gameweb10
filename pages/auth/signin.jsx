import { signIn } from "next-auth/react";
import { useState } from "react";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.username}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, username: target.value })
          }
          type="text"
          placeholder="john"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
