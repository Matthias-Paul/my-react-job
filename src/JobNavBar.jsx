import {Link} from "react-router-dom"
import styles from "./jobnavbar.module.css"


export default function JobNavBar() {

  
  return (
    <>
      
        <div className={styles.navbar}>
           <Link to="/" className={styles.home}>Home</Link>
           <Link  className={styles.job}>Jobs</Link>
           <Link to="/addJob" className={styles.addJob}>Add Job</Link>
           <Link to="/about" className={styles.about}>About Us</Link>
         </div>
        
         <hr className={styles.line}></hr>
         <div className={styles.help}></div>
    </>
  )
}





