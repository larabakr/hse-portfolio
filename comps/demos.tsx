import styles from "../styles/demos.module.scss";

const Demos = () => {
  return (
    <div id="demos" className={styles.demos}>
      <h1>Demos</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.cont}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OryIHb72xFM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <a href="#" download>
              Download mp3
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.cont}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/khozk8HJ3TQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <a href="#" download>
              Download mp4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
