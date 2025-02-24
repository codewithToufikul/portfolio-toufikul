import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./App.css";
import myphoto from "./assets/toufiku1l.jpg";
import photo2 from "./assets/tt1.png";
import html from "./assets/html-5.png";
import css from "./assets/css-3.png";
import tail from "./assets/tailwind.png";
import boot from "./assets/bootstrap.png";
import js from "./assets/js.png";
import react from "./assets/physics.png";
import fire from "./assets/fire.png";
import node from "./assets/node.png";
import ex from "./assets/ex.png";
import jwt from "./assets/jwt.png";
import mongo from "./assets/mongo.png";
import pro1 from "./assets/1.png";
import pro2 from "./assets/2.png";
import pro3 from "./assets/3.png";
import edu1 from "./assets/book.png";
import edu2 from "./assets/edu3.png";
import { IoLocationOutline, IoMailUnread } from "react-icons/io5";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kxz3irw", "template_06wtlqa", form.current, {
        publicKey: "FqwdBVqjJS_xXVLfX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const defaultOptions = {
    reverse: false,
    max: 55,
    perspective: 1000,
    speed: 1000, 
    transition: true, 
    axis: null, 
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div className=" bg-slate-950">
      <div className="">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* <div className=" min-h-screen">

      </div> */}
        {/* Navbar section */}
        <div className=" relative z-50">
          <div className="navbar lg:px-[200px]">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a
                      className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                      href="#skill"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                      href="#"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                      href="#"
                    >
                      Educations
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <p className="text-4xl font-bold text-white">
                Touf<span className="text-orange-500">ik</span>ul
              </p>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a
                    className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                    href="#skill"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                    href="#project"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                    href="#education"
                  >
                    Educations
                  </a>
                </li>
                <li>
                  <a
                    className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-lg font-semibold text-blue-400 hover:cursor-pointer hover:underline"
                    href="#contract"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn bg-orange-700 text-lg border-none text-white font-semibold">
                Hire Me
              </a>
            </div>
          </div>

          {/* Banner section */}
          <div className="lg:mt-[100px] mt-[60px]">
            <div className="flex md:flex-row gap-4 flex-col justify-between px-10 items-center max-w-[1440px] mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-200">
                  Hello, I am <span className=" animate-pulse">👋</span>
                </h2>
                <h1
                  className="lg:text-7xl md:text-5xl text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  style={{
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  TOUFIKUL ISLAM
                </h1>
                <p
                  className="lg:text-4xl md:text-2xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500"
                  style={{
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "Front End Developer",
                        "React Developer",
                        "MERN Stack Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                    }}
                  />
                </p>
                <a
                  href="/Resume-Toufikul-Islam.pdf"
                  download
                  className=" animate-bounce cursor-pointer text-xl font-semibold btn bg-orange-700 border-none text-white"
                >
                  <span>RESUME</span>
                  <span>
                    <FaDownload />
                  </span>
                </a>
              </div>
              <div>
                <Tilt options={defaultOptions}>
                  <div className=" card bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer lg:w-96 shadow-2xl shadow-blue-500/50">
                    <div className="card-body p-5 pb-0 items-center text-center">
                      <img className="w-full rounded-2xl" src={photo2} alt="" />
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>

          {/* About Me Section */}
          <div id="about" className="max-w-[1340px] mx-auto">
            <h1
              className="text-5xl mt-[80px] lg:mt-[180px] font-semibold  text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
              style={{
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              ABOUT ME
            </h1>

            <div className="flex md:flex-row gap-4 flex-col-reverse items-center justify-between md:mt-16 mt-8  lg:mt-24">
              <Tilt options={defaultOptions}>
                <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-96 shadow-2xl shadow-cyan-500/50">
                  <div className="card-body p-3  items-center text-center">
                    <img className="rounded-2xl" src={myphoto} alt="" />
                  </div>
                </div>
              </Tilt>
              <div className="space-y-4 px-2  md:w-1/2">
                <h2 className="text-4xl md:block hidden text-green-500">
                  WHO I AM?
                </h2>
                <p className="text-slate-400 text-lg">
                  Hi, 👋 I am Toufikul Islam. As a passionate learner and Junior
                  Front-End Developer with a focus on crafting engaging user
                  experience through React.js 🚀 Constantly seeking to expand my
                  skills and knowledge in web development to create innovative
                  solutions. Familiar with modern development workflows using
                  tools like Git for version control, npm package management,
                  and Webpack for building assets. I am currently studying in
                  the Diploma in Engineering department of Computer Science and
                  Technologies. Continuously learning and exploring technologies
                  to stay at the forefront of web development trends and best
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="skill" className=" max-w-[1340px] mx-auto">
          <h1
            className="text-5xl mt-[60px] lg:mt-[180px] font-semibold  text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            style={{
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            MY SKILLS
          </h1>

          <div  className="mt-12">
            <marquee behavior="scroll" direction="left" scrollamount="15">
              <div className="flex gap-5">
                <div className="card bg-slate-800 lg:min-w-52 shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[70px]" src={html} alt="HTML" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      HTML
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52 shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[70px]" src={css} alt="CSS" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      CSS
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52 shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[70px]" src={tail} alt="Tailwind CSS" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      Tailwind CSS
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52 shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[70px]" src={boot} alt="Bootstrap" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      Bootstrap
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52 shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[70px]" src={js} alt="JavaScript" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      JavaScript
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52 shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[70px]" src={react} alt="React" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      React
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52  shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[50px]" src={fire} alt="" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      Firebase
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52  shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[70px]" src={ex} alt="" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      Express.js
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52  shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[90px]" src={node} alt="" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      Nodejs
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52  shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[70px]" src={jwt} alt="" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      JWT
                    </h2>
                  </div>
                </div>
                <div className="card bg-slate-800 lg:min-w-52  shadow-xl">
                  <div className="card-body px-10 p-8 flex flex-col justify-center items-center pb-4">
                    <img className=" w-[60px]" src={mongo} alt="" />
                    <h2 className=" text-slate-200 text-xl font-semibold text-center ">
                      MongoDB
                    </h2>
                  </div>
                </div>
              </div>
            </marquee>
          </div>

          <div className=" flex flex-wrap justify-center mt-6 gap-5"></div>
        </div>

        {/* project section */}

        <div id="project">
          <h1
            className="text-5xl md:mt-[80px] mt-[60px] lg:mt-[180px] font-semibold  text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            style={{
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            PROJECTS
          </h1>
          <div className=" mt-14 flex px-2 lg:flex-row flex-col gap-5 items-center justify-between max-w-[1340px] mx-auto">
            <div className="card card-compact bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-96 shadow-2xl shadow-blue-500/50">
              <figure>
                <img src={pro1} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">Medi Mall</h2>
                <p className=" text-base">
                  Medi-Mall is a multi-vendor E-Commerce Website with
                  User/Seller and Admin Dashboard.
                </p>
                <ul className=" space-y-2">
                  <li className=" text-sm">
                    ❖ A normal user add cart medicine in shop page and checkout
                    the cart item with stripe payment method.
                  </li>
                  <li className=" text-sm">
                    ❖ A Seller can add medicine, check her medicine payment
                    status and ask for home page advice.
                  </li>
                  <li className=" text-sm">
                    ❖ The Admin Control everything this website in Admin
                    Dashboard.
                  </li>
                </ul>
                <p>
                  <span className=" text-base font-semibold">
                    {" "}
                    ❖ Technologies
                  </span>
                  : React.js, Firebase, React Router Dom, JWT, Axios, React
                  Tanstack Query, React Hook Form, Swiper Slider.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary">
                    <a target="_blank" href="https://medi-mall.web.app/">
                      Live Link
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      target="_blank"
                      href="https://github.com/codewithToufikul/A12-Medi-Mall-Client"
                    >
                      Client Site
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      target="_blank"
                      href="https://github.com/codewithToufikul/A12-Medi-Mall-Server"
                    >
                      Server Site
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-96 shadow-2xl shadow-blue-500/50">
              <figure>
                <img src={pro2} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">Career Peak</h2>
                <p className=" text-base">
                  Career Peak, a MERN stack project its a comprehensive job
                  management website.{" "}
                </p>
                <ul className=" flex-col space-y-2">
                  <li className=" text-sm">
                    ❖ Job Posting: Employers can easily post job openings,
                    providing detailed descriptions.
                  </li>
                  <li className=" text-sm">
                    ❖ Application Process: Users can apply directly to jobs
                    through the platform.
                  </li>
                  <li className="text-sm">
                    ❖ Users can see how many people are applied this job and see
                    the num of application jobs.
                  </li>
                </ul>
                <p className="">
                  <span className=" text-base font-semibold">
                    {" "}
                    ❖ Technologies
                  </span>
                  : React.js, Firebase, React Router Dom, JWT, Axios, React AOS
                  animation, React Tanstack Query, React Hook Form.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary">
                    <a target="_blank" href="https://career-peak.web.app/">
                      Live Link
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      target="_blank"
                      href="https://github.com/codewithToufikul/A11-Career-Peak-Client"
                    >
                      Client Site
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      target="_blank"
                      href="https://github.com/codewithToufikul/A11-Career-Peak-Server"
                    >
                      Server Site
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-96 shadow-2xl shadow-blue-500/50">
              <figure>
                <img src={pro3} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">Travel Trac</h2>
                <p className=" text-base">
                  Travel Trac website is a Tourism Management based for user
                  favorite destinetion.
                </p>
                <ul className=" space-y-2">
                  <li className=" text-sm">
                    ❖ Users can effortlessly add their favorite tourist spots.
                  </li>
                  <li className=" text-sm">
                    ❖ The My List section showcases all added spots
                  </li>
                  <li className=" text-sm">
                    ❖ Users can easily update or delete their selected spots.
                  </li>
                  <li className=" text-sm">
                    ❖ Explore countries on the Home page and dive into their top
                    tourist spots with a click.
                  </li>
                </ul>
                <p>
                  <span className=" text-base font-semibold">
                    {" "}
                    ❖ Technologies
                  </span>
                  : React.js, Firebase, React Router Dom, JWT, Axios, React
                  Tanstack Query, React Hook Form, Swiper Slider.
                </p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-primary">
                    <a target="_blank" href="https://travel-trac.web.app/">
                      Live Link
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      target="_blank"
                      href="https://github.com/codewithToufikul/A10-Travel-Trac-Client"
                    >
                      Client Site
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      target="_blank"
                      href="https://github.com/codewithToufikul/A10-Travel-Trac-Server"
                    >
                      Server Site
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}

        <div id="education" className=" max-w-[1340px] mx-auto">
          <h1
            className="text-5xl md:mt-[80px] mt-[60px] lg:mt-[180px] font-semibold  text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            style={{
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            EDUCATION
          </h1>
          <div className=" flex justify-between mt-10 lg:flex-row flex-col lg:mt-20">
            <div>
              <img src={edu1} alt="" />
            </div>
            <div className=" flex flex-col px-2 gap-6">
              <div className=" w-full rounded-2xl p-5 pt-2 px-10 bg-slate-600">
                <p className=" text-center text-lg text-blue-500 pb-3">
                  Jan, 2024 to June, 2024
                </p>
                <div className=" flex items-center gap-5">
                  <div>
                    <img className=" w-20" src={edu2} alt="" />
                  </div>
                  <div className=" space-y-2">
                    <h1 className=" text-slate-300 font-semibold text-3xl">
                      Complete Web Development
                    </h1>
                    <h3 className=" text-slate-400 text-xl">
                      Programming Hero
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" w-full rounded-2xl p-5 pt-2 px-10 bg-slate-600">
                <p className=" text-center text-lg text-blue-500 pb-3">
                  Mar, 2023 to Currently Studying
                </p>
                <div className=" flex items-center gap-5">
                  <div>
                    <img className=" w-20" src={edu2} alt="" />
                  </div>
                  <div className=" space-y-2">
                    <h1 className=" text-slate-300 font-semibold text-3xl">
                      Diploma In Engineering
                    </h1>
                    <h3 className=" text-slate-400 text-xl">
                      Naogaon Polytechnic Institute
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" w-full rounded-2xl p-5 pt-2 px-10 bg-slate-600">
                <p className=" text-center text-lg text-blue-500 pb-3">
                  Jan, 2017 to Jan, 2022
                </p>
                <div className=" flex items-center gap-5">
                  <div>
                    <img className=" w-20" src={edu2} alt="" />
                  </div>
                  <div className=" space-y-2">
                    <h1 className=" text-slate-300 font-semibold text-3xl">
                      Secondary School Certificate
                    </h1>
                    <h3 className=" text-slate-400 text-xl">
                      Amdai High School
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contract section */}

        <div id="contract">
          <h1
            className="text-5xl md:mt-[90px] mt-[60px] lg:mt-[180px] font-semibold  text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            style={{
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            CONTRACT WITH ME
          </h1>
          <div>
            <section className="" id="contact">
              <div className=" max-w-[1340px] mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="">
                  <div className=" flex  lg:flex-row flex-col justify-between">
                    <div className="h-full w-1/2 pr-6">
                      <p className="mt-3 mb-6 text-lg text-gray-600 dark:text-slate-400">
                        <h1 className=" text-4xl">Get In Touch</h1>
                      </p>
                      <ul className="mb-6 space-y-5 md:mb-0">
                        <li className="flex items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                            <p>
                              <IoMailUnread size={30} />
                            </p>
                          </div>
                          <div className="ml-4 mb-4">
                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                              imranmeg2356@gmail.com
                            </h3>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <div className="flex  h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-6 w-6"
                            >
                              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                              <path d="M15 7a2 2 0 0 1 2 2"></path>
                              <path d="M15 3a6 6 0 0 1 6 6"></path>
                            </svg>
                          </div>
                          <div className="ml-4 mb-4">
                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                              01709264924
                            </h3>
                          </div>
                        </li>
                        <li className="flex">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                            <p>
                              <IoLocationOutline size={30} />
                            </p>
                          </div>
                          <div className="ml-4 mb-4">
                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                              Joypurhat, Rajshahi, Bangladesh
                            </h3>
                          </div>
                        </li>
                      </ul>
                      <div className=" justify-center md:justify-start  flex flex-row  gap-4 mt-5">
                        <a
                          href="https://web.facebook.com/toufikulislam24"
                          className=" text-3xl text-slate-400 cursor-pointer"
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="www.linkedin.com/in/toufikul-islamts"
                          className=" text-3xl text-slate-400 cursor-pointer"
                        >
                          <FaLinkedin />
                        </a>
                        <a className=" text-3xl text-slate-400 cursor-pointer">
                          <FaTwitter />
                        </a>
                        <a
                          href="https://github.com/codewithToufikul"
                          className=" text-3xl text-slate-400 cursor-pointer"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    <div
                      className="card h-fit w-full px-14 p-5 md:p-12"
                      id="form"
                    >
                      <form id="contactForm" ref={form} onSubmit={sendEmail}>
                        <div className="mb-6">
                          <div className="mx-0 mb-1 sm:mb-4">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <label
                                htmlFor="name"
                                className="pb-1 text-xs uppercase tracking-wider"
                              ></label>
                              <input
                                type="text"
                                id="name"
                                autoComplete="given-name"
                                placeholder="Your name"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                name="from_name"
                              />
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                              <label
                                htmlFor="email"
                                className="pb-1 text-xs uppercase tracking-wider"
                              ></label>
                              <input
                                type="email"
                                id="email"
                                autoComplete="email"
                                placeholder="Your email address"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                name="user_email"
                              />
                            </div>
                          </div>
                          <div className="mx-0 mb-1 sm:mb-4">
                            <label
                              htmlFor="textarea"
                              className="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <textarea
                              id="textarea"
                              name="message"
                              cols="30"
                              rows="5"
                              placeholder="Write your message..."
                              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                            ></textarea>
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* footer section */}

        <div>
          <section className=" border-t-2">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
              <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                {["About", "Contact", "Skill", "Resume", "Social", "Terms"].map(
                  (item) => (
                    <div key={item} className="px-5 py-2">
                      <a
                        href="#"
                        className="text-base leading-6 text-gray-500 hover:text-gray-900"
                      >
                        {item}
                      </a>
                    </div>
                  )
                )}
              </nav>
              <div className="flex justify-center mt-8 space-x-6">
                {[
                  {
                    name: "Facebook",
                    icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                  },
                  {
                    name: "Instagram",
                    icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                  },
                  {
                    name: "Twitter",
                    icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                  },
                  {
                    name: "GitHub",
                    icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                  },
                  {
                    name: "Dribbble",
                    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={social.icon}
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                ))}
              </div>
              <p className="mt-8 text-base leading-6 text-center text-gray-400">
                © 2024 Toufikul Islam. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
