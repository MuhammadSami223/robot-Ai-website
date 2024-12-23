import React,{useState} from 'react'
import CountUp from "react-countup"
import user from '../../assets/user.png'
import ScrollTrigger from 'react-scroll-trigger'
const User = () => {
    const  [CounterOn, setCounterOn] = useState(false)  
return(
    <div className='bg-black w-full pt-20 pb-20'>
        <div className="brand-continer flex flex-col md:flex-row gap-10 justify-center items-center">
    <div className="brand" data-aos='fade-up'>
   <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <img src={user} alt="" className='w-[250px] h-[160px] relative brand-img opacity-60' />
<div className=" text-white absolute mt-[-116px] ml-[70px] text-center">
{CounterOn && <span  className='text-4xl  font-semibold'><CountUp start={1} end={25} duration={4}/>+</span>}
    <div className='text-md'>Years of Experience</div>
</div>
    </ScrollTrigger> 
      </div>
    <div className="brand" data-aos='fade-up'>
   <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <img src={user} alt="" className='w-[250px] h-[160px] relative brand-img opacity-60' />
<div className=" text-white absolute mt-[-116px] ml-[70px] text-center">
{CounterOn && <span  className='text-4xl  font-semibold'><CountUp start={1} end={400} duration={4}/>+</span>}
    <div>Trusted Partners</div>
</div>
    </ScrollTrigger> 
      </div>
    <div className="brand" data-aos='fade-up'>
   <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <img src={user} alt="" className='w-[250px] h-[160px] relative brand-img opacity-60' />
<div className=" text-white absolute mt-[-116px] ml-[70px] text-center">
{CounterOn && <span  className='text-4xl  font-semibold'><CountUp start={5000} end={5100} duration={4}/>+</span>}
    <div>Users Worldwide</div>
</div>
    </ScrollTrigger> 
      </div>
        <div className="brand" data-aos='fade-up'>
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <img src={user} alt="" className='w-[250px] h-[160px] relative brand-img opacity-60' />
    <div className=" text-white absolute mt-[-116px] ml-[70px] text-center">
    {CounterOn && <span  className='text-4xl  font-semibold'><CountUp start={1} end={99} duration={4}/>%</span>}
        <div>Positive Review</div>
    </div>
        </ScrollTrigger> 
        </div>
    </div>
        </div>
  )
}

export default User

 