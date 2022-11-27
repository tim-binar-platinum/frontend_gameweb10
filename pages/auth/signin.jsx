import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import art from "../../public/image/landingpage-art.png";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();
    console.log(e);

    const res = await signIn("credentials", {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };
  return (
    <div>
      <div className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <Image src={art} className="img-fluid" alt="phone" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                {/* username input */}
                <div className="form-outline mb-4">
                  <label className="form-label text-capitalize" id="username">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="form-control form-control-lg"
                    value={userInfo.username}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, username: e.target.value })
                    }
                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <label className="form-label text-capitalize" id="password">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="**********"
                    className="form-control form-control-lg"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, password: e.target.value })
                    }
                  />
                </div>
                <div>
                  <a href="#">Forgot password?</a>
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
                    className="btn btn-warning btn-lg btn-block mt-5"
                  >
                    Register
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
