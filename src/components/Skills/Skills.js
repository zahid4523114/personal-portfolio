import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";
import htmlLogo from "../../images/html-svgrepo-com.svg";
import cssLogo from "../../images/css-svgrepo-com.svg";
import jsLogo from "../../images/js-svgrepo-com.svg";
import bootstrapLogo from "../../images/bootstrap-svgrepo-com.svg";
import reactLogo from "../../images/react-svgrepo-com.svg";
import tailwindLogo from "../../images/tailwindcss-icon-svgrepo-com.svg";
import nodejsLogo from "../../images/nodejs-icon-svgrepo-com.svg";
import expressLogo from "../../images/express-svgrepo-com.svg";
import mongoDbLogo from "../../images/mongodb-svgrepo-com.svg";

const Skills = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-2/5 w-full">
            <h1 className="text-4xl font-bold">My expert areas_</h1>
            <p className="py-6">
              I used to design and develop websites and web applications by
              using web technologies such as HTML, CSS, DOM, and JavaScript,
              that either run on the Open Web Platform or function as
              compilation input for non-web platform environments like React.
            </p>
            <button className="btn btn-primary">
              Download Resume
              <GrDocumentPdf className="ml-1 text-2xl text-white"></GrDocumentPdf>
            </button>
          </div>
          <div className="lg:w-3/5 w-full ">
            <h1 className="text-2xl font-bold flex border w-fit p-2 rounded-lg">
              Skills <BsArrowUpRight className="ml-1"></BsArrowUpRight>
            </h1>
            <div className="grid grid-cols-3">
              <button className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={htmlLogo} alt="" className="w-10 " />
                <span className="te1t-2xl text-white ml-2 hidden lg:block md:block">
                  Html
                </span>
              </button>
              <div className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={cssLogo} alt="" className="w-10 " />
                <span className="t1xt-2xl text-white ml-2 hidden lg:block md:block">
                  Css
                </span>
              </div>
              <div className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={jsLogo} alt="" className="w-10 " />
                <span className="1ext-2xl text-white ml-2 hidden lg:block md:block">
                  Javascript
                </span>
              </div>
              <div className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={bootstrapLogo} alt="" className="w-10 " />
                <span className="text-2x1 text-white ml-2 hidden lg:block md:block">
                  Bootstrap
                </span>
              </div>
              <div className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={reactLogo} alt="" className="w-10 " />
                <span className="tex1-2xl text-white ml-2 hidden lg:block md:block">
                  React
                </span>
              </div>
              <div className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={tailwindLogo} alt="" className="w-10 " />
                <span className="text-21l text-white ml-2 hidden lg:block md:block">
                  Tailwind
                </span>
              </div>
              <div className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={nodejsLogo} alt="" className="w-10 " />
                <span className="text12xl text-white ml-2 hidden lg:block md:block">
                  Node.js
                </span>
              </div>
              <div className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={expressLogo} alt="" className="w-10 " />
                <span className="text-1xl text-white ml-2 hidden lg:block md:block">
                  Express.js
                </span>
              </div>
              <div className="flex items-center hover:bg-slate-400 btn  w-fit mr-5 my-5 rounded-full">
                <img src={mongoDbLogo} alt="" className="w-10 " />
                <span className="text-1xl text-white ml-2 hidden lg:block md:block">
                  Mongo DB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
