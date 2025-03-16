import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";
import girl from "../../assets/girl.png";

import community from "../../assets/community.jpg";
import business from "../../assets/business.jpg";
import customer from "../../assets/customer.jpg"

function Landing() {
  return (
    <>
      <Navbar />

      <div className="title">
        <div className="heading-cont">
          <h1>Connecting YOU to BUSINESSES</h1>
          <br></br>
          <p>
            Bridging the gap between you and businesses by transforming your
            valuable feedback into powerful insights that drive growth and
            innovation.
          </p>
          <br></br>
          <button className="button1">Watch Tutorial</button>
          <button className="dotted">Login Now</button>
        </div>
        <div className="image">
          <img src={girl} alt="luna-astronaut" className="luna-astro" />
        </div>
      </div>

      <div className="about">
        <h2 className="about-title">We Make it Possible</h2>
        <div className="about-container">
          {/* Card 1 */}
          <div className="about-card">
            <div className="about-image">
            <img src={customer} alt="luna-astronaut" className="luna-astro" />
            </div>
            <p className="about-text">Seamless Collection of your feedback so that you feel heard by your favorite brands anytime, anywhere, ON THE GO!</p>
          </div>

          {/* Card 2 */}
          <div className="about-card">
            <div className="about-image">
            <img src={community} alt="luna-astronaut" className="luna-astro" />

            </div>
            <p className="about-text">Community insights to discuss and review your favorite products with full anonymity as per your choice! </p>
          </div>

          {/* Card 3 */}
          <div className="about-card">
            <div className="about-image">
            <img src={business} alt="luna-astronaut" className="luna-astro" />

            </div>
            <p className="about-text">Helping businesses gain insights from your valuable OPINIONS!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
