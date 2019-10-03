import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
const pendingImage = require('../../img/PendingImage.png');

const PinThumb = props => {
  const [imageSrc, setImageSrc] = useState({});

  const posterImage = () => {
    // TODO return featured image, not just first image.
    return props.images[0];
  };

  useEffect(() => {
    let img = posterImage();
    let hasImage = img && img.thumbnailable === true;

    setImageSrc(hasImage ? `${img.storage_location_uri}_300x300` : pendingImage);
  }, []);

  return (
    <Link className={'pin-list-item'} to={`/pin/${props.id}`}>
      <img className="pin-list-img" alt="" src={imageSrc} />
      <div className="pin-list-title">{props.name}</div>
    </Link>
  );
};

export default PinThumb;
