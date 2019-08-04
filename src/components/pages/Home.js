import React, { useState, useEffect } from 'react';
import PinThumb from '../partials/PinThumb';

const Home = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    async function fetchPins() {
      const res = await fetch(`${process.env.API_URL}/v1/pins`);
      res
        .json()
        .then(res => setPins(res.data))
        .catch(err => console.error(err));
    }

    fetchPins();
  }, []);

  return (
    <div className="pin-grid">
      {pins.map((pin, index) => (
        <PinThumb key={index} {...pin} />
      ))}
    </div>
  );
};

export default Home;
