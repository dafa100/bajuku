import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Bajuku</h1>
        <p className="hero-subtitle">
          Pakaian yang Mencerminkan Kepribadian Unik Anda
        </p>
        <p className="hero-description">
          Setiap piece dirancang dengan karakter khas untuk membuat Anda tampil
          beda dari yang lain. Kualitas premium, desain eksklusif, dan harga
          yang terjangkau.
        </p>
        <a href="#products" className="cta-button primary">
          Lihat Koleksi <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          <img
            style={{ width: "100%",
            height: "100%"
             }}
            src="https://clothes-products-1396951332.cos.ap-jakarta.myqcloud.com/siswa_siswi.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
