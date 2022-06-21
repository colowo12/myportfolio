import Image from "next/image";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.midSection}>
      <div className={styles.leftBio}>
        <div className={styles.profileBg}></div>
        <div className={styles.profile}>
          <Image
            src="/prof.png"
            alt="profile"
            width={300}
            height={300}
            className={styles.pic}
          />
        </div>
      </div>
      <div className={styles.rightBio}>
        <div className={styles.about}>About Me</div>
        <div className={styles.text}>
          My career started in mechanical engineering but during the pandemic, I
          completed the Fullstack Academy bootcamp. This propelled me into the
          world of software engineering and it has been nothing short of
          exciting ever since. Solving real world problems with innovative and
          disruptive solutions is my passion. When I am not coding, you can find
          me eating, running, or playing board games.
        </div>
      </div>
    </div>
  );
}
