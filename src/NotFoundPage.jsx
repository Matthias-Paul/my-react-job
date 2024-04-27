import {Link } from "react-router-dom"
import styles from "./notfoundpage.module.css"

export default function NotFoundPage() {
  return (
    <>
    <div > 

    <h1 className={styles.up}>   404 Not Exist </h1>
       <div className={styles.middle}>This Page Does Not Exist </div>
       <Link to="/" className={styles.btn}>Go Back</Link>

    </div>
   

    </>
  )
}
