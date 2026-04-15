import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>© 2026 Marc Mangum</p>
          <div className={styles.links}>
            <a
              href="https://github.com/MMagnum"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marc-mangum-094987235/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:mangummarc@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
