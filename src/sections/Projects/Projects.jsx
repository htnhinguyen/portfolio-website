
import styles from './ProjectsStyles.module.css';
import stock from '../../assets/stock.png';
import mario from '../../assets/mario.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={stock}
          link="https://github.com/htnhinguyen/StockForecast"
          h3="Stock Forecast"
          p="Market Predicting Tool"
        />
        <ProjectCard
          src={mario}
          link="https://github.com/htnhinguyen/Mario-Game"
          h3="Super Mario"
          p="Game Web App"
        />
      </div>
    </section>
  );
}

export default Projects;