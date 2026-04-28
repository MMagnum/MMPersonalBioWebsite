import styles from './Hero.module.css';
import profilePic from '../../assets/images/profileImg.png';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.textContent}>
        <h1>Marc Mangum</h1>
        <h2>Software Engineer</h2>
        <p>
          I enjoy turning complex problems into clean, working software.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#projects" className={styles.ctaPrimary}>View My Projects</a>
          <a
            href="/resume.pdf"
            className={styles.ctaSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img src={profilePic} alt="Marc Mangum" className={styles.profileImage} />
      </div>
    </section>
  );
}

export default Hero;
