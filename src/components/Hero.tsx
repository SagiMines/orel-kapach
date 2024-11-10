import GraphicDesignerSVG from '../svg/GraphicDesignerSVG';
import HeartSVG from '../svg/HeartSVG';
import HeroOkLogoSVG from '../svg/HeroOkLogoSVG';
import styles from './../styles/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <div className={styles.firstTextContainer}>
          <div>
            <h1>Orel Kapach</h1>
            <div>
              <p>Graphic Design & Art Director</p>
            </div>
          </div>
        </div>
        <div className={styles.secondTextContainer}>
          <div>
            <GraphicDesignerSVG />
            <div>
              <HeartSVG />
            </div>
          </div>
          <p>
            Experienced and creative graphic designer with over a decade of
            professional expertise in digital and print design. Specializes in
            developing innovative visual concepts, seamlessly blending
            contemporary trends with a deep understanding of leading brands and
            market dynamics.
          </p>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <HeroOkLogoSVG />
      </div>
    </div>
  );
};

export default Hero;
