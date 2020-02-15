import React from "react";
import Heropic from "../Assets/Images/hero.jpg";
import Viewicon from "../Assets/Icons/PNG/views.png";
import Likeicon from "../Assets/Icons/PNG/likes.png";

export default function Hero() {
  return (
    <div>
      <video className="hero__vid" controls poster={Heropic} />
      <source src={Heropic} type="video" />
      <div className="hero__textcontainer">
        <div className="hero__title">BMX Rampage:2018 Highlights</div>
        <div className="hero__author">
          <p>By Red Cow</p> <p className="hero__date">12/18/218</p>
        </div>
        <div className="hero__icons">
          <div className="hero__views">
            <img className="hero__viewsicon" src={Viewicon} />
            <p className="hero__iconnumber">1,001,023</p>
          </div>
          <div className="hero__likes">
            <img className="hero__likesicon" src={Likeicon} />
            <p className="hero__iconnumber">110,985</p>
          </div>
        </div>
        <p className="hero__text">
          On a gust day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title.
        </p>
      </div>
    </div>
  );
}
console.log();
/* /* <video className="hero__pic" src={Heropic} alt="heropic" /> */
