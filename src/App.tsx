import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import styles from './styles/App.module.css';
import clsx from 'clsx';
import BetweenHeroAndAboutSVG from './svg/BetweenHeroAndAboutSVG';

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
          <div className={styles.svgContainer}>
            <BetweenHeroAndAboutSVG />
          </div>
        </section>
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
