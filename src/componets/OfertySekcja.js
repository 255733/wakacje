// src/components/OfertySekcja.js
import React from "react";
import OfertaCard from "./OffersCard";
import "../styles/Offers.css";

const alicanteImg = process.env.PUBLIC_URL + "/images/alicante.png";
const malediwyImg = process.env.PUBLIC_URL + "/images/malediwy.png";
const stambulImg = process.env.PUBLIC_URL + "/images/stambul.png";

const OfertySekcja = () => {
  const oferty = [
    {
      image: alicanteImg,
      title: "Hiszpania - Alicante",
      price: "2700 zł/os - tydzień",
      details: [
        "All inclusive",
        "Pokój 3 os.",
        "300 m do plaży",
        "200 m do sklepu",
        "Prywatna plaża z leżakami",
      ],
      link: "/oferta/Hiszpania-Alicante",
    },
    {
      image: malediwyImg,
      title: "Malediwy",
      price: "3200 zł/os - tydzień",
      details: [
        "Prywatny basen",
        "Łóżko małżeńskie",
        "Sauna",
        "Zejście do wody z domku",
        "Powitalny poczęstunek",
        "Dozwolone 1 zwierzę",
      ],
      link: "/oferta/malediwy",
    },
    {
      image: stambulImg,
      title: "Turcja - Stambuł",
      price: "2200 zł/os - tydzień",
      details: [
        "Śniadania, obiadokolacje",
        "Przejazd z lotniska do hotelu",
        "250 m do plaży",
        "150 m do sklepu",
        "Bar otwarty w godz. 8–23",
        "Imprezy hotelowe",
      ],
      link: "/oferta/Turcja-stambul",
    },
  ];

  return (
    <section className="oferta-section" id="oferta">
      <h4 className="center-align oferta-heading">
        <i className="material-icons">event</i> Oferta
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

export default OfertySekcja;
