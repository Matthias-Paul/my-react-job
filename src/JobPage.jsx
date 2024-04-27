import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./job.module.css";
import JobNavBar from "./JobNavBar";
import data from "../public/jobs.json";

export default function JobPage() {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const dataJob = data.jobs;

  useEffect(() => {
    setJob(dataJob);
    setLoading(false);
  }, [dataJob]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredJobs = job.filter((jo) =>
    jo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <JobNavBar />
      <div>
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          className={styles.search}
          placeholder="Search for job title"
        />
      </div>
      <div className={styles.browse}>Browse Job</div>
  

      <div className={styles.job}>
        {loading ? (
          <div className={styles.load}></div>
        ) : (
          <>
          
         

            {filteredJobs.map((jo) => (
              <div className={styles.work} key={jo.id}>
                <div className={styles.type}>{jo.type}</div>
                <div className={styles.title}>{jo.title}</div>
                <div className={styles.descript}>{jo.description}</div>
                <div className={styles.salary}>{jo.salary}</div>
                <hr className={styles.line}></hr>
                <div className={styles.location}>{jo.location}</div>
                <Link to={`/jobInfo/${jo.id}`} className={styles.btn}>
                  Read More
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
