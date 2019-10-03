import React, { useState, useEffect } from 'react';
const pendingImage = require('../../img/PendingImage.png');

const PinDetail = props => {
  const [pin, setPin] = useState({ images: [], tags: [] });
  const [posterImg, setPosterImg] = useState({});
  const [activeImg, setActiveImg] = useState('');

  useEffect(() => {
    let img = featuredImage();
    let hasImage = img && img.thumbnailable === true;

    setPosterImg(hasImage ? `${img.storage_location_uri}_600x600` : pendingImage);
  }, [pin]);

  useEffect(() => {
    async function fetchPin() {
      const res = await fetch(`${process.env.API_URL}/v1/pins/${props.id}`);
      res
        .json()
        .then(res => setPin(res))
        .catch(err => console.error(err));
    }

    fetchPin();
  }, []);

  const featuredImage = () => {
    // TODO return featured image, not just first image.
    let image = pin.images[0];

    if (image) {
      setActiveImg(image.id);
    }
    return image;
  };

  const pinTags = () => {
    if (pin.tags.length > 0) {
      return (
        <div className="pin-detail-tags">
          {pin.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  const toggleImage = image => {
    setPosterImg(`${image.storage_location_uri}_600x600`);
    setActiveImg(image.id);
  };

  return (
    <div className="pin-detail-container">
      <img className="pin-detail-img" src={posterImg} alt="" />
      <div className="pin-detail-content">
        <h1>{pin.name}</h1>
        <p>{pin.description}</p>
        <p>{pin.year}</p>
        {pinTags()}
      </div>
      <div className="pin-detail-thumbs">
        {pin.images.map(image => (
          <div
            key={image.id}
            tabIndex="0"
            role="button"
            onClick={() => toggleImage(image)}
            onKeyPress={() => toggleImage(image)}
            className={`pin-detail-thumb ${image.id == activeImg ? 'active' : ''}`}
          >
            <img className="pin-detail-img" src={`${image.storage_location_uri}_300x300`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinDetail;
