// src/components/OffersCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Offers.css';

const OfertaCard = ({ image, title, price, details, link }) => {
  const navigate = useNavigate();

  // Funkcja do przejścia na stronę szczegółów
  const handleDetails = () => {
    navigate(link);
  };

  // Funkcja do przejścia na stronę rezerwacji (lub inna)
  const handleBooking = () => {
    navigate(link); // przykład podstrony do rezerwacji
  };

  return (
    <div className="card oferta-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{price}</p>
        <ul className="custom-list">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
      <div className="card-action center-align">
        <button className="btn black white-text oferta-btn" onClick={handleBooking}>
          Zarezerwuj
        </button>
        <button className="btn-flat oferta-link" onClick={handleDetails}>
          Dowiedz się więcej
        </button>
      </div>
    </div>
  );
};

export default OfertaCard;
