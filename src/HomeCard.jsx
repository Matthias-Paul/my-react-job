import styles from "./homecard.module.css"
import {Link} from "react-router-dom"
export default function HomeCard() {
  return (
    <>
    <div className={styles.homecard}>

       <div className={styles.job}>
    <h2  className={styles.topic}>For TechTalent</h2>
    <p  className={styles.paragraph}>Browse our jobs and start your career today</p>
    <Link to="/jobs"  className={styles.btn}>Browse Jobs</Link>
       </div>

       <div  className={styles.job}>
    <h2  className={styles.topic}>For Employers</h2>
    <p className={styles.paragraph}>List your job to find the perfect TechTalent for the role</p>
    <Link to="/addJob" className={styles.btn} >Add Jobs</Link>
       </div>


       <div  className={styles.job}>
    <h2  className={styles.topic}>About Us</h2>
    <p className={styles.paragraph}>
      For a comprehensive overview of our value and mission, navigate to our "About page".
    </p>
    <Link to="/about" className={styles.btn} >About Us</Link>
       </div>

     
    </div>
    </>
  )
}
