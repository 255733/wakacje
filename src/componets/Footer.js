import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="page-footer grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l5 s12">
            <h5 className="white-text">Biuro Podróży Wędrowiec</h5>
            <p className="grey-text text-lighten-4">Spełniamy marzenia o podróżach – bliskich i dalekich.</p>
          </div>
          <div className="col l4 s12">
            <h5 className="white-text">Linki</h5>
            <ul>
              <li><Link className="grey-text text-lighten-3" to="/oferta">Oferta</Link></li>
              <li><Link className="grey-text text-lighten-3" to="/kontakt">Kontakt</Link></li>
              <li><Link className="grey-text text-lighten-3" to="/opinie">Opinie</Link></li>
              <li><Link className="grey-text text-lighten-3" to="/regulamin">Regulamin</Link></li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Metody płatności</h5>
            <div className="payment-methods">
              {["Paypal", "g-pay", "przelewy24", "blik", "Apple_Pay"].map((name) => (
                <img
                  key={name}
                  src={`/images/${name}.png`}
                  alt={name.replace("_", " ")}
                  className="payment-icon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container">
          © 2025 Biuro Podróży Wędrowiec
        </div>
      </div>
    </footer>
  );
}

export default Footer;
