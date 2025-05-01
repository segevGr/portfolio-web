import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionContainer from "../utilComponents/SectionContainer";
import ProfessionCard from "./ProfessionCard";
import FadeOnScroll from "../utilComponents/FadeOnScroll";
import { professionsList } from "../../data/professionData";

const Profession = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(2);

  return (
    <SectionContainer id="profession" title={"My Profession"}>
      <div className="w-full max-w-6xl px-4 relative pb-12">
        <div
          style={{
            top: "calc(50% - 36px)",
            transform: "translateY(-50%)",
          }}
          className="swiper-button-prev absolute cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>

        <div
          style={{
            top: "calc(50% - 36px)",
            transform: "translateY(-50%)",
          }}
          className="swiper-button-next absolute cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <FadeOnScroll>
          <Swiper
            initialSlide={2}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={true}
            grabCursor={true}
            allowTouchMove={true}
            threshold={10}
            speed={600}
            spaceBetween={25}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            onSlideChangeTransitionEnd={(swiper) =>
              setActiveSlide(swiper.realIndex)
            }
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{ paddingBottom: "60px" }}
          >
            {professionsList.map((item, index) => (
              <SwiperSlide key={index}>
                <div onClick={() => swiperRef.current?.slideTo(index)}>
                  <ProfessionCard
                    highlighted={index === activeSlide}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeOnScroll>
      </div>
    </SectionContainer>
  );
};

export default Profession;
