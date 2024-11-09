import styles from './styles/App.module.css';

function App() {
  return (
    <div id="main-container" className={styles.mainContainer}>
      {/* Header */}
      hello
      <div id="sections-container" className={styles.sectionsContainer}>
        <section id="hero" className={styles.sectionBlack}>
          Hero
        </section>
        <section id="about">About</section>
        <section id="experience" className={styles.sectionBlack}>
          Experience
        </section>
        <section id="design" className={styles.sectionYellow}>
          Design
        </section>
        <section id="projects" className={styles.sectionBlack}>
          Projects
        </section>
        <section id="contact" className={styles.sectionBlack}>
          Contact
        </section>
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
