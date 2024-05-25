import  { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Context } from "../main";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By MehediHasan.</div>
      <div>
        <Link to={"https://github.com/mdmehedihasan-dev"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/mdmehedihasan-dev"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/mdmehedihasanmr/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.linkedin.com/in/mdmehedihasanmr/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;