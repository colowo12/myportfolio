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
import useWindowDimensions from "./ResizeWindow";

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
  const { height, width } = useWindowDimensions();
  const dim = (pix) => {
    switch (pix) {
      case pix > 2400:
        return 6;
      case pix > 2000:
        return 5;
      case pix > 1600:
        return 4;
      case pix > 1200:
        return 3;
      case pix > 800:
        return 2;
      case pix > 500:
        return 1;
      default:
        return 4;
    }
  };
  const params = {
    centeredSlides: true,
    slidesPerView: dim(width),
    spaceBetween: 10,
    freeMode: true,
    slidesPerGroup: dim(width),
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
        Specialized in building modern, interactive, and user friendly web and
        mobile applications utilizing ...
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
