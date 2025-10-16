import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { registerUser, logOutUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const terms = event.target.terms.checked;
    setError("");
    if (!terms) {
      setError("Accept Terms & Conditions !");
      return;
    }
    registerUser(email, password)
      .then((result) => {
        sendEmailVerification(result.user)
          .then(() => toast.warn("Email Sent!"))
          .catch((error) => setError(error.message));
        event.target.reset();
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(result.user, profile).then(() => {
          logOutUser();
          navigate("/login");
        });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="pb-10">
      <form
        onSubmit={(event) => handleRegister(event)}
        className="flex justify-center items-center mt-5"
      >
        <fieldset className="fieldset bg-white border-base-300  w-md border p-15">
          <h3 className="text-center text-3xl font-semibold">Register</h3>
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            required
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input"
            placeholder="Photo"
            name="photo"
            required
          />
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
          <p className="text-red-500">{error}</p>
          <fieldset className="fieldset bg-base-100 ">
            <label className="label">
              <input type="checkbox" className="checkbox" name="terms" />
              Accept Terms & Conditions
            </label>
          </fieldset>
          <button className="btn btn-neutral mt-4">Register</button>
          <p className="text-center my-2 font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500 underline cursor-pointer">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
