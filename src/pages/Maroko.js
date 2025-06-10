// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Maroko() {
    const offer = {
      title: "Maroko – Magiczny Marrakesz",
      image: "/images/maroko.jpg", // zastąp własnym zdjęciem
      description:
        "Odkryj barwny świat Marrakeszu – tętniące życiem souki, orientalna architektura i aromatyczna kuchnia u stóp gór Atlas.",
      details: [
        "📍 Lokalizacja: Maroko, Marrakesz",
        "🛫 Wylot z: Warszawa Chopin (WAW)",
        "📅 Termin: 05.10.2025 - 12.10.2025",
        "🏨 Hotel: 4★ z basenem, ze śniadaniem i kolacją – w medynie",
        "🚍 Transfer z/na lotnisko w cenie",
        "🧳 Bagaż rejestrowany + podręczny w cenie",
        "🏞️ Zwiedzanie medyny",
        "⛰️ Wycieczka do gór Atlas",
        "👩‍🍳 Warsztaty kulinarne",
      ],
      price: "3 200 zł / osoba",
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

export default Maroko;