import React from 'react'
import heroBg from '../../assets/hero-bg.jpg'
import Robot from '../../assets/Robot.png'

const Hero = () => {
  return (
    <div className="relative w-full">
      <img src={heroBg} alt="" className="hero-bg w-full h-full object-cover" />
      <div className="hero-container flex flex-col mt-28 items-center text-white  absolute inset-0 text-center gap-6">
        <h3 className='p-2 px-7 border rounded-3xl tracking-widest' data-aos="zoom-in">Welcome to Legion</h3>
        <h1 className='text-4xl md:text-6xl font-semibold text-center tracking-normal ' data-aos="zoom-in">Endless Possibilities With <br/> Robotics & AI</h1>
        <p className='text-sm md:text-base text-gray-400 w-50'data-aos="zoom-in-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Atque,  saepe unde ad libero quos ipsum temporibus vero </p>
        <div className="buttons">
        <button className=" mt-6 px-9 py-3 ml-8 rounded-3xl text-white bg-[#5143d9] font-semibold hover:bg-[#5143d91a]  hover:text-[#5143d9] transition all ease-in-out duration-500 md:mt-0" >
            Get Started
          </button>
          <button className=" mt-5 px-8 py-2.5 ml-8 rounded-3xl text-black  bg-[#f3f3f3] font-semibold hover:bg-[#5143d91a]  hover:text-[#5143d9] transition all ease-in-out duration-500 md:mt-0" >
            Learn More
          </button>
          <img src={Robot} alt="" className='w-[32rem]  mt-20 md:mt-10 md:w-[44rem]'/>
        </div>
      </div>
    </div>
  )
}   

export default Hero
