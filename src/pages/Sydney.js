// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Sydney() {
    const offer = {
      title: "Australia – Sydney i okolice",
      image: "/images/sydney.jpg",
      description:
        "Zanurz się w kosmopolitycznym klimacie Sydney! Opera House, plaże Bondi, transfery lotniskowe i wycieczka do Blue Mountains – wszystko w jednej podróży.",
      details: [
        "📍 Lokalizacja: Australia, Sydney",
        "🛫 Wylot z: Warszawa Chopin (WAW)",
        "📅 Termin: 05.01.2026 - 14.01.2026",
        "🏨 Hotel: 4★ w centrum, śniadanie w cenie",
        "🚌 Transfery lotniskowe w cenie",
        "⛰️ Wycieczka do Blue Mountains",
      ],
      price: "7 500 zł / osoba",
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

export default Sydney;