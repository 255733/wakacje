// src/components/LastMinute.js
import React from "react";
import OfertaCard from "./OffersCard";
import "../styles/Offers.css";

const sardyniaImg = process.env.PUBLIC_URL + "/images/sardynia.png";
const slonecznybrzegImg = process.env.PUBLIC_URL + "/images/slonecznybrzeg.png";
const barcelonaImg = process.env.PUBLIC_URL + "/images/barcelona.png";

const LastMinute = () => {
  const oferty = [
    {
      image: sardyniaImg,
      title: "Sardynia - La Pelosa",
      price: "2200 zł/os - tydzień",
      details: [
        "All inclusive",
        "Pokój 4 os.",
        "150 m do plaży",
        "450 m do sklepu",
        "Piaszczysta plaża",
        "Sauna"
      ],
      link: "/oferta/Sardynia",
    },
    {
      image: slonecznybrzegImg,
      title: "Bułgaria - Słoneczny brzeg",
      price: "1320 zł/os - tydzień",
      details: [
        "All inclusive",
        "Pokój 2 os.",
        "50 m do plaży",
        "340 m do sklepu",
        "Prywatna plaża z leżakami",
        "250 m do klubu",
        "Bar otwarty w godz. 7:30-23:30"
      ],
      link: "/oferta/bulgaria",
    },
    {
      image: barcelonaImg,
      title: "Hiszpania - Barcelona",
      price: "1700 zł/os - tydzień",
      details: [
        "Śniadania",
        "Pokój 2 os.",
        "200 m do plaży",
        "100 m do sklepu",
        "Prywatna plaża z leżakami",
        "Imprezy na prywatnej plaży",
      ],
      link: "/oferta/Barcelona",
    },
  ];

  return (
    <section className="oferta-section" id="oferta">
      <h4 className="center-align oferta-heading">
        <i className="material-icons">alarm</i> Last Minute
      </h4>
      <div className="row center-align">
        {oferty.map((oferta, index) => (
          <div className="col s12 m6 l4" key={index}>
            <OfertaCard {...oferta} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LastMinute;
