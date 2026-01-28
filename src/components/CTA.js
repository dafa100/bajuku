import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../styles/CTA.css";

function CTA() {
  const handleWhatsAppClick = () => {
    const message =
      "Halo Bajuku! Saya ingin mengetahui lebih lanjut tentang koleksi pakaian Anda.";
    const whatsappUrl = `https://wa.me/62012345678910?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="cta" className="cta-section">
      <div className="cta-content">
        <h2>Jangan Lewatkan Kesempatan Ini!</h2>
        <p>
          Dapatkan koleksi eksklusif Bajuku sekarang juga dan tampil percaya
          diri dengan gaya unik Anda.
        </p>
        <p className="cta-subtext">
          Hubungi kami via WhatsApp untuk pemesanan dan penawaran spesial
        </p>
        <button className="cta-button secondary" onClick={handleWhatsAppClick}>
          <FontAwesomeIcon icon={faWhatsapp} /> Pesan Sekarang via WhatsApp
        </button>
      </div>
    </section>
  );
}

export default CTA;
