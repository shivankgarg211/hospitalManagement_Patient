"use client"
import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import Link from "next/link";

import axios from 'axios';

function Appointment() {
        const [appointmentbook, setApppointmentBook] = useState({
          name:"",
          mobile:"",
          gender:"",
          age:"",
          symptoms:"",
          appointment_date:"",
          email:""
        })

      const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5004/api/patient/appointment",appointmentbook)
        .then((result)=>{
          console.log(result)
            setApppointmentBook(result.data);
            alert("Appointment Booked Successfuly")
        })
        .catch((error)=>{
            console.log(error)
        })
       }
   

  return (
    <Layout>
      <div className=" fixed w-full font-medium text-sm  h-full text-center">
        <div className="flex flex-wrap  h-screen">
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <img
              src="d55.jpg"
              className="h-[400px] w-full md:w-[700px] object-cover rounded-3xl border-b-slate-950 "
            />
          </div>
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
              <h1 className="text-center text-xl font-serif mb-3">Book Appointment</h1>

              <form className="space-y-2">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    value={appointmentbook.name}
                    onChange={(e)=>setApppointmentBook({...appointmentbook,name: e.target.value})}
                  />
                </div>
                <div>
                  {/* <label className="block text-sm font-medium">Gender</label> */}
                  <select
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    value={appointmentbook.gender}
                    onChange={(e)=>setApppointmentBook({...appointmentbook,gender: e.target.value})}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  {/* <label className="block text-sm font-medium">Age</label> */}
                  <input
                    type="number"
                    placeholder="Your Age"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    value={appointmentbook.age}
                    onChange={(e)=>setApppointmentBook({...appointmentbook,age: e.target.value})}
                  />
                </div>
                <div>
                  {/* <label className="block text-sm font-medium">Mobile</label> */}
                  <input
                    type="tel"
                    placeholder="Your Mobile Number"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    value={appointmentbook.mobile}
                    onChange={(e)=>setApppointmentBook({...appointmentbook,mobile: e.target.value})}
                  />
                </div>
                <div>
                  {/* <label className="block text-sm font-medium">Symptoms</label> */}
                  <textarea
                    placeholder="Describe your symptoms"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    value={appointmentbook.symptoms}
                    onChange={(e)=>setApppointmentBook({...appointmentbook,symptoms: e.target.value})}
                  />
                </div>
                <div>
                  {/* <label className="block text-sm font-medium">Date</label> */}
                  <input
                    type="date"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    value={appointmentbook.appointment_date}
                    onChange={(e)=>setApppointmentBook({...appointmentbook,appointment_date: e.target.value})}
                  />
                </div>
                <div>
                  {/* <label className="block text-sm font-medium">Email</label> */}
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    value={appointmentbook.email}
                    onChange={(e)=>setApppointmentBook({...appointmentbook,email: e.target.value})}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Appointment;
