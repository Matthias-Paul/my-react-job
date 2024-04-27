import { useState, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./HomePage";
import JobPage from "./JobPage";
import JobInfo from "./JobInfo";
import AddJob from "./AddJob";
import NotFoundPage from "./NotFoundPage";
import "./app.css";
import About from "./About"

export default function App() {
 
  
  const addJob = async (newJob) => {
  const res = await fetch("http://localhost:8000", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.Stringify(newJob)
  })


return;

  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/jobInfo/:id" element={<JobInfo />} />
        <Route path="/addJob" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
