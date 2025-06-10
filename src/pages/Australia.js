// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Australia() {
  const offer = {
    title: "Australia – Cairns i Wielka Rafa Koralowa",
    image: "/images/australia.jpg", // zastąp własnym zdjęciem
    description:
      "Eksploruj tropikalne północne wybrzeże Australii! Cairns to idealna baza wypadowa na wyprawy po Wielkiej Rafie Koralowej i do lasów deszczowych Daintree.",
    details: [
      "📍 Lokalizacja: Australia, Cairns i okolice",
      "🛫 Wylot z: Warszawa Chopin (WAW)",
      "📅 Termin: 05.01.2026 - 16.01.2026",
      "🏨 Hotel: 4★ ze śniadaniami – w Cairns i okolicach",
      "🚤 Rejs statkiem po oceanie – zwiedzanie Wielkiej Rafy Koralowej",
      "🌿 Spotkanie z dziką przyrodą",
      "🧳 Bagaż rejestrowany + podręczny w cenie",
    ],
    price: "7 999 zł / osoba",
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

export default Australia;