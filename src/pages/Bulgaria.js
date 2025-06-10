// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Bulgaria() {
  const offer = {
    title: "Bułgaria - Złote Piaski",
    image: "/images/slonecznybrzeg.png", // zastąp własnym zdjęciem
    description:
      "Relaksujący tygodniowy pobyt w słonecznej Bułgarii, w sercu Złotych Piasków. Idealny dla rodzin, par i grup znajomych.",
    details: [
      "📍 Lokalizacja: Bułgaria, Złote Piaski",
      "🛫 Wylot z: Warszawa Chopin (WAW)",
      "📅 Termin: 15.07.2025 - 22.07.2025",
      "🏨 Hotel: 4★ All Inclusive – 150m od plaży",
      "🚍 Transfer z/na lotnisko w cenie",
      "🧳 Bagaż rejestrowany + podręczny w cenie",
    ],
    price: "1320 zł / osoba",
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

export default Bulgaria;
