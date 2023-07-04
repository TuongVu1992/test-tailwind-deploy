import './index.css';
import React from 'react';
import {Button } from "@material-tailwind/react";
import { useState} from 'react';

function App() {
  const[UserName, setUserName] = useState("");
  const[PassWord, setPassWord] = useState("");

   // listen then stored the userName and passWord
   


   const checkSubmiteButton = () =>{
  //   if (UserName === "theTuongVu" && PassWord === "testingStuff") {
  //     return console.log("it is correct");
  //  console.log(UserName, PassWord) 
  //   }
  }
  
  const checkForgotPasswordButton = () =>{
    
  }

  return (
    <div className= "grid h-screen place-content-center">
      <div className= " text-3xl font-bold text-blue-600  ml-20 pb-8">
        <h1> Login Page</h1>
      </div>

      <div className="mb-8">
        <input className=" h-16 w-80 border-solid border-2 border-black " placeholder = "Username"/>
      </div>

    <div className="mb-8">
      <input className = " h-16 w-80 border-solid border-2 border-black" placeholder="Password"/>
    </div>
    
    <div className="flex w-max gap-4 ">
      <Button variant="filled"  color ="green" onClick={checkSubmiteButton}> Submit</Button>
      <Button variant= "text" className = "ml-16 text-blue-600" onClick={checkForgotPasswordButton}> Forgot Password</Button>
    </div>
    </div>
  );
}

export default App;
