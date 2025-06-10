import React, { useEffect, useState } from "react";
import M from "materialize-css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  useEffect(() => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message, topic } = formData;

    if (!name || !email || !message || topic === "") {
      M.toast({ html: "Uzupełnij wszystkie pola!", classes: "red darken-1" });
      return;
    }

    if (!validateEmail(email)) {
      M.toast({ html: "Wprowadź poprawny adres e-mail!", classes: "red darken-1" });
      return;
    }

    M.toast({ html: "Wiadomość została wysłana!", classes: "green darken-2" });
    setFormData({ name: "", email: "", message: "", topic: "" });
    M.updateTextFields();
    const selectElems = document.querySelectorAll("select");
    M.FormSelect.init(selectElems);
  };

  return (
    <div className="container" style={{ marginBottom: "4rem" }}>
      <h2 className="header">Kontakt</h2>
      <form onSubmit={handleSubmit}>
      <div className="input-field">
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Wybierz temat
            </option>
            <option value="Wycena">Wycena</option>
            <option value="Rezerwacja">Rezerwacja</option>
            <option value="Reklamacja">Reklamacja</option>
            <option value="Inne">Inne</option>
          </select>
          <label>Temat wiadomości</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Imię</label>
        </div>
        <div className="input-field">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <textarea
            name="message"
            id="message"
            className="materialize-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="message">Wiadomość</label>
        </div>
        <button className="btn waves-effect waves-light" type="submit">
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Contact;
