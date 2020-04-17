import React from 'react';

const RatingBar = ({ rating }) => {
  const capsArray = () => {
    let caps = [];
    for (let i = 1; i <= rating; i++) {
      caps.push(<img className="cap" src="cap-100.png" alt="cap-0" key={i}/>)
    }
    for (let i = rating + 1; i <= 5; i++ ) {
      caps.push(<img className="cap" src="cap-0.png" alt="cap-0" key={i}/>)
    }
    return caps;
  }

  return (
    <div className="rating">
      {capsArray()}
    </div>
  )
};

export default RatingBar;