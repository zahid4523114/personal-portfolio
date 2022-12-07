import React from "react";
import logo from "../../images/profile.png";
import {
  FaTelegramPlane,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            <img alt="" src={logo} className="w-4/5 mx-auto rounded-lg " />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Zahid Hasnan</h1>
            <h4>Front-End Developer</h4>
            <p className="py-6">
              {/* I'm creative developer based in Bangladesh,and I'am very <br />
              passionate and dedicated to my work. */}
              I'm a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <button className="btn btn-primary">
              Say Hello
              <FaTelegramPlane className="text-xl ml-1"></FaTelegramPlane>
            </button>
            <div className="flex mt-5">
              <p>Follow me : </p>
              <a href="https://www.facebook.com/Zahid4523114">
                <FaFacebook className="text-2xl ml-3 text-white hover:text-primary"></FaFacebook>
              </a>
              <a href="https://www.linkedin.com/in/zahid-hasnan-0a93a2244/">
                <FaLinkedin className="text-2xl ml-3 text-white hover:text-primary"></FaLinkedin>
              </a>
              <a href="https://twitter.com/Zahid4523114">
                <FaTwitter className="text-2xl ml-3 text-white hover:text-primary"></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
