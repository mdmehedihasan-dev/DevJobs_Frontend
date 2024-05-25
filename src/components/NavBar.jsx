import { useContext, useState } from "react";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://devjobs-backend-e11d.onrender.com/api/v1/user/logout",
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="flex items-center justify-between py-5 ">
        <Link to={"/"} className="text-2xl font-bold text-white">
          DevJobs
        </Link>

        <div className={!show ? "menu" : "show-menu menu "}>
          <Link className="text-white" to={"/"} onClick={() => setShow(false)}>
            HOME
          </Link>

          <Link
            className="text-white"
            to={"/job/alljobs"}
            onClick={() => setShow(false)}
          >
            ALL JOBS
          </Link>

          <Link
            className="text-white"
            to={"/applications/me"}
            onClick={() => setShow(false)}
          >
            {user && user.role === "Employer"
              ? "APPLICANT'S APPLICATIONS"
              : "MY APPLICATIONS"}
          </Link>

          {user && user.role === "Employer" ? (
            <div className="space-x-5">
              <Link
                className="text-black lg:text-white"
                to={"/job/post"}
                onClick={() => setShow(false)}
              >
                POST NEW JOB
              </Link>

              <Link
                className="text-black lg:text-white"
                to={"/job/me"}
                onClick={() => setShow(false)}
              >
                VIEW YOUR JOBS
              </Link>
            </div>
          ) : (
            <div></div>
          )}

          <button onClick={handleLogout}>LOGOUT</button>
        </div>
        <div className="block cursor-pointer icon sm:hidden">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
