import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

type AdditionalClass = {
  className?: string;
};

const SocialIcons: React.FC<AdditionalClass> = ({ className }) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <IconContext.Provider
        value={{
          color: "primary",
          size: "2rem",
          className:
            "fill-primary transition duration-300 hover:fill-primary/70",
        }}
      >
        <Link to="https://www.linkedin.com/in/raigrc/" target="blank">
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/raigrc" target="blank">
          <FaGithub />
        </Link>
        <Link to="https://www.facebook.com/xrai1210" target="blank">
          <FaFacebook />
        </Link>
        <Link to="https://www.instagram.com/rai.grc/" target="blank">
          <FaInstagram />
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default SocialIcons;
