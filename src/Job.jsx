import {Link} from "react-router-dom"
import { useState, useEffect} from "react"
import styles from "./job.module.css"
import data from "../public/jobs.json"
export default function Job() {
const [job, setJob] = useState([])
const [loading, setLoading] = useState(true)


useEffect (()=>{
 const fetchData= async () =>{
  const dataJob = data.jobs.slice(0, 4)
try{
setJob(dataJob)
} catch(error){
console.error("error fetching data", error)
} finally{
setLoading(false)
}




 }
fetchData()
},[])




  return (
    <>
 <div className={styles.bro}>Browse Job</div> 
    <div className={styles.jobs}>    
        
    
       {loading ? (<div className={styles.load}></div>):(
<>
  

{job.map((jo)=>
  <div  className={styles.work}  key={jo.id}>
    <div className={styles.type}>{jo.type}</div>
    <div className={styles.title}>{jo.title}</div>
    <div className={styles.descript}>{jo.description}</div>
    <div className={styles.salary}>{jo.salary}</div>
    <hr className={styles.line}></hr>
    <div className={styles.location}>{jo.location}</div>
    
    <Link to={`/jobInfo/${jo.id}`} className={styles.btn}>Read More</Link>
   
  </div>






  )}
</>
       )}



   

        </div>
        
        <Link to="/jobs" className={styles.view}>View All Jobs</Link>
     
    </>
  )
}
