import React from 'react';

const SvgCollection = props => {
  let classList = 'svg-discover' + (props.classList ? ' ' + props.classList : '');

  return (
    <svg className={classList} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.687 29.688">
      <g transform="translate(2119.688 -1827.313)">
        <rect
          className="shape"
          width="13.827"
          height="13.827"
          rx="3"
          transform="translate(-2119.688 1827.313)"
        />
        <rect
          className="shape"
          width="13.827"
          height="13.827"
          rx="3"
          transform="translate(-2119.688 1843.173)"
        />
        <rect
          className="shape"
          width="13.827"
          height="13.827"
          rx="3"
          transform="translate(-2103.827 1827.313)"
        />
        <rect
          className="shape"
          width="13.827"
          height="13.827"
          rx="3"
          transform="translate(-2103.827 1843.173)"
        />
      </g>
    </svg>
  );
};

export default SvgCollection;
