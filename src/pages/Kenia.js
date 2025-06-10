// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Kenia() {
    const offer = {
      title: "Kenia – Safari i Plaże Oceanu Indyjskiego",
      image: "/images/kenia.jpg", // zastąp własnym zdjęciem
      description:
        "Niezapomniane połączenie przygody i relaksu! Safari w rezerwacie Masai Mara oraz wypoczynek na rajskich plażach w Diani Beach.",
      details: [
        "📍 Lokalizacja: Kenia – Masai Mara i Diani Beach",
        "🛫 Wylot z: Warszawa Chopin (WAW)",
        "📅 Termin: 03.02.2026 - 13.02.2026",
        "🦁 Safari 3 dni w parku Masai Mara",
        "🏖️ Pobyt nad Oceanem Indyjskim, all inclusive",
        "🤝 Spotkanie z lokalnymi plemionami",
        "🏨 Noclegi w lodge i resortach",
      ],
      price: "6 999 zł / osoba",
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

export default Kenia;