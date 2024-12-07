import React from 'react';
import '../style.scss'; 

const ChargingAnimation = () => {
  return (
    <div className="phone">
      <span className="text">Супер зарядка</span>
      <div className="status">
        <div className="charging"></div>
        <div className="progress"><small>%</small></div>
      </div>
      <div className="contrast">
        <div className="blackhole"></div>
        <div className="lithium">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
      <button className="reset" onClick={() => window.location.reload()}>
      reset animation
      </button>
    </div>
  );
};

export default ChargingAnimation;