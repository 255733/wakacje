// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Barcelona() {
const offer = {
  title: "Hiszpania – Barcelona",
  image: "/images/barcelona.png", // dodaj odpowiednie zdjęcie w folderze public/images
  description:
    "Tygodniowy city & beach break w tętniącej życiem Barcelonie. Słońce, plaża i hiszpańska energia – idealna kombinacja dla spragnionych kultury i relaksu nad morzem.",
  details: [
    "📍 Lokalizacja: Hiszpania, Barcelona",
    "🛫 Wylot z: Katowice Pyrzowice (KTW)",
    "📅 Termin: 20.08.2025 - 27.08.2025",
    "🏨 Zakwaterowanie: Pokój 2-osobowy w hotelu 3★",
    "🍽️ Wyżywienie: Śniadania w cenie",
    "🏖️ 200 m do plaży miejskiej",
    "🛒 100 m do sklepu spożywczego",
    "🌴 Prywatna plaża z leżakami",
    "🎉 Wieczorne imprezy na plaży tylko dla gości hotelu",
    "🌡️ Średnia temperatura w sierpniu: 32°C",
  ],
  price: "1 700 zł / osoba",
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

export default Barcelona;
