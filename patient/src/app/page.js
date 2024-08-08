"use client";

import Link from "next/link";
import Layout from "./component/Layout";
import { Biotech as BiotechIcon } from "@mui/icons-material";
import { HealthAndSafety as HealthAndSafetyIcon } from "@mui/icons-material";
import { Diversity2 as Diversity2Icon } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  
  return (
    <>
      <Layout>
        {/* Home */}
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black bg-no-repeat bg-cover opacity-90 bg-[url('/hero-bg.png')] overflow-auto">
          <div className="w-full lg:w-4/5 space-y-3 mt-5">
            <h1 className="text-5xl font-bold leading-tight">
              Your Most Trusted Health Partner
            </h1>
            <p className="text-black font-bold">
              A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
              quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
            </p>
            <button
              title="Book Appointment"
              className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out"
            >
              Our Service
            </button>
          </div>
        </div>

        {/* About us */}

        <div className="font-medium text-3xl text-center">
          <h1 className="text-center text-3xl font-serif mt-3 mb-3">ABOUT Us</h1>
        </div>
        <div className="flex flex-wrap bg-slate-200">
          <div className="w-full md:w-1/2 p-8">
            <img
              src="doctor1.jpg"
              className="mt-5 mx-auto h-[500px] w-full md:w-[470px]"
              alt="Doctor 1"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h1 className="text-center md:text-left">ABOUT HOSPITAL</h1>
            <p className="w-full md:w-96 h-auto md:h-72 mt-4 md:mt-0 mx-auto md:mx-0">
              A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
              quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
              A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
              quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
              A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
              quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
              A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
              quisquam .
              <Link href="/about" className="text-blue-700 font-bold">
                Read more....
              </Link>
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/about"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                ABOUT
              </Link>
            </div>
          </div>
        </div>

        {/* Services */}

        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
          <div className="flex flex-col items-center lg:flex-row justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-center lg:text-start">
                Our Services
              </h1>
              <p className="mt-2 text-center lg:text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                quidem.
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <Link
                href="/service"
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out"
              >
                See Services
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 pt-14">
            <div className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
              <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[hsl(168,86%,39%)]">
                <BiotechIcon size={35} className="text-backgroundColor" />
              </div>
              <h1 className="font-semibold text-lg">Lab Test</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt praesentium asperiores unde veniam, perspiciatis neque!
              </p>
              <h3 className="text-black cursor-pointer hover:text-[#84cccc] transition duration-300 ease-in-out">
                Learn more
              </h3>
            </div>

            <div className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
              <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[hsl(168,86%,39%)]">
                <HealthAndSafetyIcon
                  size={35}
                  className="text-backgroundColor"
                />
              </div>
              <h1 className="font-semibold text-lg">Health Checkup</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt praesentium asperiores unde veniam, perspiciatis neque!
              </p>
              <h3 className="text-backgroundColor cursor-pointer hover:text-[#66ae9f] transition duration-300 ease-in-out">
                Learn more
              </h3>
            </div>

            <div className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
              <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[hsl(168,86%,39%)]">
                <Diversity2Icon size={35} className="text-backgroundColor" />
              </div>
              <h1 className="font-semibold text-lg">Heart Health</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt praesentium asperiores unde veniam, perspiciatis neque!
              </p>
              <h3 className="text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                Learn more
              </h3>
            </div>
          </div>
        </div>

        {/* Contact */}

        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
          <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
            <div>
              <h1 className="text-4xl font-semibold text-center lg:text-start">
                Our Doctors
              </h1>
              <p className="mt-2 text-center lg:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt praesentium asperiores unde veniam, perspiciatis neque!
              </p>
            </div>
          </div>
          <Carousel
            showArrows={true}
           
            autoPlay
            infiniteLoop
          >
          
            <div className="flex justify-center">
              <img
                src="doctor4.jpg"
                alt="Doctor 4"
                className="w-full lg:w-auto h-auto max-h-90 object-cover rounded-2xl"
              />
              <p className="legend">Contact</p>
            </div>
            <div className="flex justify-center">
              <img
                src="doctor5.jpg"
                alt="Doctor 5"
                className="w-full lg:w-auto h-auto max-h-90 object-cover rounded-2xl"
              />
              <p className="legend">Contact</p>
            </div>
            <div className="flex justify-center">
              <img
                src="doctor8.jpg"
                alt="Doctor 6"
                className="w-full lg:w-auto h-auto max-h-3/5 object-cover rounded-2xl"
              />
              <p className="legend">Contact</p>
            </div>
            
          
          </Carousel>
        </div>
      </Layout>
    </>
  );
}