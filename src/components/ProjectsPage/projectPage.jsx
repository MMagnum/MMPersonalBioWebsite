import { useState } from "react";
import styles from "./projectPage.module.css";

const projects = [
  {
    title: 'X86 CPU Emulator',
    description: 'A custom CPU emulator built in C++ for a computer architecture course. It supports a variety of instructions and allows users to simulate instruction execution, registers, and memory behavior.',
    details: 
      'This project involved building the fetch, decode, and execute cycle for a custom instruction set. I worked with program memory, register handling, branching, and instruction parsing while debugging low-level behavior.',
    tech: ['C++', 'CMake', 'Google Test'],
    highlights: [
      'Implemented fetch, decode, and execute stages',
      'Simulated registers and memory interactions',
      'Tested behavior with structured unit tests',
    ],
    github: '#',
  },
  {
    title: 'Assembler Project',
    description: 
      'A Python assembler that translates assembly language into binary machine code. It supports a custom instruction set and allows users to write assembly code that can be assembled into executable binaries.',
    details:
      'This project involved parsing assembly language, handling labels and directives, and generating binary output. I implemented a two-pass assembler that first resolves labels and then generates machine code.',
    tech: ['Python', 'Regex', 'Assembly Language', 'Binary Encoding'],
    highlights: [
      'Parsed assembly language with regex',
      'Handled labels and directives in a two-pass assembler',
      'Generated binary machine code output for use with the CPU emulator',
    ],
    github: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A personal portfolio website built with React to showcase my projects, skills, and experience. It features a clean design and responsive layout to provide an optimal viewing experience across devices.',
    details:
      'This project involved designing and implementing a React-based portfolio site. I created components for the hero section, project listings, and about me section, and styled the site using CSS modules.',
    tech: ['React', 'CSS Modules', 'JavaScript', 'HTML'],
    highlights: [
      'Designed a responsive layout with CSS modules',
      'Implemented reusable React components for different sections of the site',
      'Showcased projects and skills in an organized manner',
    ],
    github: '#',
  }
];

function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleProjectDetails = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <section id="projects" className={styles.project}>
      <h2 className={styles.heading}>Projects</h2>
      <p className={styles.subtext}>A selection of projects that reflect my interest in software development, problem-solving, and building practical tools.</p>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.summary}>
              <div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
                <button 
                  className={styles.toggleBtn}
                  onClick={() => toggleProjectDetails(index)}>
                    {selectedProject === index ? 'Show Less' : 'Show More'}
                </button>
            </div>
            {selectedProject === index && (
              <div className={styles.expanded}>
                <p className={styles.details}>
                  {project.details}
                </p>
                <div className={styles.techList}>
                  {project.tech.map((item, i) => (
                    <span key={i} className={styles.techItem}>
                      {item}
                    </span>                    
                  ))}
                </div>

                <ul className={styles.highlights}>
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;
