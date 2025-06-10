// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Egipt() {
    const offer = {
      title: "Egipt – Słoneczna Hurghada",
      image: "/images/egipt.jpg", // zastąp własnym zdjęciem
      description:
        "Odpocznij nad Morzem Czerwonym w popularnej Hurghadzie – piękne plaże, rafy koralowe i all inclusive w komfortowym hotelu.",
      details: [
        "📍 Lokalizacja: Egipt, Hurghada",
        "🛫 Wylot z: Katowice Pyrzowice (KTW)",
        "📅 Termin: 12.08.2025 - 19.08.2025",
        "🏨 Hotel: 4★ All Inclusive – przy plaży",
        "🚤 Wycieczka do Luksoru",
        "🤿 Snurkowanie i nurkowanie",
        "🎉 Animacje dla dzieci i dorosłych",
      ],
      price: "3 800 zł / osoba",
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

export default Egipt;