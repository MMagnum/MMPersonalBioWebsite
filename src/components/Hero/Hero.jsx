import styles from './Hero.module.css';
import profilePic from '../../assets/images/profileImg.png';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div>
          <h1>Marc Mangum</h1>
          <h3>Software Engineer</h3>
          <p>
            I enjoy turning complex problems into clean, working software.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={profilePic}
            alt='Marc Mangum'
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
