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
import Data from "../public/jobs.json";
import About from "./About"

export default function App() {
 
  const [jsonData, setJsonData] = useState(Data.jobs);

  useEffect(() => {
    // Update the JSON data file when jsonData state changes
    const updateJsonDataFile = async () => {
      try {
        const jsonDataString = JSON.stringify({ jobs: jsonData });

        // Write the updated JSON data back to the file
        await fetch("./jobs.json", {
          method: "PUT", // You may need to use PUT or other appropriate method instead of POST
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonDataString,
        });

        console.log("Job data updated successfully");
      } catch (error) {
        console.error("Error updating job data file:", error);
      }
    };

    updateJsonDataFile();
  }, [jsonData]);

  const addJob = (newJob) => {
    // Add the new job to the existing JSON d

    // Update the jsonData state with the new data
    setJsonData((prevJobs) => [...prevJobs, newJob])

    console.log("Job added successfully");
    console.log(newJob);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage jobs={jsonData} />} />
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
