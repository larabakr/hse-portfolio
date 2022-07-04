import styles from "../styles/portfolio.module.scss";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.portfolio}>
      <h1>Portfolio</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLaUqy2siTXsnRKb-uDq1U6kabTCFtNv3Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Project Playlist</p>
        </div>
        <div className={styles.right}>
          <iframe
            src="./Resume.pdf"
            frameBorder="0"
            width="560"
            height="315"
          ></iframe>
          <p>Resumé</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
