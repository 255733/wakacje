// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function HiszpaniaAli() {
  const offer = {
  title: "Hiszpania - Alicante",
  image: "/images/alicante.png", // możesz dodać zdjęcie później
  description:
    "Tygodniowy wypoczynek na hiszpańskim wybrzeżu Costa Blanca. Piękne plaże, słoneczna pogoda i klimatyczne uliczki Alicante. Idealny dla szukających relaksu i słońca!",
  details: [
    "📍 Lokalizacja: Hiszpania, Alicante",
    "🛫 Wylot z: Kraków Balice (KRK)",
    "📅 Termin: 10.08.2025 - 17.08.2025",
    "🏨 Hotel: 3★ ze śniadaniami – 300m od plaży",
    "🚍 Transfer lotniskowy w obie strony",
    "🧳 Bagaż rejestrowany + podręczny w cenie",
    "🌡️ Średnia temperatura w sierpniu: 31°C",
  ],
  price: "2 700 zł / osoba",
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

export default HiszpaniaAli;
