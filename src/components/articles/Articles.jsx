import React from "react";
import articlepic1 from "../../assets/articlespic1.jpg";
import articlepic2 from "../../assets/articlespic2.jpg";
import articlepic3 from "../../assets/articlespic3.jpg";
const Articles = () => {
  return (
    <div className="bg-black pt-20 pb-20">
      <div className="blog-container">
        <div className="blog-headings flex flex-col justify-center items-center ">
          <h3 className="ml-6 p-3 text-center px-4 w-[160px] border rounded-3xl tracking-widest md:ml-5">
            Our Team
          </h3>
          <h1 className="text-5xl font-semibold text-center mt-5">
            Articles About Robotic AI
          </h1>
        </div>

        <div className="blog-cards-container mt-10 md:mt-20 flex flex-col md:flex-row gap-10 md:gap-3">
          <div className="blogs-card border border-gray-500 rounded-xl overflow-hidden w-[24rem] flex flex-col justify-center items-center ml-5 pb-6">
            <img src={articlepic1} alt="" className="overflow-hidden" />
            <div className="blog-content pl-7 pt-6 flex flex-col gap-4 text-lg">
              <div className="project-date flex gap-6">
                Ask Project <ul className="text-white">November 13,2024</ul>
              </div>
              <h2 className="text-3xl font-semibold">
                Figure Unveils Humanoid Robot Prototype
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse interdum…
              </p>
            </div>
          </div>
          <div className="blogs-card border border-gray-500 rounded-xl overflow-hidden w-[24rem] flex flex-col justify-center items-center ml-5 pb-6">
            <img src={articlepic2} alt="" className="overflow-hidden" />
            <div className="blog-content pl-7 pt-6 flex flex-col gap-4 text-lg">
              <div className="project-date flex gap-6">
                Ask Project <ul className="text-white">November 13,2024</ul>
              </div>
              <h2 className="text-3xl font-semibold">
                Figure Unveils Humanoid Robot Prototype
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse interdum…
              </p>
            </div>
          </div>
          <div className="blogs-card border border-gray-500 rounded-xl overflow-hidden w-[24rem] flex flex-col justify-center items-center ml-5 pb-6">
            <img src={articlepic3} alt="" className="overflow-hidden" />
            <div className="blog-content pl-7 pt-6 flex flex-col gap-4 text-lg">
              <div className="project-date flex gap-6">
                Ask Project <ul className="text-white">November 13,2024</ul>
              </div>
              <h2 className="text-3xl font-semibold">
                Figure Unveils Humanoid Robot Prototype
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse interdum…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
