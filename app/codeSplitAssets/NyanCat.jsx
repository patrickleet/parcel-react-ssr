import React from 'react';
import './NyanCat.scss'

export default ({stars}) => {
  var starEls = [];
  for (var i = 0; i < stars; i++) {
    starEls.push(<div className="star" key={i}><span></span></div>);
  }
  return (
    <div className="wrapper">
      <div className="rainbow">
        <span />
      </div>
      <div className="nyan-cat">
        <div className="feet" />
        <div className="tail">
          <span />
        </div>
        <div className="body" />
        <div className="head" />
      </div>
      <div className="stars">
        {starEls}
      </div>
    </div>
  )
}
