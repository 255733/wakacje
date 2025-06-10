// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Sardynia() {
const offer = {
  title: "Sardynia – La Pelosa",
  image: "/images/sardynia.png", // dodaj odpowiednie zdjęcie
  description:
    "Zrelaksuj się na jednej z najpiękniejszych plaż Europy. Tygodniowy pobyt all inclusive w malowniczej La Pelosa na Sardynii – idealny dla rodzin i par szukających luksusu i słońca.",
  details: [
    "📍 Lokalizacja: Włochy, Sardynia – La Pelosa",
    "🛫 Wylot z: Warszawa Chopin (WAW)",
    "📅 Termin: 15.08.2025 - 22.08.2025",
    "🏨 Zakwaterowanie: Pokój 4-osobowy w hotelu 4★",
    "🍽️ Wyżywienie: All inclusive",
    "🏖️ 150 m do piaszczystej plaży",
    "🛒 450 m do najbliższego sklepu",
    "🧖 Sauna hotelowa dostępna dla gości",
    "🌞 Średnia temperatura w sierpniu: 30°C",
  ],
  price: "2 200 zł / osoba",
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

export default Sardynia;
