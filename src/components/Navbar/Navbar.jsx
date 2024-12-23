import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import logo from '../../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const top = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll=()=>{
    let heightToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
        setVisible(true)
    } 
    else{
        setVisible(false)
    }
  }
  useEffect(() => {
  window.addEventListener("scroll", listenToScroll);
  return()=> window.removeEventListener("scroll", listenToScroll)
  }, [])
  

  return (
    <div>
        {/* <img src={heroBg} alt="" /> */}
      <nav className="bg-black text-white p-4 shadow md:flex md:items-center md:justify-between " >
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins]" data-aos="zoom-in-right">
            <img
              className="h-10 inline md:pl-10"
              src={logo}
              alt=""
            />
          </span>
          <span
            className="text-3xl cursor-pointer md:hidden block"
            onClick={() => setOpen(!open)}
          >
            <ion-icon className='text-white' name={open ? "close" : "menu"} ></ion-icon>
          </span>
        </div>
        <ul
          className={`md:flex shadow-lg md:shadow-none md:items-center z-[1] md:z-auto md:static absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[-400px] transition-all ease-in duration-500 ${
            open ? "top-15x opacity-100" : "top-[-480px]"
          } md:opacity-100 opacity-0 `}
        >
          <Link
            spy={true}
            to="Hotel"
            smooth
            duration={500}
            activeClass="activeClass"
          >
            <li className="mx-4 my-6 md:my-0 text-lg font-semibold cursor-pointer hover:text-[#5143d9]">
              Home
            </li>
          </Link>
          <Link
            spy={true}
            to="about"
            smooth
            duration={500}
            activeClass="activeClass"
          >
            <li className="mx-4 my-6 md:my-0 text-lg font-semibold cursor-pointer hover:text-[#5143d9]">
              About
            </li>
          </Link>
          <Link
            spy={true}
            to="services"
            smooth
            duration={500}
            activeClass="activeClass"
          >
            <li className="mx-4 my-6 md:my-0 text-lg font-semibold cursor-pointer hover:text-[#5143d9]">
              {" "}
              Services
            </li>
          </Link>
          <Link
            spy={true}
            to="contact"
            smooth
            duration={500}
            activeClass="activeClass"
          >
            <li className="mx-4 my-6 md:my-0 text-lg font-semibold cursor-pointer hover:text-[#5143d9]">
              Contact
            </li>
          </Link>
        {/* <ul> */}
        <button className=" mt-5 px-7 py-3  rounded-md text-white bg-[#5143d9] font-semibold hover:bg-[#5143d91a]  hover:text-[#5143d9] transition all ease-in-out duration-500 md:mt-0">
            Get Started
          </button>
        {/* </ul> */}
        </ul>
      </nav>
      {visible && (

          <button
          onClick={top}
          className="animated w-10 h-10 text-center justify-center items-center flex rounded-full bg-[#3c31a1] text-white fixed right-10 bottom-10"
          >
        <FaArrowUp className="" />
      </button>
    )}
    </div>
  );
}