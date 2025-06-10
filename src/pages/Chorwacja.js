// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Chorwacja() {
const offer = {
  title: "Chorwacja – Split",
  image: "/images/split.png", // dodaj zdjęcie Splitu do folderu public/images
  description:
    "Tygodniowy pobyt w pięknym nadmorskim mieście Split. Idealne miejsce na relaks przy basenie i spacerach po plaży oraz okolicy.",
  details: [
    "📍 Lokalizacja: Chorwacja, Split",
    "🛫 Wylot z: Warszawa Chopina (WAW)",
    "📅 Termin: 15.07.2025 - 22.07.2025",
    "🏨 Zakwaterowanie: Pokój 3-osobowy w komfortowym hotelu",
    "🍽️ Wyżywienie: Śniadania i obiadokolacje",
    "🏖️ 450 m do plaży",
    "🛒 140 m do sklepu",
    "🏊 Basen dostępny w hotelu",
    "🌡️ Średnia temperatura w lipcu: 29°C",
  ],
  price: "2 100 zł / osoba",
};



  const handleReservation = () => {
    M.toast({
      html: "🎉 Gratulacje! Zarezerwowano wycieczkę.",
      classes: "green darken-1 rounded-toast",
    });
  };

  return (
    <div className="container">
      <h2 className="header center-align">{offer.title}</h2>

      <div className="card horizontal hoverable offer-card">
        <div className="card-image hide-on-small-only">
          <img src={offer.image} alt={offer.title} className="offer-img" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="flow-text">{offer.description}</p>
            <ul className="browser-default">
              {offer.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <h5 className="price">{offer.price}</h5>
          </div>
          <div className="card-action">
            <button className="btn pink accent-2 waves-effect" onClick={handleReservation}>
              Zarezerwuj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chorwacja;
