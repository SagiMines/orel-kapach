import styles from './../styles/About.module.css';
import PersonalPhotoSVG from '../svg/PersonalPhotoSVG';
import AboutMeSVG from '../svg/AboutMeSVG';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.logoContainer}>
        <PersonalPhotoSVG />
      </div>
      <div className={styles.textContainer}>
        <h1>Hi, Nice to meet you!</h1>
        <div>
          <p>
            I'm Orel, a 29-year-old graphic designer from Sderot with extensive
            experience in the field. My journey began with studies in art and
            design at school, which later expanded into academic education,
            allowing me to deepen my knowledge across various areas of design
            and branding.
          </p>
          <p>
            I bring with me years of experience from working at a leading
            advertising agency, where I handled diverse and complex projects for
            businesses of all kinds. My expertise spans branding design, social
            media graphics, print-ready materials, and web design—all driven by
            a keen understanding of current trends and effective branding
            strategies.
          </p>
          <p>
            In an era where AI is reshaping industries, I take pride in
            integrating my knowledge of AI into my work, leveraging innovative
            technologies to deliver creative and up-to-date solutions tailored
            to clients' needs.
          </p>
          <div>
            <AboutMeSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
