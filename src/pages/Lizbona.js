// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Lizbona() {
    const offer = {
      title: "Portugalia – Urokliwa Lizbona",
      image: "/images/lisbona.jpg", // zastąp własnym zdjęciem
      description:
        "Poznaj słoneczną stolicę Portugalii! Zabytkowe tramwaje, Alfama, smaki pastéis de nata i oceaniczna bryza nad Tagiem – idealne połączenie historii i relaksu.",
      details: [
        "📍 Lokalizacja: Portugalia, Lizbona",
        "🛫 Wylot z: Kraków Balice (KRK)",
        "📅 Termin: 20.09.2025 - 26.09.2025",
        "🏨 Hotel w centrum",
        "🍽️ Śniadania i kolacje",
        "🚤 Rejs po Tagu w cenie",
        "🏛️ Blisko zabytków i restauracji",
        "🚌 Wycieczka do Sintry",
        "🚍 Transfer z/na lotnisko w cenie",
        "🧳 Bagaż rejestrowany + podręczny w cenie",
      ],
      price: "3 100 zł / osoba",
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

export default Lizbona;