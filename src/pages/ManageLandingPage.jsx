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
            width:1000px; /* 可以调整宽度 */
            height: 500px; /* 可以调整高度 */
            background-color: rgba(8, 8, 8, 0.8);
            Box-sizing: border-box;
            border-image:  conic-gradient(#737272, #B0B0B0, #4E4D4D, #787878,#B7B7B7, #727272, #5B5B5B, #ADADAD, #575757, #5C5C5C, #C0C0C0, #595959, #737272) 1;
            border-width: 2px;
          }
          .corner {
            content: '';
            position: absolute;
            width: 200px; /* 角的宽度 */
            height: 200px; /* 角的高度 */
            background-size: cover;
          }
          .upper-left {
            top: -9px;
            left: -9px;
            background-image: url(${UpperLeft});
          }
          .upper-right {
            top: -9px;
            right: -9px;
            background-image: url(${UpperRight});
          }
          .lower-left {
            bottom: -9px;
            left: -9px;
            background-image: url(${LowerLeft});
          }
          .lower-right {
            bottom: -9px;
            right: -9px;
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
