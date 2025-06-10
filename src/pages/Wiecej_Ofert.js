// src/pages/OfertyStrona.js
import React from "react";
import OfertaCard from "../componets/OffersCard";
import "../styles/Wiecej_ofert.css";

const image = (name) => process.env.PUBLIC_URL + "/images/" + name;

const oferty = [
  {
    image: image("alicante.png"),
    title: "Hiszpania - Alicante",
    price: "2700 zł/os - tydzień",
    details: [
      "All inclusive",
      "Pokój 3 os.",
      "300 m do plaży",
      "200 m do sklepu",
      "Prywatna plaża z leżakami"
    ],
    link: "/oferta/Hiszpania-Alicante"
  },
  {
    image: image("malediwy.png"),
    title: "Malediwy",
    price: "3200 zł/os - tydzień",
    details: [
      "Prywatny basen",
      "Łóżko małżeńskie",
      "Sauna",
      "Zejście do wody z domku",
      "Powitalny poczęstunek",
      "Dozwolone 1 zwierzę"
    ],
    link: "/oferta/malediwy"
  },
  {
    image: image("stambul.png"),
    title: "Turcja - Stambuł",
    price: "2200 zł/os - tydzień",
    details: [
      "Śniadania, obiadokolacje",
      "Przejazd z lotniska do hotelu",
      "250 m do plaży",
      "150 m do sklepu",
      "Bar otwarty w godz. 8–23",
      "Imprezy hotelowe"
    ],
    link: "/oferta/Turcja-stambul"
  },
  {
    image: image("sardynia.png"),
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
    link: "/oferta/Sardynia"
  },
  {
    image: image("slonecznybrzeg.png"),
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
    link: "/oferta/bulgaria"
  },
  {
    image: image("barcelona.png"),
    title: "Hiszpania - Barcelona",
    price: "1700 zł/os - tydzień",
    details: [
      "Śniadania",
      "Pokój 2 os.",
      "200 m do plaży",
      "100 m do sklepu",
      "Prywatna plaża z leżakami",
      "Imprezy na prywatnej plaży"
    ],
    link: "/oferta/Barcelona"
  },
  {
    image: image("madryt.png"),
    title: "Hiszpania - Madryt",
    price: "1800 zł/os - tydzień",
    details: [
      "Śniadania",
      "Zwiedzanie z przewodnikiem",
      "Hotel w centrum miasta"
    ],
    link: "/oferta/Madryt"
  },
  {
    image: image("split.png"),
    title: "Chorwacja - Split",
    price: "2100 zł/os - tydzień",
    details: [
      "Hotel z widokiem na morze",
      "All inclusive",
      "Basen zewnętrzny"
    ],
    link: "/oferta/Chorcja"
  },
  {
    image: image("kreta.jpeg"),
    title: "Grecja - Kreta",
    price: "2400 zł/os - tydzień",
    details: [
      "All inclusive",
      "Pokój 3 os.",
      "Plaża 100 m",
      "Animacje dla dzieci"
    ],
    link: "/oferta/Grecja-Kreta"
  },
  {
    image: image("alpy.jpg"),
    title: "Francja - Alpy",
    price: "2600 zł/os - tydzień",
    details: [
      "Hotel górski",
      "Skipass w cenie",
      "Sauna, jacuzzi"
    ],
    link: "/oferta/alpy"
  },
  {
    image: image("paryz.jpg"),
    title: "Francja - Paryż",
    price: "2000 zł/os - weekend",
    details: [
      "Śniadania",
      "Zwiedzanie z przewodnikiem",
      "Hotel w centrum"
    ],
    link: "/oferta/paryz"
  },
  {
    image: image("berlin.jpg"),
    title: "Niemcy - Berlin",
    price: "1600 zł/os - weekend",
    details: [
      "Hotel 3*",
      "Zwiedzanie",
      "Transport w cenie"
    ],
    link: "/oferta/berlin"
  },
  {
    image: image("tajlandia.jpg"),
    title: "Tajlandia",
    price: "4300 zł/os - 10 dni",
    details: [
      "All inclusive",
      "Prywatna plaża",
      "Wycieczki fakultatywne"
    ],
    link: "/oferta/tajlandia"
  },
  {
    image: image("tokio.jpg"),
    title: "Japonia - Tokio",
    price: "5200 zł/os - tydzień",
    details: [
      "Hotel 4*",
      "Zwiedzanie miasta",
      "Kultura i kuchnia japońska"
    ],
    link: "/oferta/tokio"
  },
  {
    image: image("indie.jpg"),
    title: "Indie - Goa",
    price: "3900 zł/os - tydzień",
    details: [
      "Plaża, joga, medytacja",
      "Wegetariańskie posiłki",
      "Hotel przy plaży"
    ],
    link: "/oferta/indie"
  },
  {
    image: image("kenia.jpg"),
    title: "Kenia - Safari",
    price: "4800 zł/os - tydzień",
    details: [
      "Safari jeepem",
      "All inclusive",
      "Noclegi w lodge"
    ],
    link: "/oferta/kenia"
  },
  {
    image: image("egipt.jpg"),
    title: "Egipt - Hurghada",
    price: "3100 zł/os - tydzień",
    details: [
      "All inclusive",
      "Nurkowanie",
      "Hotel przy plaży"
    ],
    link: "/oferta/egipt"
  },
  {
    image: image("maroko.jpg"),
    title: "Maroko - Agadir",
    price: "2900 zł/os - tydzień",
    details: [
      "Hotel 4*",
      "All inclusive",
      "Spacer po medynie"
    ],
    link: "/oferta/maroko"
  },
  {
    image: image("australia.jpg"),
    title: "Australia - Melbourne",
    price: "7600 zł/os - 2 tygodnie",
    details: [
      "Zwiedzanie",
      "Plaże",
      "Natura i kultura"
    ],
    link: "/oferta/australia"
  },
  {
    image: image("sydney.jpg"),
    title: "Australia - Sydney",
    price: "7800 zł/os - 2 tygodnie",
    details: [
      "Opera, Harbour Bridge",
      "Plaże i surfing",
      "Zwiedzanie miasta"
    ],
    link: "/oferta/sydney"
  },
  {
    image: image("lisbona.jpg"),
    title: "Portugalia - Lizbona",
    price: "2500 zł/os - tydzień",
    details: [
      "Hotel w centrum",
      "Wycieczki fakultatywne",
      "Plaże i zwiedzanie"
    ],
    link: "/oferta/lizbona"
  }
];

const OfertyStrona = () => (
  <section className="oferta-section">
    <h4 className="center-align oferta-heading">
      <i className="material-icons">event</i> Wszystkie Oferty
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

export default OfertyStrona;
