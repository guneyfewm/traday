"use client";
import { FormEvent, useRef, useState } from "react";
import cookie from "js-cookie";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const changeEmailForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/user/changeEmail", {
      method: "PATCH",
      body: JSON.stringify({
        newEmail: emailRef.current!.value,
        password: passwordRef.current!.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    });
    const responseJSON = await response.json();
    if (!responseJSON.error) {
      setInterval(() => {
        window.location.replace("/");
      }, 3000);
    }
    if (responseJSON.error) {
      setError(responseJSON.error);
    } else if (responseJSON.msg) {
      setMsg(responseJSON.msg);
    }
  };
  return (
    <div>
      <Form className="col-5 container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text>
        <Form.Text className="text-success">{msg}</Form.Text>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>{" "}


      {/* <h3 className="text-center">Change Email</h3> -OLD FORM-
      <form className="col-5 container" onSubmit={handleSubmit}>
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

        <div className="text-center">
          <p className="text-danger">{error}</p>
          <p className="text-success">{msg}</p>
          <button type="submit" className="btn btn-primary mt-3">
            Signup
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default changeEmailForm;
