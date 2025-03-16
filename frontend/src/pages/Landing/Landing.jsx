import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";
import girl from "../../assets/girl.png";
import FAQ from "../../components/FAQ/FAQ"
import community from "../../assets/community.jpg";
import business from "../../assets/business.jpg";
import customer from "../../assets/customer.jpg"
import Footer from "../../components/Footer/Footer";

function Landing() {
  return (
    <>
      <Navbar />

      <div className="title">
        <div className="heading-cont">
          <h1>Connecting you to <span className="bus">
            <br></br>BUSINESSES</span></h1>
          <br></br>
          <p>
            Bridging the gap between you and businesses by transforming your
            valuable feedback into powerful insights that drive growth and
            innovation.
          </p>
          <br></br>
          <div className="buttons">
          <Link to="/user-login"><button className="button1">Consumer Login</button></Link>
          <Link to="/user-login"><button className="dotted">Business Login</button></Link>
          </div>
        </div>
        <div className="image">
          <img src={girl} alt="luna-astronaut" className="luna-astro" />
        </div>
      </div>

      <div className="about">
        <h2 className="about-title">We Make it <span className="bus">Possible</span></h2>
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
            <p className="about-text">Helping businesses gain insights from your valuable opinions, driving smarter decisions and creating better customer experiences!</p>
          </div>
        </div>
      </div>

      <FAQ/>
      <Footer/>
    </>
  );
}

export default Landing;
