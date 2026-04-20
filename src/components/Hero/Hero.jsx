import styles from './Hero.module.css';
import profilePic from '../../assets/images/profileImg.png';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1>Marc Mangum</h1>
        <h2>Software Engineer</h2>
        <p>
          I enjoy turning complex problems into clean, working software.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img src={profilePic} alt="Marc Mangum" className={styles.profileImage} />
      </div>
    </section>
  );
}

export default Hero;
