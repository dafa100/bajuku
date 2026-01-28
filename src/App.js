import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import Hero from "./components/Hero";
import Why from "./components/Why";
import ProductList from "./components/ProductList";
import CTA from "./components/CTA";
import SocialProof from "./components/SocialProof";
import Navigation from "./components/Navigation";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Why />
      <ProductList />
      <SocialProof />
      <CTA />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Bajuku</h4>
            <p>
              Pakaian berkualitas dengan karakter unik untuk Anda yang ingin
              beda.
            </p>
            <i>***Semua gambar produk adalah hasil ilustrasi dari AI***</i>
          </div>
          <div className="footer-section">
            <h4>Kontak</h4>
            <p>WhatsApp: 012345678910</p>
            <p>Email: info@bajuku.com</p>
          </div>
          <div className="footer-section">
            <h4>Ikuti Kami</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="#" aria-label="TikTok">
                <FontAwesomeIcon icon={faStar} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bajuku. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
