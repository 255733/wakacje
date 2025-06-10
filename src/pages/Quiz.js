// src/pages/Quiz.js
import React, { useState, useEffect, useRef } from "react";
import M from "materialize-css";
import "../styles/quiz.css";
import { Link } from "react-router-dom"; // Importuj Link do przycisku w modalu

// Rozszerzona baza ofert
const allOffers = [
  {
    id: "alpy",
    title: "Wakacje w Alpach",
    description: "Zrelaksuj się wśród górskich krajobrazów Szwajcarii.",
    price: "2 999 zł",
    image: "/images/alpy.jpg",
    link: "/oferta/alpy",
    continent: "europa",
    preference: "krajobrazy",
    budget: "2-5tys",
  },
  {
    id: "paryz",
    title: "Romantyczny Paryż",
    description: "Kulturalna podróż do serca Francji. Idealne dla par.",
    price: "3 500 zł",
    image: "/images/paryz.jpg", // Załóżmy, że masz taki obrazek
    link: "/oferta/paryz",
    continent: "europa",
    preference: "spokoj",
    budget: "2-5tys",
  },
  {
    id: "berlin",
    title: "Nocne życie Berlina",
    description: "Poznaj tętniące życiem kluby i galerie stolicy Niemiec.",
    price: "2 100 zł",
    image: "/images/berlin.jpg", // Załóżmy, że masz taki obrazek
    link: "/oferta/berlin",
    continent: "europa",
    preference: "imprezy",
    budget: "2tys",
  },
  {
    id: "tajlandia",
    title: "Egzotyczna Tajlandia",
    description: "Odkryj smak, zapach i barwy orientu w sercu Azji.",
    price: "5 499 zł",
    image: "/images/tajlandia.jpg",
    link: "/oferta/tajlandia",
    continent: "azja",
    preference: "spokoj",
    budget: "ponad 5tys",
  },
  {
    id: "tokio",
    title: "Futurystyczne Tokio",
    description: "Podróż do nowoczesnej metropolii pełnej kontrastów.",
    price: "6 800 zł",
    image: "/images/tokio.jpg", // Załóżmy, że masz taki obrazek
    link: "/oferta/tokio",
    continent: "azja",
    preference: "imprezy",
    budget: "ponad 5tys",
  },
  {
    id: "indie",
    title: "Duchowe Indie",
    description: "Poznaj bogatą kulturę i duchowość Indii.",
    price: "4 800 zł",
    image: "/images/indie.jpg", // Załóżmy, że masz taki obrazek
    link: "/oferta/indie",
    continent: "azja",
    preference: "krajobrazy",
    budget: "2-5tys",
  },
  {
    id: "kenia",
    title: "Safari w Kenii",
    description: "Przygoda życia w sercu dzikiej Afryki.",
    price: "6 999 zł",
    image: "/images/kenia.jpg",
    link: "/oferta/kenia",
    continent: "afryka",
    preference: "krajobrazy",
    budget: "ponad 5tys",
  },
  {
    id: "egipt",
    title: "Starożytny Egipt",
    description: "Podróż śladami faraonów i piramid.",
    price: "3 800 zł",
    image: "/images/egipt.jpg", // Załóżmy, że masz taki obrazek
    link: "/oferta/egipt",
    continent: "afryka",
    preference: "spokoj",
    budget: "2-5tys",
  },
  {
    id: "maroko",
    title: "Kolorowe Maroko",
    description: "Poznaj urokliwe rynki i smaki północnej Afryki.",
    price: "3 200 zł",
    image: "/images/maroko.jpg", // Załóżmy, że masz taki obrazek
    link: "/oferta/maroko",
    continent: "afryka",
    preference: "imprezy", // Lub "krajobrazy" w zależności od Twojej interpretacji
    budget: "2-5tys",
  },
  {
    id: "australia",
    title: "Wyprawa do Australii",
    description: "Poznaj egzotykę i piękno Antypodów.",
    price: "7 999 zł",
    image: "/images/australia.jpg",
    link: "/oferta/australia",
    continent: "australia",
    preference: "krajobrazy",
    budget: "ponad 5tys",
  },
  {
    id: "sydney",
    title: "Wielkomiejska Sydney",
    description: "Poznaj tętniącą życiem metropolię Australii.",
    price: "7 500 zł",
    image: "/images/sydney.jpg", // Załóżmy, że masz taki obrazek
    link: "/oferta/sydney",
    continent: "australia",
    preference: "imprezy",
    budget: "ponad 5tys",
  },
  {
    id: "slonecznybrzeg",
    title: "Bułgaria - Słoneczny Brzeg",
    description: "Poznaj prawdziwe imprezy w Bułgarii",
    price: "1 320 zł",
    image: "/images/slonecznybrzeg.png", // Załóżmy, że masz taki obrazek
    link: "/oferta/bulgaria",
    continent: "europa",
    preference: "imprezy",
    budget: "2tys",
  },
  // Możesz dodać więcej ofert, pamiętaj o dopasowaniu do kategorii!
];

