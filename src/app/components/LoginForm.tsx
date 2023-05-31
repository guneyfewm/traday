'use client'
import { FormEvent, useRef,useState } from "react";
import cookie  from "js-cookie";

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [error,setError] = useState("")
const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
  e.preventDefault()
  const response = await fetch("http://localhost:4000/user/login",
{
  
    method: "POST",
    body: JSON.stringify({
      email:emailRef.current!.value,
      password:passwordRef.current!.value
    }),
    headers:{
      "Content-Type": "application/json"
    }
})
const responseJSON = await response.json()
if(responseJSON.error){
    setError(responseJSON.error)
}
cookie.set("token",responseJSON.token,{expires:7})
if(!responseJSON.error){

    window.location.replace("/")
}
}
  return (
    <div> <h3 className="text-center">Login</h3>
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
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
         </div>
      </form> 
      
    </div>
  ); 
};

export default LoginForm;
