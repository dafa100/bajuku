import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/SocialProof.css";

function SocialProof() {
  const testimonials = [
    {
      name: "Rina S.",
      text: "Pakaian Bajuku benar-benar membuat saya terlihat beda. Kualitasnya sangat bagus dan pengiriman cepat!",
      rating: 5,
    },
    {
      name: "Budi K.",
      text: "Desainnya unik dan tidak mudah ditemukan di tempat lain. Sangat puas dengan pembelian saya!",
      rating: 5,
    },
    {
      name: "Siti M.",
      text: "Harga yang ditawarkan sangat kompetitif untuk kualitas premium. Sudah merekomendasikan ke teman-teman!",
      rating: 5,
    },
  ];

  return (
    <section className="social-proof">
      <div className="container">
        <h2>Apa Kata Pelanggan Kami</h2>
        <p className="section-subtitle">
          Kepuasan pelanggan adalah prioritas utama kami
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
