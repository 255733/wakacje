// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Turcjastam() {
const offer = {
  title: "Turcja – Stambuł",
  image: "/images/stambul.png", // podmień później na właściwe zdjęcie
  description:
    "Odkryj magiczny Stambuł – tygodniowy pobyt z wyżywieniem i bliskością plaży. Idealny wybór dla miłośników kultury, słońca i relaksu w orientalnym klimacie.",
  details: [
    "📍 Lokalizacja: Turcja, Stambuł",
    "🛫 Wylot z: Katowice (KTW)",
    "📅 Termin: 01.09.2025 - 08.09.2025",
    "🏨 Zakwaterowanie: Hotel 4★ z widokiem na Bosfor",
    "🥐 Śniadania i obiadokolacje w cenie",
    "🚌 Przejazd z lotniska do hotelu w cenie",
    "🏖️ 250 m do plaży",
    "🛒 150 m do sklepu",
    "🍸 Bar hotelowy czynny 8:00–23:00",
    "🎉 Codzienne imprezy hotelowe",
    "🌤️ Średnia temperatura we wrześniu: 28°C",
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

export default Turcjastam;
