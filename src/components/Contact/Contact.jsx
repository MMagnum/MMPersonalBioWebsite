import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtext">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <div className={styles.contactInfo}>
          <a href="mailto:mangummarc@gmail.com" className={styles.contactLink}>
            Email:
          </a>
          <a
            href="https://www.linkedin.com/in/marc-mangum-094987235/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
