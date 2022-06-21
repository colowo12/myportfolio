import Image from "next/image";
import Swiper from "react-id-swiper";
import SwiperCore, {
  Mousewheel,
  Navigation,
  Pagination,
  Lazy,
  Controller,
  Autoplay,
  EffectFlip,
  EffectCoverflow,
  Thumbs,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "../styles/TechSwiper.module.css";

SwiperCore.use([
  Mousewheel,
  Navigation,
  Pagination,
  Lazy,
  Controller,
  Autoplay,
  EffectFlip,
  EffectCoverflow,
  Thumbs,
]);

const stacks = [
  "html",
  "css",
  "tailwindcss",
  "javascript",
  "typescript",
  "nextjs",
  "react",
  "reactnative",
  "redux",
  "apollo",
  "graphql",
  "nodejs",
  "express",
  "python",
  "django",
  "postgres",
  "mongodb",
  "sql",
  "mochachai",
  "jest",
  "heroku",
];

export default function TechSwiper() {
  const params = {
    centeredSlides: true,
    slidesPerView: 7,
    spaceBetween: 10,
    freeMode: true,
    slidesPerGroup: 7,
    loop: true,
    loopFillGroupWithBlank: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className={styles.swipers}>
      <p className={styles.desc}>
        Specialized in building modern, interactive, and user friendly websites
        and mobile applications utilizing various tools such as
      </p>
      <div className={styles.container}>
        <Swiper {...params}>
          {stacks.map((stack, idx) => {
            return (
              <div key={idx} className={styles.card}>
                <Image
                  src={`/stack/${stack}.png`}
                  alt="profile"
                  width={125}
                  height={125}
                  className={styles.pic}
                />
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
