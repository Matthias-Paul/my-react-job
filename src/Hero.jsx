import styles from "./hero.module.css";
export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.head}> Become a TechTalentHub </h1>
        <p className={styles.body}>
          Find the job that fits your skills and needs
        </p>
      </div>
    </>
  );
}
