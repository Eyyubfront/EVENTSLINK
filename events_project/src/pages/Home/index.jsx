import React from 'react';
import PageContainer from '../../Components/PageContainer';
import celebrate from '../../assets/images/celebrate.png'; 
import Activities from '../../Components/Activities/activities';
import Destinations from '../../Components/Destinations/destinations';
import Sign from '../../Components/Sign/sign';
import Popularevents from '../../Components/Popularevents/popularevents';
import Upcoming from '../../Components/Upcoming/Upcoming ';
const Home = () => {
  return (
    <>
      <PageContainer>
        <div id="findevents" style={{ backgroundImage: `url(${celebrate})` }}>
          <div className="find__text">
            <h2>ENJOY YOUR CITY TO THE FULLEST</h2>
            <div className="finds__abouts">
            <p>
              Find events that match your interests and book your tickets
              effortlessly
            </p>
            <p>From theater shows to sports events, we have it all!</p>
            </div>
            <button className='find__button'>Find events</button>
          </div>
        </div>
        <Activities/>
        <Popularevents/>
        <Upcoming/>
        <Destinations/>
        <Sign/>
      </PageContainer>
    </>
  );
};

export default Home;
