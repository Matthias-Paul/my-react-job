import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import JobNavBar from "./JobNavBar";
import styles from "./jobinfo.module.css";
import jobData from "../public/jobs.json"; // Import JSON file

export default function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = jobData.jobs 
    setJob(data.find((job) => job.id == id));
    setLoading(false);
  }, [id]);

  return (
    <>
      <JobNavBar />
      <div className={styles.back}>
        <Link to="/jobs" className={styles.arrow}>
          &#8592;
        </Link>
        <span className={styles.list}> Back to job listing </span>
      </div>

      <div className={styles.all}>
        <div>
          {loading && <div className={styles.load}></div>}
          {!loading && job && (
            <div className={styles.top}>
              <div className={styles.type}>{job.type}</div>
              <div className={styles.title}>{job.title}</div>
              <div className={styles.location}>{job.location}</div>
              <hr></hr>
              <div className={styles.topic}>Job Description</div>
              <div className={styles.description}>{job.description}</div>
              <div className={styles.topic}>Salary</div>
              <div className={styles.salary}>{job.salary}</div>
              <hr></hr>
              <div className={styles.topic}>Company Info</div>
              <div className={styles.name}>{job.company.name}</div>
              <div className={styles.description}>
                {job.company.description}
              </div>
              <div className={styles.topic}>Contact Email:</div>
              <div className={styles.mean}>{job.company.contactEmail}</div>
              <div className={styles.topic}>Contact Phone:</div>
              <div className={styles.mean}>{job.company.contactPhone}</div>
          
            </div>
             

          )}
             <Link to="/addJob" className={styles.btn}>Add New Job</Link>
        </div>
      </div>
    </>
  );
}
