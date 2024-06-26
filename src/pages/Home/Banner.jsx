import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { FreeMode, Navigation, Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='md:max-w-6xl'>
            {/* <Swiper
                style={{
                    '--swiper-navigation-color': 'white',
                    '--swiper-pagination-color': 'white',
                }}
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 2000 }}
                className="mySwiper3"
            > */}
              <Swiper
                style={{
                    '--swiper-navigation-color': 'white',
                    '--swiper-pagination-color': 'white',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 2000 }}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <div className="carousel-item relative w-full" style={{ height: '300px' }}>
                        <img src="https://shorturl.at/jRSTW" className="w-full h-full object-cover" alt="slide1" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-item relative w-full" style={{ height: '300px' }}>
                        <img src="https://shorturl.at/qrHU8" className="w-full h-full object-cover" alt="slide2" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-item relative w-full" style={{ height: '300px' }}>
                        <img src="https://shorturl.at/eMST8" className="w-full h-full object-cover" alt="slide3" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-item relative w-full" style={{ height: '300px' }}>
                        <img src="https://www.tucker-hull-law.com/wp-content/uploads/2020/01/Real-Estate-Land-Use.jpg" className="w-full h-full object-cover" alt="slide4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
