import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import styles from './styles/App.module.css';
import clsx from 'clsx';

function App() {
  return (
    <div id="main-container" className={styles.mainContainer}>
      <header className={clsx(styles.sectionBlack, styles.header)}>
        <Header />
      </header>
      <div id="sections-container" className={styles.sectionsContainer}>
        <section id="hero" className={styles.sectionBlack}>
          <Hero />
        </section>
        <section id="about" className={styles.aboutSection}>
          <About />
        </section>
        <section id="experience" className={styles.sectionBlack}>
          <Experience />
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
