import ExpeienceAiLogoSVG from '../svg/ExpeienceAiLogoSVG';
import ExperienceFigmaLogoSVG from '../svg/ExperienceFigmaLogoSVG';
import ExperienceLdLogoSVG from '../svg/ExperienceLdLogoSVG';
import ExperiencePsLogoSVG from '../svg/ExperiencePsLogoSVG';
import ExperienceTimelineSVG from '../svg/ExperienceTimelineSVG';
import ExperienceYellowMeltingBallSVG from '../svg/ExperienceYellowMeltingBallSVG';
import styles from './../styles/Experience.module.css';

const Experience = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1>Knowledge & Experience</h1>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.firstInnerDataContainer}>
          <div className={styles.software}>
            <h2>Software</h2>
            <div className={styles.softwareLogos}>
              <ExpeienceAiLogoSVG />
              <ExperiencePsLogoSVG />
              <ExperienceLdLogoSVG />
              <ExperienceFigmaLogoSVG />
            </div>
          </div>

          <div className={styles.experience}>
            <h2>Experience</h2>
            <div className={styles.experienceText}>
              <span>
                Among my responsibilities were direct interaction with private
                and institutional clients, understanding client needs, creating
                business branding, designing media materials, preparing files
                for print, reading briefs, and working under pressure to meet
                predetermined targets and deadlines.
              </span>
              <ExperienceTimelineSVG />
            </div>
          </div>
        </div>
        <div className={styles.secondInnerDataContainer}>
          <div className={styles.AiAndMore}>
            <h2>Ai & More</h2>
            <ul className={styles.AiAndMoreList}>
              <li>Midjourney</li>
              <li>Runway</li>
              <li>ChatGPT</li>
              <li>ClaudeAi</li>
            </ul>
          </div>

          <div className={styles.education}>
            <h2>Education</h2>
            <ul className={styles.educationList}>
              <li>Shenkar Handesaim Digital Media Design Practical Engineer</li>
              <li>
                Ashkelon Academic College Graphic Design Professional
                certificate
              </li>
              <li>
                “Mekif Ironi Alef Ashkelon” Complete Matriculation Certificate
                Specialization in Graphic Design
              </li>
            </ul>
          </div>

          <div className={styles.militaryService}>
            <h2>Military Service</h2>
            <div className={styles.militaryServiceText}>
              Full mandatory service as an Iron Dome technician and outstanding
              commander in the Iron Dome equipment course.
            </div>
          </div>
        </div>
      </div>
      <ExperienceYellowMeltingBallSVG />
    </div>
  );
};

export default Experience;
