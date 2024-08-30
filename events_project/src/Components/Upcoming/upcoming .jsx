import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import pastimetwo from '../../assets/images/pastime/pastimetwo.png';
import pastimethree from '../../assets/images/pastime/pastimethree.png';
import pastimefoor from '../../assets/images/pastime/pastimefoor.png';
import pastimeleven from '../../assets/images/pastime/pastimeleven.png';
import pastimenight from '../../assets/images/pastime/pastimenight.png';
import pastimeight from '../../assets/images/pastime/pastimeight.png';
import pastimemany from '../../assets/images/pastime/pastimemany.png';
import pastimeten from '../../assets/images/pastime/pastimeten.png';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight, FaRegHeart } from 'react-icons/fa';
import { FaCheck } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
const events = [
  { id: 1, src: pastimeten, name: 'Outdoor Movie Night', details: '18 going', price: '$15', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 2, src: pastimeight, name: 'Tech Meetup', details: '18 going', price: '$15', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 3, src: pastimetwo, name: 'Photography Workshop', details: '18 going', price: '$15', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 4, src: pastimethree, name: 'Live Jazz Concert', details: '18 going', price: '$15', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 5, src: pastimefoor, name: 'Charity FUN RUN', details: '18 going', price: '$15', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 6, src: pastimeleven, name: 'Science fair & Expo', details: '18 going', price: '$15', date: 'MON, JUL 21', time: '4:00 PM' },
  { id: 7, src: pastimenight, name: 'Food Truck Festival', details: '18 going', price: '$15', date: 'MON, JUL 21', time: '4:00 PM' },
];

const Upcoming = () => {
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
    <div id="upcoming">
      <div className="upcoming__top">
        <h2 className='upcoming__name'>Upcoming Events</h2>
        <p className='upcoming-all'>See all</p>
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
          <SwiperSlide key={event.id} className="upcoming-event-card">
            <div className="upcoming-event-content">
              <div className="upcoming-event-image-wrapper">
                <img src={event.src} alt={event.name} className="upcoming-event-image" />
                <FaRegHeart className="upcoming-event-heart-icon" />
              </div>
              <div className="upcoming-event-info">
                <h3 className="upcoming-event-title">{event.name}</h3>
                <p className="upcoming-event-calendar">
                  <CiCalendar /> {event.date} <span className="upcoming-event-time">• {event.time}</span>
                </p>
                <div className="upcoming-event-check">
                  <FaCheck className='upcoming-check-icon' /> <p>{event.details}</p>
                </div>
                <div className="upcoming-event-many">
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

export default Upcoming;
