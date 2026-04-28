import styles from './About.module.css';

const skills = [
  'C++', 'CMake', 'Google Test',
  'Python', 'Regex', 'Assembly',
  'React', 'JavaScript', 'CSS Modules',
  'Systems Programming', 'Git',
];

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
            <h3 className={styles.skillsTitle}>Skills & Tools</h3>
            <div className={styles.skillsTags}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
