// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Berlin() {
    const offer = {
      title: "Niemcy – Berlin",
      image: "/images/berlin.jpg", // zastąp własnym zdjęciem
      description:
        "Odkryj nowoczesny Berlin podczas 5-dniowego pobytu! Komfortowy hotel blisko muzeów, galerii i Bramy Brandenburskiej. Idealne miejsce na aktywny city break.",
      details: [
        "📍 Lokalizacja: Niemcy, Berlin",
        "🛫 Wylot z: Poznań Ławica (POZ)",
        "📅 Termin: 10.03.2026 - 15.03.2026",
        "🏨 Nowoczesny hotel 4★ ze śniadaniem",
        "🚶 Spacer do Bramy Brandenburskiej",
        "🖼️ Blisko muzeów i galerii",
        "🚲 Możliwość wypożyczenia rowerów",
      ],
      price: "2 100 zł / osoba",
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

export default Berlin;