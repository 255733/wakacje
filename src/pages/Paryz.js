// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Paryz() {
    const offer = {
      title: "Francja – Paryż",
      image: "/images/paryz.jpg", // zastąp własnym zdjęciem
      description:
        "Romantyczny pobyt w sercu Paryża! Komfortowy hotel blisko Wieży Eiffla, śniadania w cenie i zwiedzanie z przewodnikiem.",
      details: [
        "📍 Lokalizacja: Francja, Paryż",
        "🛫 Wylot z: Gdańsk (GDN)",
        "📅 Termin: 06.04.2026 - 12.04.2026",
        "🏨 Hotel w centrum, 500 m do Wieży Eiffla",
        "🚇 Blisko stacji metra",
        "🗺️ Zwiedzanie z przewodnikiem",
        "🍽️ Śniadania w cenie",
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

export default Paryz;