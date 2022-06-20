import Typed from "react-typed";
import Lottie from "lottie-react";
import girl from "../public/57285-girl-waiting.json";
import styles from "../styles/Home.module.css";

export default function Intro() {
  return (
    <div className={styles.topSection}>
      <div className={styles.leftTitle}>
        <div className={styles.leftWrapper}>
          <div className={styles.intro}>
            <Typed typeSpeed={500} strings={["Hello, I am"]} loopCount={1} />
          </div>
          <h1 className={styles.name}>Comfort Olowo</h1>
          <div className={styles.titleItems}>
            <div className={styles.itemWrapper}>
              <span className={styles.item}>Fullstack Software Developer</span>
              <span className={styles.item}>Tech & Crypto Enthusiast</span>
              <span className={styles.item}>Food Lover and Blogger</span>
              <span className={styles.item}>Open to Work</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightTitle}>
        <div className={styles.imageBg}></div>
        <Lottie animationData={girl} className={styles.image} />
      </div>
    </div>
  );
}
