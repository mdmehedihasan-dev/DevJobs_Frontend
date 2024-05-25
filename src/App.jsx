import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import Main from "./components/layout/Main";
import JobDetails from "./components/job/JobDetails";
import Application from "./components/applications/Application";
import MyApplication from "./components/applications/MyApplication";
import Jobs from "./components/job/Jobs";
import PostJob from "./components/job/PostJob";
import MyJobs from "./components/job/MyJobs";
import NotFound from "./components/notfound/NotFound";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import axios from "axios";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/job/alljobs" element={<Jobs />} />
        <Route path="/application/:id" element={<Application />} />
        <Route path="/applications/me" element={<MyApplication />} />
        <Route path="/job/post" element={<PostJob />} />
        <Route path="/job/me" element={<MyJobs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://devjobs-backend-e11d.onrender.com/api/v1/user/getuser",
          { withCredentials: true }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
