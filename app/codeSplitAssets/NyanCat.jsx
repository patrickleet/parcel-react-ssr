import React, { Component } from 'react';
import './NyanCat.scss'

export default class NyanCat extends Component {
  componentDidMount() {
    const stars = document.querySelectorAll('.stars')[0];
    for (let i = 0; i < 12; i += 1) {
      stars.innerHTML += '<div class="star"><span></span></div>';
    }
  }
  render () {
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
        <div className="stars" />
      </div>
    )
  }
}
