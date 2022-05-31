import { FC } from "react";
import styles from "../styles/biography.module.scss";

const Biography: FC = () => {
  return (
    <div id="about" className={styles.biography}>
      <h1>About</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.content}>
            <img src="/hussein-headshot.png" alt="" />
            <div className={styles.socialMediaLinks}>
              <div className="twitter">
                <a href="https://twitter.com/HSE_VO" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "white" }}
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </div>
              {/* <div className="email">
                <a href="mailto:husseinmo.va@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "white" }}
                  >
                    <path d="M18.73,5.41l-1.28,1L12,10.46,6.55,6.37l-1.28-1A2,2,0,0,0,2,7.05V18.64A1.36,1.36,0,0,0,3.36,20H6.55V12.28L12,16.37l5.45-4.09V20h3.19A1.36,1.36,0,0,0,22,18.64V7.05A2,2,0,0,0,18.73,5.41Z"></path>
                  </svg>
                </a>
              </div> */}
              <div className="youtube">
                <a href="https://www.youtube.com/HSE-VA" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "white" }}
                  >
                    <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                  </svg>
                </a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/hussein-mohammed-hse/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "white" }}
                  >
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </a>
              </div>
              <div className="imdb">
                <a href="https://www.imdb.com/name/nm12691095/" target="_blank">
                  <img src="/imdb.webp" alt="imdb logo" draggable="false" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <article>
            <p>
              Voice Acting has been my passion even when I was a little kid; I
              always used to do impressions of my favorite movie and video game
              characters in front of my friends and always did characters'
              voices when I was playing video games. I mean, they weren't good
              impressions since I was 9 years old but I still loved doing them!
            </p>
            <p>
              Although I was born and raised in Iraq, when you hear me speak
              you'll think I come straight from the US; My natural proficiency
              in language-learning and imitating accents has made me 100% fluent
              in both English and Arabic. I have a natural North American
              accent, and most people would never know that I'm a foreigner
              unless I tell them!
            </p>
            <p>
              Since I was a kid growing up in Baghdad, I never had any creative
              outlets to express my love for acting... That's until I found my
              passion through the internet! And after many, many hours of
              research, auditioning, and improving every aspect of my work, I
              was cast in some amazing projects and had the opportunity to work
              with incredibly talented people.
            </p>
            <p>
              From Larger-Than-Life Epic Villains, Confident Leaders, and
              Authority Figures, to Elders, Satan himself, and all types of
              Characters of Arabian Heritage, I've played many types of
              characters from different backgrounds in many mediums. Including
              Animation, Video Games, Film, Audio Dramas/Audio Books, Dubbing
              work.
            </p>
            <p>
              It has been quite the journey so far, and I plan to continue
              moving forwards, creating awesome stuff, and improving my work
              every single step of the way.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Biography;
