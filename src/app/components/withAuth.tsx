"use client";
//@ts-nocheck
import React, { Component, useState,useEffect } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const withAuth = (HocComponent: any) => {
  return (props: any) => {
    useEffect(()=>{
        const token = Cookies.get("token");
        console.log(process.env.SECRETKEY);
        const res = jwt.verify(token!, process.env.SECRETKEY!, (err) => {
            if (err){
                setState(false)
            }
            else{
    setState(true)
            }
        });
    

    },[])
    const [state,setState] = useState(false)
   
    return state && <HocComponent {...props} />;
  };
};
export default withAuth;
