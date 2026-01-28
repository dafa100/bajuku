import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navigation.css";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">👕</span>
          <span>BAJUKU</span>
        </div>
        <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "hero")}
            className="nav-link"
          >
            Beranda
          </a>
          <a
            href="#why"
            onClick={(e) => handleSmoothScroll(e, "why")}
            className="nav-link"
          >
            Mengapa Kami
          </a>
          <a
            href="#products"
            onClick={(e) => handleSmoothScroll(e, "products")}
            className="nav-link"
          >
            Produk
          </a>
          <a
            href="#cta"
            onClick={(e) => handleSmoothScroll(e, "cta")}
            className="nav-link"
          >
            Pesan Sekarang
          </a>
        </div>
        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
