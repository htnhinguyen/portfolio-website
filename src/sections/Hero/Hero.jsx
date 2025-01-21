import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const emailIcon = theme === 'light' ? emailLight : emailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Emerie Nguyen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Emerie
          <br />
          Nguyen
        </h1>
        <h2>Aspiring Software Engineer</h2>
        <span>
          <a href="mailto:nhihtnguyen01@gmail.com" target="_blank">
            <img src={emailIcon} alt="Email icon" />
          </a>
          <a href="https://github.com/htnhinguyen" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/nhihtnguyen/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Hi, I’m Emerie - a Computer Science student passionate about creating impactful software. 
        <br/> I specialize in full-stack development and AI-driven applications. 
        <br/> My projects range from intuitive web apps to smart systems automating workflows and predicting market trends.
        <br/> Beyond coding, I enjoy experimenting with makeup and making fun TikToks to unwind. 
        <br/> Check out my portfolio and let's connect if something resonates!
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
