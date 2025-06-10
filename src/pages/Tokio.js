// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Tokio() {
    const offer = {
      title: "Japonia – Tokio",
      image: "/images/tokio.jpg", // zastąp własnym zdjęciem
      description:
        "Spędź tydzień w sercu Tokio, w dzielnicy Shinjuku! Hotel blisko metra i sklepów, śniadania w cenie, zwiedzanie z przewodnikiem oraz wycieczka do Góry Fuji.",
      details: [
        "📍 Lokalizacja: Japonia, Tokio",
        "🛫 Wylot z: Warszawa Chopin (WAW)",
        "📅 Termin: 15.04.2026 - 22.04.2026",
        "🏨 Hotel w dzielnicy Shinjuku",
        "🍽️ Śniadania w cenie",
        "🚇 Blisko metra i sklepów",
        "🗺️ Zwiedzanie z przewodnikiem",
        "🗻 Wycieczka do Góry Fuji",
      ],
      price: "6 800 zł / osoba",
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

export default Tokio;