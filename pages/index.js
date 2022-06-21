import Head from "next/head";
import { useState } from "react";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import TechSwiper from "../components/TechSwiper";
import styles from "../styles/Home.module.css";

const initialFormData = {
  subject: "",
  message: "",
};

export default function Home() {
  const [formData, setFormData] = useState(initialFormData);
  const sendEmail = (event) => {
    event.preventDefault();
    const { subject, message } = formData;
    window.open(
      `mailto:c.olowo12@gmail.com?subject=${subject}&body=${message}`
    );
  };

  const updateValue = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Comfort Olowo</title>
        <meta name="description" content="comfort olowo portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Intro />
        <div className={styles.smalldivider}></div>
        <TechSwiper />
        <AboutMe />
        <div className={styles.divider}></div>
        <Projects />
        <div className={styles.divider}></div>
        <ContactMe updateValue={updateValue} sendEmail={sendEmail} />
        <div className={styles.divider}></div>
      </main>
      <Footer />
    </div>
  );
}
