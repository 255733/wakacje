// pages/About.js
import React from "react";
import "../styles/about_us.css"

function About_us() {
  return (
    <div className="container">
      <section id="o-nas" className="section">
        <h2 className="header">O nas</h2>
        <p>
          Biuro Podróży Wędrowcy to miejsce stworzone z pasji do odkrywania
          świata i miłości do podróży. Od lat pomagamy naszym klientom spełniać
          marzenia o niezapomnianych wyprawach – od egzotycznych wycieczek po rajskich
          plażach, przez pełne przygód wyprawy górskie, aż po city breaki w
          największych metropoliach świata.
        </p>
        <p>
          Nasza misja jest dostarczanie wyjątkowych doświadczeń, dlatego każdy program
          wyjazdu dopasowujemy do indywidualnych potrzeb naszych klientów. Oferujemy
          zarówno gotowe pakiety wycieczkowe, jak i możliwość organizacji podróży szytych
          na miarę.
        </p>
        <p>Nasza oferta obejmuje:</p>
        <ul>
          <li>
            <i className="material-icons tiny">flight</i> Wyprawy egzotyczne – safari w
            Afryce, trekkingi po Himalajach, rejsy po Malediwach
          </li>
          <li>
            <i className="material-icons tiny">terrain</i> Aktywne podróże – wyjazdy
            survivalowe, wspinaczki, spływy kajakowe
          </li>
          <li>
            <i className="material-icons tiny">beach_access</i> Wakacje all-inclusive –
            luksusowe kurorty, rodzinne wakacje, pobyty SPA
          </li>
          <li>
            <i className="material-icons tiny">location_city</i> City breaki – weekendowe
            wypady do najciekawszych miast Europy i Świata
          </li>
          <li>
            <i className="material-icons tiny">directions_bus</i> Wycieczki objazdowe –
            kulturowe podróże po Europie i nie tylko
          </li>
        </ul>
        <p>
          Działamy z myślą o komforcie i bezpieczeństwie naszych klientów –
          współpracujemy wyłącznie ze sprawdzonymi hotelami, przewoźnikami i lokalnymi
          przewodnikami. Nasz zespół to doświadczeni podróżnicy, którzy sami testują
          trasy i wybierają najlepsze opcje dla naszych klientów.
        </p>
        <p>
          Dołącz do grona zadowolonych podróżników i odkryj świat razem z Wędrowcami!
          🌍✈️
        </p>
      </section>

      <section id="opinie" className="section lighten-3">
        <div className="container">
          <h2 className="center-align">Opinie</h2>
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel white center-align equal-height">
                <img
                  src="../images/adam_opinie_zdj.png"
                  alt="Adam"
                  className="circle responsive-img user-photo"
                />
                <p className="black-text">
                  "Bardzo udany wyjazd, wszystko zgodne z opisem!"
                </p>
                <small>Adam</small>
                <br />
                <small>Ibiza</small>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel white center-align equal-height">
                <img
                  src="../images/anna_opinie_zdj.png"
                  alt="Anna"
                  className="circle responsive-img user-photo"
                />
                <p className="black-text">
                  "Profesjonalna obsługa i świetnie zorganizowana wycieczka."
                </p>
                <small>Anna</small>
                <br />
                <small>Kreta</small>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel white center-align equal-height">
                <img
                  src="../images/mikolaj_opinie_zdj.png"
                  alt="Mikołaj"
                  className="circle responsive-img user-photo"
                />
                <p className="black-text">
                  "Wypoczynek w wymarzonym miejscu, polecam!"
                </p>
                <small>Mikołaj</small>
                <br />
                <small>Oslo</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About_us;