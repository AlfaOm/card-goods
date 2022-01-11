import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import { Image } from "/src/elements";
import { StyledSlider, StyledWrapper, StyledButton } from "./styled";

function Slider({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <StyledWrapper>
      <StyledButton left ref={navigationPrevRef} title="Previous">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Go">
        &gt;
      </StyledButton>
      <StyledSlider
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                width="200"
                height="257"
                maxWidth="200"
                src={image}
                alt="изображение продукта"
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </StyledWrapper>
  );
}

export default Slider;
