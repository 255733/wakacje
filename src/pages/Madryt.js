// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Madryt() {
const offer = {
  title: "Hiszpania – Madryt",
  image: "/images/madryt.png", // dodaj zdjęcie Madrytu do folderu public/images
  description:
    "Dziesięciodniowy luksusowy pobyt w sercu stolicy Hiszpanii. Idealne połączenie relaksu i zwiedzania – z dostępem do ekskluzywnych udogodnień i wejściem na stadion Realu Madryt.",
  details: [
    "📍 Lokalizacja: Hiszpania, Madryt",
    "🛫 Wylot z: Warszawa Chopina (WAW)",
    "📅 Termin: 01.09.2025 - 10.09.2025",
    "🏨 Zakwaterowanie: Pokój 2-osobowy w hotelu 4★",
    "🍽️ Wyżywienie: All inclusive",
    "🧖 Sauna oraz nowoczesna siłownia w obiekcie",
    "🏊 Prywatny basen dostępny dla gości",
    "🎟️ W cenie bilet wstępu na stadion Realu Madryt – Santiago Bernabéu",
    "🌡️ Średnia temperatura we wrześniu: 28°C",
  ],
  price: "3 500 zł / osoba",
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

export default Madryt;
