// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Tajlandia() {
    const offer = {
      title: "Tajlandia – Phuket",
      image: "/images/phuket.jpg", // zastąp własnym zdjęciem
      description:
        "Egzotyczny 10-dniowy pobyt na Phuket – bungalow przy prywatnej plaży, all inclusive, możliwość nurkowania oraz codzienne wycieczki fakultatywne.",
      details: [
        "📍 Lokalizacja: Tajlandia, Phuket",
        "🛫 Wylot z: Warszawa Chopin (WAW)",
        "📅 Termin: 15.11.2025 - 25.11.2025",
        "🏨 Bungalow przy plaży – all inclusive",
        "🏖️ Prywatna plaża",
        "🤿 Możliwość nurkowania",
        "🚤 Codzienne wycieczki fakultatywne",
      ],
      price: "5 499 zł / osoba",
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

export default Tajlandia;