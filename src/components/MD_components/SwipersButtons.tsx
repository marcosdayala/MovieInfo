import { PropsWithChildren } from "react";
import { useSwiper } from "swiper/react";

export const SwiperButtonNext = ({ children }: PropsWithChildren) => {
  const swiper = useSwiper();
  return <button className='swiper-button-next' onClick={() => swiper.slideNext()}>{children}</button>;
};

export const SwiperButtonPrev = ({ children }: PropsWithChildren) => {
  const swiper = useSwiper();
  return <button className='swiper-button-prev' onClick={() => swiper.slidePrev()}>{children}</button>;
};