import React, { useState } from "react";
import {Link , useNavigate} from 'react-router-dom';


const RetailorSignUp = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
        userType : "retailor"
      });
      
      console.log(formData);
    };
  
    const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      console.log("INLOOP");
      console.log(formData);
      const res = await fetch("/api/auth/retailor-signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data);
      navigate('/retailor-signIn');
    } catch (error) {
      console.log(error.message);
    }
  };
  
    return (
      <>
        <div className=" bg-white">
        <div className="py-48 max-w-lg mx-auto ">
          <h1 className="text-3xl text-center font-semibold my-7">
          Retailor Signup
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded-lg"
              id="name"
              onChange={handleChange}
            />
  
            <input
              type="text"
              placeholder="Address"
              className="border p-3 rounded-lg"
              id="address"
              onChange={handleChange}
            />
  
            <input
              type="text"
              placeholder="City"
              className="border p-3 rounded-lg"
              id="city"
              onChange={handleChange}
            />
  
            <input
              type="text"
              placeholder="State"
              className="border p-3 rounded-lg"
              id="state"
              onChange={handleChange}
            />
  
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg"
              id="email"
              onChange={handleChange}
            />
  
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />
  
            <input
              type="text"
              placeholder="Government ID"
              className="border p-3 rounded-lg"
              id="governmentId"
              onChange={handleChange}
            />
  
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg"
            >
              Register
            </button>
          </form>
  
          <div className=' flex gap-2 mt-5 justify-center'>
        
        <p>Have an Account?</p>
      
        <Link to={"/retailor-signIn"} className=' text-blue-500'>
          Sign in
        </Link>
  
  
      
      </div>
        </div>
        </div>
      </>
    );
  };

export default RetailorSignUp