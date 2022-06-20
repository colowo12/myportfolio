import Image from "next/image";
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

export default function Projects() {
  return (
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
  );
}
