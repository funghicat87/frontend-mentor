import React from 'react';
import UpperLeft from '../assets/upper_left.svg';
import UpperRight from '../assets/upper_right.svg';
import LowerRight from '../assets/lower_right.svg';
import LowerLeft from '../assets/lower_left.svg'; 
import Background from '../assets/frame_background.svg';

const ManageLandingPage = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <style>
        {`
          .frame-container {
            position: relative;
            width: 500px; /* 可以调整宽度 */
            height: 300px; /* 可以调整高度 */
            background-color: rgba(8, 8, 8, 0.8);
            margin: 7px;
            Box-sizing: border-box;
          }
          .corner {
            content: '';
            position: absolute;
            width: 150px; /* 角的宽度 */
            height: 150px; /* 角的高度 */
            background-size: cover;
          }
          .upper-left {
            top: 0;
            left: 0;
            background-image: url(${UpperLeft});
          }
          .upper-right {
            top: 0;
            right: 0;
            background-image: url(${UpperRight});
          }
          .lower-left {
            bottom: 0;
            left: 0;
            background-image: url(${LowerLeft});
          }
          .lower-right {
            bottom: 0;
            right: 0;
            background-image: url(${LowerRight});
          }
        `}
      </style>
      <div className='frame-container'>
        <div className='corner upper-left'></div>
        <div className='corner upper-right'></div>
        <div className='corner lower-left'></div>
        <div className='corner lower-right'></div>
        <p className='text-black'>Your content here</p>
      </div>
    </div>
  );
}

export default ManageLandingPage;
