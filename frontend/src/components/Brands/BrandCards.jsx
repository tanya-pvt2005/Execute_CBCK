import { useState } from "react";
import coca from "../../assets/coca.png";
import cadbury from "../../assets/cadbury.jpg";
import godrej from "../../assets/godrej.png";
import mmt from "../../assets/makemytrip.png";
import oyo from "../../assets/oyo.png";
import nestle from "../../assets/Nestle-Logo.jpg";
import nykaa from "../../assets/nykaa.png";
import shein from "../../assets/shein.png";
import sugar from "../../assets/sugar.png";
import "./BrandCards.css";
import Feed from "../Feed/Feed"; // Import the feedback form component

const brands = [
  { name: "Coca-Cola", image: coca },
  { name: "Cadbury", image: cadbury },
  { name: "Godrej", image: godrej },
  { name: "MakeMyTrip", image: mmt },
  { name: "OYO", image: oyo },
  { name: "Nestle", image: nestle },
  { name: "Shein", image: shein },
  { name: "Sugar", image: sugar },
];

function BrandCards() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div className="brand-section">
      <h2 className="brand-title">Popular Brands</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div
            className="brand-card"
            key={index}
            onClick={() => setSelectedBrand(brand)}
          >
            <div className="brand-card-inner">
              <div className="brand-logo-container">
                <img src={brand.image} alt={brand.name} className="brand-logo" />
              </div>
              <div className="brand-name">
                <p>{brand.name.toUpperCase()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedBrand && (
        <Feed brand={selectedBrand} closeForm={() => setSelectedBrand(null)} />
      )}
    </div>
  );
}

export default BrandCards;
