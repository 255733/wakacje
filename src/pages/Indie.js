// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Indie() {
    const offer = {
      title: "Indie – Delhi i Jaipur",
      image: "/images/indie.jpg", // zastąp własnym zdjęciem
      description:
        "Kolorowa przygoda w sercu Indii! Zwiedzanie tętniącego życiem Delhi oraz królewskiego Jaipuru – zabytki, kultura i niezapomniane smaki.",
      details: [
        "📍 Lokalizacja: Indie, Delhi i Jaipur",
        "🛫 Wylot z: Warszawa Chopin (WAW)",
        "📅 Termin: 01.03.2026 - 09.03.2026",
        "🏨 Hotele 3-4★ ze śniadaniem",
        "🕌 Wizyta w Tadź Mahal",
        "🚍 Transfery w cenie, przejazd między miastami",
        "🍽️ Kolacja z pokazem tańca",
      ],
      price: "4 800 zł / osoba",
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

export default Indie;