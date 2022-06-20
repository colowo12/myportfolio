import styles from "../styles/Home.module.css";

export default function ContactMe({ updateValue, sendEmail }) {
  return (
    <div className={styles.contactSection}>
      <div className={styles.formTitle}>Contact Me</div>
      <form className={styles.form}>
        <input
          type="text"
          name="subject"
          placeholder="subject"
          className={styles.input}
          onChange={updateValue}
        />
        <textarea
          rows={5}
          name="message"
          placeholder="message"
          className={styles.textarea}
          onChange={updateValue}
        />
        <button type="submit" className={styles.button} onClick={sendEmail}>
          Send &rarr;
        </button>
      </form>
    </div>
  );
}
