import React, { useState, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "../styles/opinions.css";

function Opinions() {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    opinion: "",
  });

  const [opinions, setOpinions] = useState([
    {
      name: "Adam",
      destination: "Ibiza",
      opinion: "Bardzo udany wyjazd, wszystko zgodne z opisem!",
      image: "../images/adam_opinie_zdj.png",
    },
    {
      name: "Anna",
      destination: "Kreta",
      opinion: "Profesjonalna obsługa i świetnie zorganizowana wycieczka.",
      image: "../images/anna_opinie_zdj.png",
    },
    {
      name: "Mikołaj",
      destination: "Oslo",
      opinion: "Wypoczynek w wymarzonym miejscu, polecam!",
      image: "../images/mikolaj_opinie_zdj.png",
    },
    {
      name: "Zofia",
      destination: "Paryż",
      opinion: "Romantyczny wyjazd, świetne wspomnienia!",
      image: "../images/kots1.jpg",
    },
    {
      name: "Jan",
      destination: "Nowy Jork",
      opinion: "Zobaczyłem wszystko co chciałem – niesamowite miasto!",
      image: "../images/ktos2.jpg",
    },
    {
      name: "Kasia",
      destination: "Santorini",
      opinion: "Cudowne widoki i przepyszne jedzenie!",
      image: "../images/ktos3.jpg",
    },
  ]);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      const instance = M.Carousel.init(carousel, {
        duration: 300,
        dist: -50,
        shift: 10,
        padding: 20,
        numVisible: 3,
        indicators: true,
      });

      const interval = setInterval(() => {
        instance.next();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [opinions]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, destination, opinion } = formData;

    if (!name || !destination || !opinion) {
      M.toast({
        html: "Uzupełnij wszystkie pola!",
        classes: "red darken-2 rounded-toast",
      });
      return;
    }

    setOpinions([...opinions, { name, destination, opinion, image: "" }]);

    M.toast({
      html: "Opinia została wysłana!",
      classes: "green darken-2 rounded-toast",
    });

    setFormData({ name: "", destination: "", opinion: "" });
  };

  return (
    <div className="container">
      <h3 className="header center-align">Dodaj opinię</h3>
      <form onSubmit={handleSubmit} className="opinie-form">
        <div className="input-field">
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
          <label htmlFor="name">Imię</label>
        </div>
        <div className="input-field">
          <input id="destination" name="destination" type="text" value={formData.destination} onChange={handleChange} />
          <label htmlFor="destination">Cel podróży</label>
        </div>
        <div className="input-field">
          <textarea id="opinion" name="opinion" className="materialize-textarea" value={formData.opinion} onChange={handleChange}></textarea>
          <label htmlFor="opinion">Twoja opinia</label>
        </div>
        <button type="submit" className="btn pink accent-2 waves-effect waves-light">
          Wyślij opinię
        </button>
      </form>

      <h4 className="center-align" style={{ marginTop: "50px" }}>Opinie naszych klientów</h4>
      <div className="carousel">
        {opinions.map((op, index) => (
          <div key={index} className="carousel-item center">
            <img
              src={op.image || "/images/default_avatar.png"}
              alt={op.name}
              className="circle user-photo"
            />
            <p><strong>{op.name}</strong> – {op.destination}</p>
            <p className="opinion-text">"{op.opinion}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opinions;
