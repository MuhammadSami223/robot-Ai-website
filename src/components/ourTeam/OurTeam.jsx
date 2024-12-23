import React from 'react'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import teamBg from '../../assets/teamBg.jpg'
const OurTeam = () => {
  return (
    <div className='bg-[#111111] pt-10 pb-40 md:px-10' id='contact'>
        <div className="team-container">
            <div className="team-headings">
            <h3 className='ml-6 p-3 text-center px-4 w-[160px] border rounded-3xl tracking-widest md:ml-5'>
                Our Team</h3>
            <h1 className='text-5xl leading-tight ml-6 mt-4'>Meet the Professionals</h1>
            <p className='ml-6 w-[90%] md:w-[57%] mt-5 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo ullamcorper mattis.</p>
        </div>
        <div className="team-card-container flex flex-col md:flex-row gap-10">
            <div className="team-card">
                <div className="man-img w-[350px] mt-10 rounded-xl flex justify-center items-center ml-4 relative">
                    <img src={team1} alt="" className='rounded-3xl'/>
                </div>
                <div className="team-about absolute">
                    <img src={teamBg} alt="" className='w-[280px] h-[160px] mt-[-120px] rounded-3xl opacity-90 ml-[100px] md:ml-[120px]'/>
                    <div className="team-content absolute ml-[130px] md:ml-[140px] mt-[-120px]">
                    <h2 className='text-xl font-semibold'>Json garaham</h2>
                    <h3 className='mt-1'>Engineer</h3>
                    <div className="icons flex gap-3 mt-2 text-xl">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                    </div>
                </div>
            </div>
            <div className="team-card">
                <div className="man-img w-[350px] mt-10 rounded-xl flex justify-center items-center ml-4 relative">
                    <img src={team2} alt="" className='rounded-3xl'/>
                </div>
                <div className="team-about absolute">
                <img src={teamBg} alt="" className='w-[280px] h-[160px] mt-[-120px] rounded-3xl opacity-90 ml-[100px] md:ml-[120px]'/>
                    <div className="team-content absolute ml-[130px] md:ml-[140px] mt-[-120px]">
                    <h2 className='text-xl font-semibold'>Linda Frosts</h2>
                    <h3 className='mt-1'>Engineer</h3>
                    <div className="icons flex gap-3 mt-2 text-xl">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                    </div>
                </div>
            </div>
            <div className="team-card">
                <div className="man-img w-[350px] mt-10 rounded-xl flex justify-center items-center ml-4 relative">
                    <img src={team3} alt="" className='rounded-3xl'/>
                </div>
                <div className="team-about absolute">
                <img src={teamBg} alt="" className='w-[280px] h-[160px] mt-[-120px] rounded-3xl opacity-90 ml-[100px] md:ml-[120px]'/>
                    <div className="team-content absolute ml-[130px] md:ml-[140px] mt-[-120px]">
                    <h2 className='text-xl font-semibold'>Peter Ramlan</h2>
                    <h3 className='mt-1'>Engineer</h3>
                    <div className="icons flex gap-3 mt-2 text-xl">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OurTeam