import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const ForgetPassword = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { forgetPassword, user, logOutUser } = useContext(AuthContext);
  const handleForgetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setError("");
    forgetPassword(email)
      .then(() => {
        {
          toast.warn("Email Sent!");
          if (user) {
            logOutUser();
          }
          navigate("/login");
          event.target.reset();
        }
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div>
      <div className="flex items-center justify-center px-4 font-sans relative overflow-hidden">
        <form
          onSubmit={(event) => handleForgetPassword(event)}
          className="p-8 bg-white border max-w-md w-full relative z-10 transform transition-all duration-300 hover:border-primary/50"
        >
          <h1 className="text-foreground text-3xl md:text-4xl font-light mb-3 text-center tracking-tight">
            Recover Password
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 text-center leading-relaxed">
            Enter your email to receive a reset link
          </p>

          <div className="mb-6 relative">
            <label
              htmlFor="email"
              className="block text-foreground text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-border hover:border-primary/50 transition-all duration-200 text-base"
                aria-label="Email address for password recovery"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black cursor-pointer text-gray-200 py-3  font-bold text-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 transition-all duration-200 active:scale-95 transform hover:scale-105"
            aria-label="Send password reset link"
          >
            Send Reset Link
          </button>

          <p className="text-muted-foreground text-center text-sm mt-6 mb-8 leading-relaxed">
            We&apos;ll send you a secure link to reset your password.
          </p>
          <p className="text-red-500 font-semibold">{error}</p>
          <div className="border-t border-border pt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Remembered your password?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-colors duration-200"
                aria-label="Log in to your account"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
