import HeaderFacebookLogoSVG from '../svg/HeaderFacebookLogoSVG';
import HeaderInstagramLogoSVG from '../svg/HeaderInstagramLogoSVG';
import HeaderLinkedInLogoSVG from '../svg/HeaderLinkedInLogoSVG';
import HeaderOkLogoSVG from '../svg/HeaderOkLogoSVG';
import HeaderWhatsappLogoSVG from '../svg/HeaderWhatsappLogoSVG';
import HeaderYellowSplashSVG from '../svg/HeaderYellowSplashSVG';
import styles from './../styles/Header.module.css';

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <div className={styles.firstSection}>
          <HeaderOkLogoSVG />
          <a href="#about">About me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.secondSection}>
          <HeaderFacebookLogoSVG />
          <HeaderInstagramLogoSVG />
          <HeaderWhatsappLogoSVG />
          <HeaderLinkedInLogoSVG />
        </div>
      </div>
      <div>
        <HeaderYellowSplashSVG />
      </div>
    </nav>
  );
};

export default Header;
