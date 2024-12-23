import React from 'react'
import chooseimg from '../../assets/chooseimg.jpg'
import choosebg from '../../assets/choosebg.jpg'
const Choose = () => {
  return (
    <div className='bg-black w-full pb-20 pt-20'>
        <div className="choose-container md:flex md:px-10">
            <div className="choose-left pl-3 pt-10 md:w-[50%] mt-10">
         <h3 className='p-3 text-center px-6 w-[200px] border rounded-3xl tracking-widest md:ml-5'>Why choose us</h3>
         <h1 className='text-[40px] leading-snug font-semibold p-3 md:ml-5'>Post of the High Technology</h1>
         <div className="certificate-container flex flex-col gap-4">

         <div className="certificate mt-10 md:mt-3  ml-3 md:flex md:gap-6">
            <div className="cer-icon bg-white w-10 h-10 text-center rounded-full flex items-center justify-center md:mt-3">
            <ion-icon name="checkmark-outline"></ion-icon>
            </div>
            <div className="cer-content mt-3 flex flex-col gap-5 ">
            <h3 className='text-2xl font-semibold '>Technology Integration</h3>
            <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <hr className='mt-5 pr-10 w-[20rem] text-center'/>
            </div>
         </div>
         <div className="certificate mt-10 md:mt-3 ml-3 md:flex md:gap-6">
            <div className="cer-icon bg-white w-10 h-10 text-center rounded-full flex items-center justify-center md:mt-3">
            <ion-icon name="checkmark-outline"></ion-icon>
            </div>
            <div className="cer-content mt-3 flex flex-col gap-5 md:flex">
            <h3 className='text-2xl font-semibold'>Certified Experts</h3>
            <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <hr className='mt-5 pr-10 w-[20rem] text-center'/>
            </div>
         </div>
         <div className="certificate mt-10 md:mt-3 ml-3 md:flex md:gap-6">
            <div className="cer-icon bg-white w-10 h-10 text-center rounded-full flex items-center justify-center md:mt-3">
            <ion-icon name="checkmark-outline"></ion-icon>
            </div>
            <div className="cer-content mt-3 flex flex-col gap-5 md:flex">
            <h3 className='text-2xl font-semibold'>Future Vision and Mission</h3>
            <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <hr className='mt-5 pr-10 w-[20rem] text-center'/>
            </div>
         </div>
         </div>
            </div>
            <div className="choose-right md:w-[50%]">
                <div className="choose-image relative mt-10 flex ml-6 rounded-xl">
                    <img src={chooseimg} alt=""className='w-[21rem] md:w-[33rem] md:h-[47rem] rounded-xl'/>
                    <img src={choosebg} alt="" className='absolute opacity-10 mt-[0rem] w-[21rem]  md:w-[33rem] h-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose