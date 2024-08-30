import React from 'react';
import Paris from '../../assets/images/destinations/destinationsone.png';
import Ibiza from '../../assets/images/destinations/destinationstwo.png';
import Dubai from '../../assets/images/destinations/destinationsthree.png';
import Portofino from '../../assets/images/destinations/destinationsfoor.png';
import { Container } from '@mui/material';
const destinationsData = [
    { name: 'Ibiza', img: Ibiza },{ name: 'Paris', img: Paris },{ name: 'Dubai', img: Portofino },{ name: 'Portofino', img: Dubai }];
const Destinations = () => {
  return (
    <div id="destination">
      <h2>Popular Destinations</h2>
      <div className="destination__cards">
        {destinationsData.map((destination, index) => (
          <Container key={index}>
            <div className="destination__card">
              <img className="destinationimg" src={destination.img} alt={destination.name} />
              <p className="destinaitonname">{destination.name}</p>
            </div>
          </Container>
        ))}
      </div>
    </div>
   
  );
}

export default Destinations;
