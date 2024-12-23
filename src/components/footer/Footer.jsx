import React from "react";
import logo from "../../assets/logo.png";
import FooterBg from "../../assets/footerbg.jpg";
const Footer = () => {
  return (
    <div>
      <div className="footer-bg relative ">
        <img src={FooterBg} alt="" className="w-full md:h-screen h-[70rem] " />
      </div>
      <div className="footer-container absolute md:mt-[-30rem] mt-[-67rem] md:flex md:gap-40 pl-6 md:px-20 ">
        <div className="footer flex flex-col gap-4">
          <img src={logo} alt="" className="w-40" />
          <p className="w-[90%]">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
          </p>
          <div className="icons flex gap-3 mt-2 text-xl">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
          </div>
        </div>
        <div className="footer">
          <h2 className="text-2xl font-semibold mt-10 md:mt-0">Addres</h2>
          <div className="footer-content flex flex-col gap-3 text-gray-300 text-xl" >
            <p className="mt-3">034 Erling Knolls, Lake Kenny
            North Dakota 8902</p>
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p>+1 (234) 567 890</p>
            <p>example@mail.com</p>
          </div>
        </div>
        <div className="footer">
          <h2 className="text-2xl font-semibold mt-10 md:mt-0">Explore</h2>
          <div className="footer-content flex flex-col gap-3 text-gray-300 text-xl" >
            <p className="mt-3">Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Team</p>
            <p>Blogs</p>
          </div>
        </div>
        <div className="footer">
          <h2 className="text-2xl font-semibold mt-10 md:mt-0">Explore</h2>
          <div className="footer-content flex flex-col gap-3 text-gray-300 text-xl" >
            <p className="mt-3">Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Team</p>
            <p>Blogs</p>
          </div>
        </div>
      </div>
      <div className="copyright absolute mt-[-6rem]">
        <hr className=" md:w-[75rem] w-[22rem] text-center flex justify-center items-center ml-10"/>
      <div className="copyright-content md:flex md:justify-between flex flex-col-reverse justify-center items-center gap-2 ">
      <div>Copyright © 2024 ASK Project</div>
      <div className=" flex gap-7 mt-4">
        <p>Term & Services</p>
        <p>privacy Policy</p>
      </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="footer">
<h2 className='text-xl font-semibold'>Explore</h2>  
<div className="footer-content flex flex-col gap-3 text-gray-300">
<p className='mt-3'>Home</p>
<p>About</p>
<p>Services</p>
<p>Team</p>
<p>Blogs</p>
</div>
</div>
<div className="footer">
<h2 className='text-xl font-semibold'>Explore</h2>  
<div className="footer-content flex flex-col gap-3 text-gray-300">
<p className='mt-3'>Home</p>
<p>About</p>
<p>Services</p>
<p>Team</p>
<p>Blogs</p>
</div>
</div>
<div className="footer">
<h2 className='text-xl font-semibold'>Explore</h2>  
<div className="footer-content flex flex-col gap-3 text-gray-300">
<p className='mt-3'>Home</p>
<p>About</p>
<p>Services</p>
<p>Team</p>
<p>Blogs</p>
</div>
</div> */
}
