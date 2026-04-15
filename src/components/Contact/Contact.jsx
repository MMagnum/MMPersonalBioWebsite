import { useState } from 'react';
import styles from './Contact.module.css';
import githubLogo from '../../assets/icons/GitHub_Lockup_White.svg';
import linkedinLogo from '../../assets/icons/LI-Logo.png';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'mangummarc@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.description}>
        I am currently seeking opportunities in software development and would
        love to connect. Whether you have a role, a project idea, or just want
        to talk tech, feel free to reach out.
      </p>
      <div className={styles.emailBlock}>
        <a className={styles.emailLink} href={`mailto:${email}`}>
          {email}
        </a>
        <button onClick={handleCopy} className={styles.copyButton}>
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>
      <div className={styles.cardGrid}>
        <a
          className={styles.card}
          href="https://www.linkedin.com/in/marc-mangum-094987235/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.cardImg} src={linkedinLogo} alt="LinkedIn" />
        </a>

        <a
          className={styles.card}
          href="https://github.com/MMagnum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.cardImg} src={githubLogo} alt="GitHub" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
