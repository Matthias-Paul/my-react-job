import { useState } from "react";
import {useNavigate} from "react-router-dom"
import AddJobNavBar from "./AddJobNavBar.jsx";
import styles from "./addjob.module.css";
import PropTypes from "prop-types"
export default function AddJob({ addJobSubmit }) {
  const [type, setType] = useState("Full-Time");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const navigate = useNavigate()



  const submitForm = (e)=>{
    e.preventDefault();
   
   const newJob ={
   type,
   title,
   location,
   description, 
   salary,
   company:{
     name:companyName,
     description:companyDescription,
     contactEmail,
     contactPhone,
   },
   };
   addJobSubmit(newJob)
   
    return navigate("/jobs");
   
    }








 const handleType = (e)=>{
  setType(e.target.value)
  
 }
 const handleTitle = (e)=>{
  setTitle(e.target.value)
 }
 const handleLocation = (e)=>{
  setLocation(e.target.value)
 }
 const handleDescription = (e)=>{
  setDescription(e.target.value)
 }
 const handleSalary = (e)=>{
  setSalary(e.target.value)
 }
 const handleCompanyName = (e)=>{
  setCompanyName(e.target.value)
 }
 const handleCompanyDescription = (e)=>{
  setCompanyDescription(e.target.value)
 }
 const handleContactEmail = (e)=>{
  setContactEmail(e.target.value)
 }
 const handleContactPhone = (e)=>{
  setContactPhone(e.target.value)
 }


















  return (
    <>
      <AddJobNavBar />
      <h2 className={styles.heading}>Add Job</h2>
      <div className={styles.all}>
        <form  onSubmit={submitForm}className={styles.form}>
          <div className={styles.head}>Job type</div>
          <select onChange={handleType} value={type} className={styles.type}>
            <option value="Full_time">Full-Time</option>
            <option value="Remote">Remote</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
          <div className={styles.head}>Job Name</div>
          <input
           className={styles.in} 
           required
           type="text"
           value={title} 
           onChange={handleTitle} 
           />
          <div className={styles.head}>Description</div>
          <textarea
            placeholder="Add any job duties, expectation, requirement etc"
            className={styles.in}
            rows="4"
            required
            type="text"
            value={description}
            onChange={handleDescription}  
          />
          <div className={styles.head}>Salary</div>
          <input 
          className={styles.in} 
          placeholder="$90 - $120 per year" 
          value={salary} 
          required
          onChange={handleSalary} 
          />
          <div className={styles.head}>Location</div>
          <input
           placeholder="Company location" 
           className={styles.in} 
           value={location} 
           onChange={handleLocation} 
           />
          <div className={styles.info}>Company Info</div>
          <div className={styles.head}>Company Name</div>
          <input
           className={styles.in}
            type="text"
            value={companyName}
            required
            onChange={handleCompanyName}  
            />
          <div className={styles.head}>Company Description</div>
          <textarea
            placeholder="What does your company do?"
            className={styles.in}
            rows="4"
            type="text"
            required
            value={companyDescription} 
            onChange={handleCompanyDescription} 
          />
          <div className={styles.head}>Contact Email</div>
          <input
            placeholder="Email address for applicants"
            className={styles.in}
            type="text"
            value={contactEmail} 
            required
            onChange={handleContactEmail} 
          />
          <div className={styles.head}>Contact Phone</div>
          <input
            placeholder="Phone number for applicants eg +234"
            className={styles.in}
            required
            type="tel"
            value={contactPhone} 
            onChange={handleContactPhone} 
          />
          <button  className={styles.btn} type="submit">
            Add Job
          </button>
        </form>
      </div>
    </>
  );
}
AddJob.propTypes={
  addJobSubmit:PropTypes.func.isRequired,
}