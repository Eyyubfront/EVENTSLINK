import React from 'react';
import concerts from '../../assets/images/activities/concerts.png';
import exhibitions from '../../assets/images/activities/exhibitions.png';
import foodwithdrinks from '../../assets/images/activities/foodwithdrinks.png';
import holidays from '../../assets/images/activities/holidays.png';
import workshops from '../../assets/images/activities/workshops.png';
import vector from '../../assets/images/activities/Vector.png';
import { Container } from '@mui/material';
const activitiesData = [
  { name: 'Workshops', img: workshops },
  { name: 'Exhibitions', img: exhibitions },
  { name: 'Food & Drinks', img: foodwithdrinks },
  { name: 'Holidays', img: holidays },
  { name: 'Sport', img: vector },
  { name: 'Concerts', img: concerts }
];
const Activities = () => {
  return (
    <div id="activities">
      <Container>

      <div className="activities__cards">
        {activitiesData.map((activity, index) => (
          <Container key={index}>
            <div className="activitesallcard">
              <div className="activitesimgcard">
                <img src={activity.img} alt={activity.name} className="activteimg" />
              </div>
              <p className="activitynames">{activity.name}</p>
            </div>
          </Container>
        ))}
      </div>
      </Container>
    </div>
  );
}

export default Activities;
