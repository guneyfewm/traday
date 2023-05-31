"use client";
import { FormEvent, useRef, useState } from "react";
import cookie from "js-cookie";

const SignupForm = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        fullName: fullNameRef.current!.value,
        email: emailRef.current!.value,
        contact: contactRef.current!.value,
        password: passwordRef.current!.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJSON = await response.json();
    console.log(responseJSON.token);
    cookie.set("token", responseJSON.token, { expires: 7 });
    if(!responseJSON.error){

      window.location.replace("/");
    }
    if (responseJSON.error) {
      setError(responseJSON.error);
    }
  };
  return (
    <div>
      {" "}
      <h3 className="text-center">Signup</h3>
      <form className="col-5 container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            ref={fullNameRef}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            ref={emailRef}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            ref={passwordRef}
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            ref={contactRef}
            placeholder="Enter your number"
          />
        </div>
      
        <div className="text-center">
          <p className="text-danger">{error}</p>
          <button type="submit" className="btn btn-primary mt-3">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
