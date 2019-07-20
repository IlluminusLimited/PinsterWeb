import React from 'react';

const SvgProfile = props => {
  let classList = 'svg-profile' + (props.classList ? ' ' + props.classList : '');

  return (
    <svg className={classList} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.525 26.873">
      <path
        className="lines"
        d="M26.794 21.9a5.241 5.241 0 0 0-3.659-2.646 58.345 58.345 0 0 0-.584-.137c-.182-.046-.356-.091-.538-.128-.128-.027-.265-.064-.392-.091a7.328 7.328 0 0 1-3.166-1.259c-1.086-.885-1.168-1.013-.365-2.381.182-.319.4-.63.611-.931a9.55 9.55 0 0 0 1-1.7 13.081 13.081 0 0 0 .557-7.089A6.5 6.5 0 0 0 13.875.173 6.564 6.564 0 0 0 7.26 5.182a15.861 15.861 0 0 0-.237 2.509 10.84 10.84 0 0 0 2.345 7.536c.465.566.657.985.611 1.3-.046.292-.283.575-.757.912a10.519 10.519 0 0 1-2.445 1.2 13.753 13.753 0 0 1-1.606.42c-.347.073-.7.146-1.049.237A5.012 5.012 0 0 0 .2 23.238a12.386 12.386 0 0 0-.219 2.29 1.608 1.608 0 0 0 .274 1.213c.274.283.684.3 1.241.3h24.641c.4 0 1.286-.018 1.341-1.013a7.885 7.885 0 0 0-.684-4.128zM11.22 15.382c-.383-.748-.839-1.469-1.277-2.162a11.107 11.107 0 0 1-.347-.557 8.967 8.967 0 0 1-.986-5.082 10.506 10.506 0 0 1 .182-1.77 4.949 4.949 0 0 1 4.89-4.06c.091 0 .182 0 .274.009A5.006 5.006 0 0 1 18.8 6.3a11.147 11.147 0 0 1-.411 5.237 11.707 11.707 0 0 1-1.013 1.87c-.173.274-.347.557-.511.849-.064.109-.128.21-.192.319a6.582 6.582 0 0 0-.4.712 2.443 2.443 0 0 0 .584 3.047 8.214 8.214 0 0 0 4.207 2.066c.557.146 1.177.292 1.88.456 2.08.484 3.111 2.108 2.929 4.589h-5.027c-6.2 0-12.609 0-18.914.018H1.9c-.246 0-.292-.036-.292-.036a.639.639 0 0 1-.036-.292 3.974 3.974 0 0 1 3.339-4.389c.319-.082.657-.164.976-.237a16.421 16.421 0 0 0 2.327-.666 10.458 10.458 0 0 0 2.409-1.505 2.244 2.244 0 0 0 .597-2.956z"
        transform="translate(.023 -.17)"
      />
    </svg>
  );
};

export default SvgProfile;
