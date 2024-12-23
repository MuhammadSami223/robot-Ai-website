import React from 'react'
import user from '../../assets/user.png'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'

const Services = () => {
  return (
    <div className=' bg-[#111111] p-10 ' id='services'>
            <div className="services-container  text-center flex  flex-col justify-center items-center ">
        <h3 className='p-3 px-7 w-[200px] border rounded-3xl tracking-widest uppercase'>Our Services</h3>
        <h1 className='text-3xl md:text-5xl  md:w-[60%] leading-tight mt-10 text-center font-semibold' >Partial High Tech, Library Machiner</h1>
        <div className="services mt-10 flex md:flex-row flex-col flex-wrap gap-10 justify-center items-center">
        <div className="brand ">
    <img src={user} alt="" className='w-[340px] md:w-[550px] h-[500px] relative brand-img opacity-40' />
<div className=" text-white absolute mt-[-346px] text-start">
    <img src={service1} alt="" className='w-[100px] ml-[30px]'/>
    <div className="content ml-5">
    <h1 className='text-2xl'>Education and Science</h1>
    <p className='mt-5 w-[18rem] md:w-[46%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis</p>
    <button className=" mt-6 px-[60px] py-3 rounded-3xl text-white bg-[#5143d9] font-semibold hover:bg-[#5143d91a]  hover:text-[#5143d9] transition all ease-in-out duration-500 ">
            Learn More
          </button>
    </div>
</div>
      </div>
        <div className="brand ">
    <img src={user} alt="" className='w-[340px] md:w-[550px] h-[500px] relative brand-img opacity-40' />
<div className=" text-white absolute mt-[-346px] text-start">
    <img src={service2} alt="" className='w-[100px] ml-[30px]'/>
    <div className="content ml-5">
    <h1 className='text-2xl'>Robotics & Automation</h1>
    <p className='mt-5 w-[18rem] md:w-[76%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis</p>
    <button className=" mt-6 px-[60px] py-3 rounded-3xl text-white bg-[#5143d9] font-semibold hover:bg-[#5143d91a]  hover:text-[#5143d9] transition all ease-in-out duration-500 ">
            Learn More
          </button>
    </div>
</div>
      </div>
        <div className="brand ">
    <img src={user} alt="" className='w-[340px] md:w-[550px] h-[500px] relative brand-img opacity-40' />
<div className=" text-white absolute mt-[-346px] text-start">
    <img src={service3} alt="" className='w-[100px] ml-[30px]'/>
    <div className="content ml-5">
    <h1 className='text-2xl'>Artificial Inteligence</h1>
    <p className='mt-5 w-[18rem] md:w-[46%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis</p>
    <button className=" mt-6 px-[60px] py-3 rounded-3xl text-white bg-[#5143d9] font-semibold hover:bg-[#5143d91a]  hover:text-[#5143d9] transition all ease-in-out duration-500 ">
            Learn More
          </button>
    </div>
</div>
      </div>
        <div className="brand ">
    <img src={user} alt="" className='w-[340px] md:w-[550px] h-[500px] relative brand-img opacity-40' />
<div className=" text-white absolute mt-[-346px] text-start">
    <img src={service4} alt="" className='w-[100px] ml-[30px]'/>
    <div className="content ml-5">
    <h1 className='text-2xl'>Electronic & Technology  </h1>
    <p className='mt-5 w-[18rem] md:w-[76%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.luctus nec ullamcorper mattis</p>
    <button className=" mt-6 px-[60px] py-3 rounded-3xl text-white bg-[#5143d9] font-semibold hover:bg-[#5143d91a]  hover:text-[#5143d9] transition all ease-in-out duration-500 ">
            Learn More
          </button>
    </div>
</div>
      </div>
       
        </div>
        </div>
    </div>
  )
}

export default Services