import React from 'react'
import AboutPic from '../../assets/about.png'
import User from './User'

const About = () => {
  return (
    <div className='bg-black re' id='about'>
        <div className="about-container bg-black md:flex md:justify-between md:gap-10 md:px-[50px] md:pt-20">
            <div className="about-left flex justify-center items-center md:w-[45%]">
                <img src={AboutPic} alt="" className='w-[23rem] md:w-[80rem] rounded-3xl ' data-aos = 'flip-left'/>
            </div>


            <div className="about-right md:w-[50%]">
                <div className="about-headings flex gap-7 flex-col justify-center items-start mt-10 ml-6">
                <h3 className='p-2 px-7 border rounded-3xl tracking-widest ' data-aos = 'zoom-in'>About Us</h3>
                <h1 className='text-5xl font-semibold ' data-aos='zoom-in'>From the Unfold to Congregation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis orci arcu, et fringilla nisi pellentesque ac. Nullam nisl libero, porta ut velit in, placerat luctus magna. In sed pellentesque felis. Nulla facilisi. Maecenas at dui posuere, pulvinar quam sit amet, laoreet justo</p>
                <hr className='text-white w-full '/>
                <div className="vision flex flex-col gap-4">
                    <h2 className='text-4xl font-bold' data-aos='fade-up'>Our vision</h2>
                    <p>Nunc ullamcorper velit vel felis dictum egestas. Pellentesque tempor ipsum non ligula pharetra sodales. Praesent in arcu ultrices.</p>
                </div>
                <div className="mission flex flex-col gap-4 mt-7">
                    <h2 className='text-4xl font-bold' data-aos='fade-up'>Our mission</h2>
                    <p>Aenean ipsum eros, pulvinar nec urna sit amet, suscipit interdum ipsum. Fusce nec ipsum non nisl mattis commodo sit amet sit amet urna.</p>
                </div>
                <button className=" mt-6 px-[60px] py-3 rounded-3xl text-white bg-[#5143d9] font-semibold hover:bg-[#5143d91a]  hover:text-[#5143d9] transition all ease-in-out duration-500 ">
            Learn More
          </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About