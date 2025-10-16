import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setError("");
    loginUser(email, password)
      .then(() => {
        toast.success("Login Successful!");
        event.target.reset();
        navigate(location?.state || "/0");
      })
      .catch((error) => {
        setError(error.message);
        event.target.reset();
      });
  };
  const handleGoogleLogin = () => {
    setError("");
    googleSignIn()
      .then(() => {
        toast.success("Sign In Successful!");
        navigate(location?.state || "/0");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="min-h-[calc(100vh-250px)]">
      <div className="hero  flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 lg:w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
              <h3 className="text-center text-2xl font-semibold">Login</h3>
              <form onSubmit={(event) => handleLogin(event)}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                  />
                  <div>
                    <Link to="/forget-password" className="link link-hover">
                      Forgot password?
                    </Link>
                  </div>
                  <p className="text-red-500">{error}</p>

                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              {/* Google */}
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5] shadow-sm mb-2 lg:hidden"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-red-500 cursor-pointer font-semibold underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
