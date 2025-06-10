// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Grecjakreta() {
const offer = {
  title: "Grecja – Kreta",
  image: "/images/kreta.jpeg", // dodaj zdjęcie Krety do folderu public/images
  description:
    "Tygodniowy pobyt na słonecznej Krecie w komfortowym kurorcie z prywatną plażą i basenem. Idealny dla rodzin i grup.",
  details: [
    "📍 Lokalizacja: Grecja, Kreta",
    "🛫 Wylot z: Katowice Pyrzowice (KTW)",
    "📅 Termin: 01.09.2025 - 08.09.2025",
    "🏨 Zakwaterowanie: Pokój 4-osobowy w luksusowym kurorcie",
    "🍽️ Wyżywienie: All inclusive",
    "🏖️ 50 m do prywatnej plaży z leżakami",
    "🛒 200 m do sklepu",
    "🏊 Basen na terenie kurortu",
    "🌡️ Średnia temperatura we wrześniu: 28°C",
  ],
  price: "2 500 zł / osoba",
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

export default Grecjakreta;
