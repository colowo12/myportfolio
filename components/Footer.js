import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/comfort-o/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
        </span>
      </a>
      <a
        href="https://github.com/colowo12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          <Image src="/github.svg" alt="github" width={20} height={20} />
        </span>
      </a>
      <a
        href="https://www.twitter.com/comfebee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          <Image src="/twitter.svg" alt="twitter" width={20} height={20} />
        </span>
      </a>

      <a href="/ComfortResume.pdf" target="_blank" rel="noopener noreferrer">
        <span className={styles.logo}>
          <Image src="/file.svg" alt="resume" width={20} height={20} />
        </span>
        <p> &rarr; Resume</p>
      </a>
    </footer>
  );
}
