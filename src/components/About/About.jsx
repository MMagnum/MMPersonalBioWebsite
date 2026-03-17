import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtext">
          My background, experience, and the kinds of projects I enjoy building.
        </p>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I recently completed my Computer Science degree at Utah Valley
              University, where I focused on software development, algorithms,
              and systems programming.
            </p>

            <p>
              I enjoy building practical software and understanding how systems
              work under the hood. My projects include a Python assembler that
              translates assembly language into binary and a C++ CPU emulator
              that executes those instructions.
            </p>

            <p>
              I also have professional experience solving technical problems in
              a real-world design environment, which strengthened my attention
              to detail and ability to work through constraints carefully.
            </p>
          </div>

          <aside className={styles.skillsCard}>
            <h3 className={styles.skillsTitle}>Highlights</h3>
            <ul className={styles.skillsList}>
              <li>
                <strong>C++:</strong> Implemented a CPU emulator with
                instruction execution and memory handling
              </li>
              <li>
                <strong>Python:</strong> Built an assembler to translate
                assembly language into binary
              </li>
              <li>
                <strong>Systems:</strong> Designed a full pipeline from assembly
                code to CPU execution
              </li>
              <li>
                <strong>React:</strong> Developing a personal portfolio and web
                applications
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
