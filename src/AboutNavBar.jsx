import {Link} from "react-router-dom"
import styles from "./aboutnavbar.module.css"


export default function AboutNavBar() {

  
  return (
    <>
      
        <div className={styles.navbar}>
           <Link to="/" className={styles.home}>Home</Link>
           <Link to="/jobs" className={styles.job}>Jobs</Link>
           <Link to="/addJob" className={styles.addJob}>Add Job</Link>
           <Link to="/about" className={styles.about}>About Us</Link>
         </div>
        
         <hr className={styles.line}></hr>
        
    </>
  )
}





