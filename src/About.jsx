import AboutNavBar from "./AboutNavBar"
import paul from "./Paul.jpg"
import styles from "./about.module.css"
export default function About() {
  return (
    <>
    <AboutNavBar/>
    <div className={styles.head} >About Us</div>
    <div>
    <img className={styles.image}  src={paul}/>
    <div className={styles.text} >
      Welcome to TechTalentHub, our mission is to bridge the gap 
      between talented individuals and exciting job opportunities 
      within the tech industry. Our platform offers a comprehensive 
      array of features designed to streamline the job search process 
      and connect top talent with innovative companies. Whether you
       are a seasoned professionals looking to advance your career 
       or a company seeking top-tier talent, TechTalentHub is your 
       go-to destination. Our platform caters to a diverse range 
       of tech professionals, from developers and designers and 
       project manager. TechTalentHub was founded with a passion for
        empowering individuals to achieve their full potential in
         the tech industry. We are driven by a shared vision of
          creating a platform that matches talent with opportunity.
    </div>
<div className={styles.contact}> Got a question or feedback? We do love to hear from you! Feel free
  to reach out to us at 
  <div>Contact Email: pauladesina117@gmail.com</div>
  <div>Contact Phone: +2349122637250</div>
</div>
    </div>
    
     
    </>
  );
}
