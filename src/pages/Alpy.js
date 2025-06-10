// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Alpy() {
    const offer = {
      title: "Francja – Alpy",
      image: "/images/alpy.jpg", // zastąp własnym zdjęciem
      description:
        "Tygodniowy wypoczynek w sercu francuskich Alp. Komfortowy hotel tuż przy stoku, idealny na narciarską przygodę i relaks po aktywnym dniu.",
      details: [
        "📍 Lokalizacja: Francja, Alpy",
        "🛫 Wylot z: Kraków Balice (KRK)",
        "📅 Termin: 05.01.2026 - 12.01.2026",
        "🏨 Pokój 2 os. z widokiem na góry – śniadania i obiadokolacje",
        "🎿 100 m do stoku + wypożyczalnia nart na miejscu",
        "🧖 Sauna i jacuzzi w hotelu",
      ],
      price: "2 999 zł / osoba",
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

export default Alpy;