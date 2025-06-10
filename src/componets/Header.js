import React, { useEffect, useState } from "react";
import M from "materialize-css";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

const navItems = [
  { id: "home", label: "Strona główna", to: "/" },
  { id: "oferta", label: "Oferta", to: "/oferta" },
  { id: "quiz", label: "Quiz", to: "/quiz" },
  { id: "opinie", label: "Opinie", to: "/opinie" },
  { id: "o-nas", label: "O nas", to: "/o-nas" },
  { id: "kontakt", label: "Kontakt", to: "/kontakt" },
];

function Header() {
  const location = useLocation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, { edge: "right" });
  }, []);

  useEffect(() => {
    const current = navItems.find((item) => item.to === location.pathname);
    setActive(current ? current.id : "home");
  }, [location]);

  const handleLinkClick = () => {
    const instance = M.Sidenav.getInstance(document.querySelector(".sidenav"));
    if (instance) instance.close();
  };

  return (
    <header>
      <nav className="pink accent-2">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Wędrowiec
          </Link>
          <a data-target="mobile-demo" className="sidenav-trigger right">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {navItems.map(({ id, label, to }) => (
              <li key={id} className={active === id ? "active-nav" : ""}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {navItems.map(({ id, label, to }) => (
          <li key={id} className={active === id ? "active-nav" : ""}>
            <Link to={to} onClick={handleLinkClick}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;

