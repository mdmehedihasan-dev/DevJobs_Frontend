import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
// import { FaPhoneFlip } from "react-icons/fa6"
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://devjobs-backend-e11d.onrender.com//api/v1/user/login",
        {
          email,
          password,
          role,
          isAuthorized,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    navigate("/login");
  }

  return (
    <div>
      <div className="pt-10 text-center">
        <h1 className="text-xl  font-bold capitalize text-[#6b458e]">
          welcome to devjobs. to find your job please login{" "}
        </h1>
      </div>
      <div className="authPage">
        <div className="container">
          <div className="header">
            <h3 className="">Login Your Account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Role</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>

            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <Link to={"/register"}>Register</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/registration.png" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
