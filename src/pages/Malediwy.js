// pages/Offer.js
import React from "react";
import M from "materialize-css";
import "../styles/offer.css";

function Malediwy() {
const offer = {
  title: "Malediwy – prywatna willa na wodzie",
  image: "/images/malediwy.png", // dodaj własne zdjęcie później
  description:
    "Luksusowy tydzień w raju – prywatna willa z basenem i zejściem do oceanu. Idealna oferta dla par i osób szukających prywatności i relaksu na najwyższym poziomie.",
  details: [
    "📍 Lokalizacja: Malediwy, atol Ari",
    "🛫 Wylot z: Warszawa Chopin (WAW)",
    "📅 Termin: 15.01.2026 - 22.01.2026",
    "🏨 Zakwaterowanie: Willa na wodzie z prywatnym basenem",
    "🧖‍♀️ Sauna i zejście do wody bezpośrednio z domku",
    "🍍 Powitalny poczęstunek w cenie",
    "🐾 Dozwolone 1 zwierzę domowe",
    "🚤 Transfer motorówką z lotniska",
    "🧳 Bagaż podręczny + rejestrowany w cenie",
    "☀️ Średnia temperatura w styczniu: 29°C",
  ],
  price: "3 200 zł / osoba",
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

export default Malediwy;
