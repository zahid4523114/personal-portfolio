import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <h1 className="lg:text-4xl text-4xl font-extrabold text-center mt-10">
        GET IN <span className="text-warning ">TOUCH</span>
      </h1>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-left lg:w-2/5 lg:text-left">
            <h1 className="lg:text-3xl text-2xl mt-3 font-bold">
              DON'T BE SHY !
            </h1>
            <p className="lg:py-6 lg:my-2 my-5">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="flex mb-3">
              <p>
                {" "}
                <FaMapMarkerAlt className="lg:text-4xl text-2xl text-warning mr-3"></FaMapMarkerAlt>
              </p>
              <div>
                <h1>ADDRESS POINT</h1>
                <small className="font-bold">
                  Ghatail,Tangail <br /> Dhaka,Bangaldesh
                </small>
              </div>
            </div>
            <div className="flex mb-3">
              <p>
                <CiMail className="lg:text-4xl text-2xl text-warning mr-3"></CiMail>
              </p>
              <div>
                <h1>MAIL ME</h1>
                <small className="font-bold whitespace-wrap">
                  dewanmohammodzahidhasan@ gmail.com
                </small>
              </div>
            </div>
            <div className="flex mb-3">
              <p>
                <BsTelephone className="lg:text-4xl  text-2xl text-warning mr-3"></BsTelephone>
              </p>
              <div>
                <h1>CALL ME</h1>
                <small className="font-bold">+880 1734095414</small>
              </div>
            </div>
            <div className="flex mt-5">
              <a href="https://www.facebook.com/Zahid4523114">
                <FaFacebook className="lg:text-3xl text-2xl ml-3 text-white hover:text-warning"></FaFacebook>
              </a>
              <a href="https://www.linkedin.com/in/zahid-hasnan-0a93a2244/">
                <FaLinkedin className="lg:text-3xl text-2xl ml-3 text-white hover:text-warning"></FaLinkedin>
              </a>
              <a href="https://twitter.com/Zahid4523114">
                <FaTwitter className="lg:text-3xl text-2xl ml-3 text-white hover:text-warning"></FaTwitter>
              </a>
            </div>
          </div>
          <div className="card flex-shrink-0 lg:w-3/5 ">
            <div className="card-body p-5">
              <div className="lg:flex lg:justify-between lg:items-center lg:my-5">
                <div className="form-control lg:w-1/2">
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="input input-bordered mr-1 rounded-full  focus:text-black focus:bg-slate-200"
                  />
                </div>
                <div className="form-control  lg:w-1/2 lg:my-0 my-5 ">
                  <input
                    type="text"
                    placeholder="YOUR EMAIL"
                    className="input input-bordered ml-1 rounded-full  focus:text-black focus:bg-slate-200 "
                  />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="YOUR SUBJECT"
                  className="input input-bordered rounded-full mb-5  focus:text-black focus:bg-slate-200"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered rounded-2 focus:text-black focus:bg-slate-200"
                  placeholder="YOUR MESSAGE"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn lg:w-52 rounded-full hover:bg-warning hover:text-white">
                  Send Message
                  <FaTelegramPlane className="text-2xl ml-2"></FaTelegramPlane>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
//DON'T BE SHY !
// Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
