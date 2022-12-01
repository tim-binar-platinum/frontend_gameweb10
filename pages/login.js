import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Input from "./components/Input";
import art from "../public/image/landingpage-art.png";
import axiosConfig from "./api/axiosConfig";
import styles from "../styles/login.module.css";




const Login = () => {
  const router = useRouter()
  const [token, setToken] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: email,
      password,
    };
    await axiosConfig.post('/login', {
      username: data.username,
      password: data.password
    })
    .then(function (response) {
      console.log(response)
      alert("login berhasil")
      setToken(response.data.token)
      router.push('/')
    })
    .catch(function (error) {
      console.log(error);
      return alert("username atau password salah")
    });
  };
  return (
    <div id={styles.login}>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <Image src={art} className="img-fluid" alt="phone" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 text-white">
              <form onSubmit={handleLogin}>
                {/* Email input */}
                <Input
                  type="text"
                  title="username"
                  id="email"
                  set={(e) => setEmail(e.target.value)}
                />
                {/* Password input */}
                <Input
                  type="password"
                  title="password"
                  id="password"
                  set={(e) => setPassword(e.target.value)}
                />
                <div>
                  <a href="#!">Forgot password?</a>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-5"
                >
                  Sign in
                </button>
                <Link href="/register">
                  <button
                    type="submit"
                    className="button-1 btn btn-warning btn-lg btn-block mt-5"
                    style={{ marginLeft: "1rem" }}
                  >
                    Register
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
