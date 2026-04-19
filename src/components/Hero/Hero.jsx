import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div>
          <h1>Marc Mangum</h1>
          <h3>Software Engineer</h3>
          <p>I enjoy turning complex problems into clean, working software.</p>
        </div>
        <div>
          <a href="#projects" className={styles.btn}>
            View Project
          </a>
          <a
            href="https://github.com/MMagnum"
            className={styles.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <a href="#about" className={styles.btn}>
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;
