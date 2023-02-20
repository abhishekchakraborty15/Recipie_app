 import {product_image} from '../../constants/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
// import "./header_style.css";
// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    // <div className='image_gallery'>
    <Swiper
    loop={true}
      modules={[Navigation]}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
        product_image.map((item,index)=>(
        <SwiperSlide>
            <div className='holder'>
            <img className='image_holder' src={item} />
            </div>
        </SwiperSlide>
        ))
}
    </Swiper>
    // </div>
  );
};
