import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import pastimeone from '../../assets/images/pastime/pastimeone.png';
import pastimefoor from '../../assets/images/pastime/pastimefoor.png';
import pastimefive from '../../assets/images/pastime/pastimefive.png';
import pastimesix from '../../assets/images/pastime/pastimesix.png';
import pastimeseven from '../../assets/images/pastime/pastimeseven.png';
import pastimenight from '../../assets/images/pastime/pastimenight.png';
import pastimeleven from '../../assets/images/pastime/pastimeleven.png';
import pastimemany from '../../assets/images/pastime/pastimemany.png';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight, FaRegHeart } from 'react-icons/fa';
import { FaCheck } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

const events = [
  { id: 1, src: pastimesix, name: 'Art & Wine ', details: '18 going', price: '$40', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 2, src: pastimeone, name: 'Outdoor Yoga Session', details: '18 going', price: '$45', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 3, src: pastimenight, name: 'Event Eight', details: '18 going', price: '$40', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 4, src: pastimeseven, name: 'Dream Fest', details: '18 going', price: '$40', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 5, src: pastimefoor, name: 'Charity Fun Run', details: '18 going', price: '$40', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 6, src: pastimeleven, name: 'Science fair & Expo', details: '18 going', price: '$60', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 7, src: pastimefive, name: 'Salsa Dancing Night', details: '18 going', price: '$40', date: 'MON, JUL 21', time: '4:00 PM' },
];

const Popularevents = () => {
  const swiperRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const handleSlideChange = () => {
      setShowPrev(!swiper.isBeginning);
      setShowNext(!swiper.isEnd);
    };

    swiper.on('slideChange', handleSlideChange);
    swiper.on('init', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
      swiper.off('init', handleSlideChange);
    };
  }, []);

  return (
    <div id="popularevents">
      <div className="popularevents__top">
        <h2 className='popularevents__name'>Popular events near you</h2>
        <p className='populareventsall'>See all</p>
      </div>
    
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        onSlideChange={(swiper) => {
          setShowPrev(!swiper.isBeginning);
          setShowNext(!swiper.isEnd);
        }}
      >
        {events.map(event => (
          <SwiperSlide key={event.id} className="event-card">
            <div className="event-content">
              <div className="event-image-wrapper">
                <img src={event.src} alt={event.name} className="eventimage" />
                <FaRegHeart className="event-heart-icon" />
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.name}</h3>
                <p className="event-calendar">
                  <CiCalendar /> {event.date} <span className="event-time">• {event.time}</span>
                </p>
                <div className="event-check">
                  <FaCheck className='checksicon' /> <p>{event.details}</p>
                </div>
                <div className="event-many">
                  <img src={pastimemany} alt="Many Events" />
                  <p>{event.price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" style={{ visibility: showNext ? 'visible' : 'hidden' }}>
          <FaArrowRight size={24} />
        </div>
        <div className="swiper-button-prev" style={{ visibility: showPrev ? 'visible' : 'hidden' }}>
          <FaArrowLeft size={24} />
        </div>
      </Swiper>
    </div>
  );
};

export default Popularevents;