function Quiz() {
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
  const [result, setResult] = useState(null);
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  useEffect(() => {
    modalInstance.current = M.Modal.init(modalRef.current, {
      dismissible: true,
    });
  }, []);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { q1, q2, q3 } = answers; // q1=preferencja, q2=budżet, q3=kontynent

    if (!q1 || !q2 || !q3) {
      M.toast({ html: "Proszę odpowiedzieć na wszystkie pytania.", classes: "red rounded" });
      return;
    }

    // Filtrujemy oferty na podstawie odpowiedzi użytkownika
    const matchingOffers = allOffers.filter((offer) => {
      // Logika budżetowa (bardziej złożona niż proste porównanie stringów)
      let budgetMatch = false;
      const offerPrice = parseInt(offer.price.replace(" ", "").replace(" zł", ""));

      if (q2 === "2tys" && offerPrice <= 2000) {
        budgetMatch = true;
      } else if (q2 === "2-5tys" && offerPrice > 2000 && offerPrice <= 5000) {
        budgetMatch = true;
      } else if (q2 === "ponad 5tys" && offerPrice > 5000) {
        budgetMatch = true;
      }

      // Sprawdzamy pozostałe warunki
      return offer.continent === q3 && offer.preference === q1 && budgetMatch;
    });

    if (matchingOffers.length > 0) {
      // Wybieramy losowo jedną ofertę z pasujących
      const randomIndex = Math.floor(Math.random() * matchingOffers.length);
      setResult(matchingOffers[randomIndex]);
    } else {
      // Jeśli nie ma pasujących ofert, ustaw wynik na null lub domyślną ofertę
      setResult({
        title: "Brak pasujących ofert",
        description: "Niestety, nie znaleźliśmy oferty spełniającej wszystkie Twoje kryteria. Spróbuj zmienić odpowiedzi albo zobacz nasze aktualne oferty.",
        price: "",
        image: "/images/no-offer.jpg", // Możesz stworzyć obrazek "brak oferty"
        link: "/oferta", // Link do wszystkich ofert
      });
    }

    // Otwórz modal po ustawieniu wyniku:
    setTimeout(() => modalInstance.current.open(), 100);
  };

  return (
    <div className="container container_spec">
      <h1 className="center-align quiz-title">Quiz</h1>

      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-content">
            <span className="card-title">1. Co preferujesz?</span>
            {["spokój", "imprezy", "krajobrazy"].map((val) => (
              <p key={val}>
                <label>
                  <input
                    name="q1"
                    type="radio"
                    value={val}
                    onChange={handleChange}
                    checked={answers.q1 === val}
                  />
                  <span>{val.charAt(0).toUpperCase() + val.slice(1)}</span>
                </label>
              </p>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <span className="card-title">2. Jaki jest Twój budżet na wakacje?</span>
            {["2tys", "2-5tys", "ponad 5tys"].map((val) => (
              <p key={val}>
                <label>
                  <input
                    name="q2"
                    type="radio"
                    value={val}
                    onChange={handleChange}
                    checked={answers.q2 === val}
                  />
                  <span>{val.replace("tys", " tys. zł")}</span>
                </label>
              </p>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <span className="card-title">3. Jaki kontynent chciałbyś odwiedzić?</span>
            {/* Zmiana: Teraz mapujemy przez unikalne kontynenty z allOffers */}
            {Array.from(new Set(allOffers.map(offer => offer.continent))).map((key) => (
              <p key={key}>
                <label>
                  <input
                    name="q3"
                    type="radio"
                    value={key}
                    onChange={handleChange}
                    checked={answers.q3 === key}
                  />
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </label>
              </p>
            ))}
          </div>
        </div>

        <div className="center-align">
          <button className="btn waves-effect waves-light pink darken-1" type="submit">
            Wyślij odpowiedzi
          </button>
        </div>
      </form>

      {/* Materialize modal */}
      <div ref={modalRef} id="resultModal" className="modal">
        <div className="modal-content">
          {result && (
            <>
              <h4>{result.title}</h4>
              <img src={result.image} alt={result.title} className="responsive-img" />
              <p>{result.description}</p>
              {result.price && <p className="quiz-price">Cena: {result.price}</p>}
            </>
          )}
        </div>
        <div className="modal-footer">
          {result && (
            <Link to={result.link} className="modal-close btn green"> {/* Zmieniono 'a href' na Link */}
              {result.link === "/oferty" ? "Zobacz wszystkie oferty" : "Zobacz ofertę"}
            </Link>
          )}
          <button className="modal-close btn-flat">Zamknij</button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;