// pages/Home.js
import React, { useEffect } from "react";
import M from "materialize-css";
import "../styles/home.css";
import OfertySekcja from "../componets/OfertySekcja";
import LastMinute from "../componets/LastMinute";
import OpinieHome from "../componets/OpinieHome";

function Home() {
  useEffect(() => {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (form.checkValidity()) {
          M.toast({ html: "Wiadomość została wysłana!", classes: "green darken-1" });
          form.reset();
          M.updateTextFields();
        } else {
          M.toast({ html: "Uzupełnij wszystkie pola!", classes: "red darken-1" });
        }
      });
    }
  }, []);

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="container white-text center-align">
          <h1>Wędrowcu tutaj odnajdziesz siebie</h1>
          <p>
            "Wierzymy, że każda podróż to nowa historia, a my jesteśmy tu, by pomóc Ci napisać tę
            najpiękniejszą..."
          </p>
          <a href="#oferta" className="waves-effect waves-light btn-large custom-hero-btn">
            Sprawdź ofertę
          </a>
        </div>
      </section>

      <section id="featured" className="container section">
        <h2 className="center-align">Odkrywaj świat z nami</h2>
        <div className="row">
          {[
            {
              img: "/images/impreza_zdj_pocz.png",
              title: "Imprezy",
              text: "Kochasz imprezować? Z nami każde miejsce zamienia się w przygodę życia!",
            },
            {
              img: "/images/rodzina_zdj_pocz.png",
              title: "Rodzina",
              text: "Rodzinne wypady? Bezpieczeństwo, radość i wspomnienia dla każdego.",
            },
            {
              img: "/images/spokoj_zdj_pocz.png",
              title: "Spokój",
              text: "Chcesz odpocząć? Zabierzemy Cię w miejsca, gdzie cisza ma znaczenie.",
            },
          ].map((item, i) => (
            <div className="col s12 m6 l4" key={i}>
              <div className="card hoverable home-card">
                <div className="card-image">
                  <img src={item.img} alt={item.title} className="responsive-img" />
                </div>
                <span className="card-title black-text">{item.title}</span>
                <div className="card-content">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <OfertySekcja />

      <LastMinute />

      <OpinieHome />
    </>
  );
}

export default Home;
