import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Typed from "react-typed";
import Lottie from "lottie-react";
import girl from "../public/57285-girl-waiting.json";
import styles from "../styles/Home.module.css";

const Product = ({ name, description, link, src }) => {
  return (
    <div className={styles.p}>
      <div className={styles.pbrowser}>
        <div className={styles.pcircle}></div>
        <div className={styles.pcircle}></div>
        <div className={styles.pcircle}></div>
      </div>
      <div className={styles.pimg}>
        <a href={link} target="_blank" rel="noreferrer">
          <h2>{name} &rarr;</h2>
          <p>{description}</p>
        </a>
        <Image
          src={src}
          alt={name}
          width={300}
          height={300}
          className={styles.pic}
        />
      </div>
    </div>
  );
};

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
        <div className={styles.topSection}>
          <div className={styles.leftTitle}>
            <div className={styles.leftWrapper}>
              <div className={styles.intro}>
                <Typed
                  typeSpeed={500}
                  strings={["Hello, I am"]}
                  loopCount={1}
                />
              </div>
              <h1 className={styles.name}>Comfort Olowo</h1>
              <div className={styles.titleItems}>
                <div className={styles.itemWrapper}>
                  <span className={styles.item}>
                    Fullstack Software Developer
                  </span>
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
        <div className={styles.divider}></div>
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
              My career started in mechanical engineering but during the
              pandemic, I was able to complete the Fullstack Academy bootcamp.
              This propelled me into the world of software engineering and it
              has been nothing short of exciting ever since. Solving real world
              problems with innovative and disruptive solutions is my passion. I
              specifically build modern interactive websites and user friendly
              mobile applications. When I am not coding, you can find me eating,
              running, or playing games.
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.grid}>
          <Product
            name="Tech Flip"
            description="Mobile gaming application created using React-Native"
            link={"https://github.com/Tech-Flip/techflip"}
            src="/GameView.png"
          />
          <Product
            name="Book Shopper"
            description="Mock e-commerce app built using the MERN stack"
            link={"https://github.com/2011-team-chatime/graceshopper"}
            src="/shopper.png"
          />
          <Product
            name="Plutus"
            description="Financial management app built integrating Plaid API"
            link={"https://github.com/2011-team-phantom/phantom"}
            src="/plutus.png"
          />
        </div>
        <div className={styles.divider}></div>
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
      </main>

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
          <p> - View Resume</p>
        </a>
      </footer>
    </div>
  );
}
