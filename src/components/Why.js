import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCheck,
  faSmile,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Why.css";

function Why() {
  const reasons = [
    {
      icon: faCheck,
      title: "Kualitas Premium",
      description:
        "Material pilihan dengan proses produksi yang teliti untuk daya tahan maksimal.",
    },
    {
      icon: faSmile,
      title: "Desain Unik",
      description:
        "Setiap piece memiliki karakter tersendiri yang membuat Anda tampil istimewa.",
    },
    {
      icon: faTruck,
      title: "Pengiriman Cepat",
      description:
        "Kami mengirim keseluruh Indonesia dengan kemasan yang aman dan rapi.",
    },
    {
      icon: faCube,
      title: "Harga Kompetitif",
      description:
        "Dapatkan pakaian berkualitas premium dengan harga yang terjangkau untuk semua kalangan.",
    },
  ];

  return (
    <section id="why" className="why-section">
      <div className="container">
        <h2>Mengapa Memilih Bajuku?</h2>
        <p className="section-subtitle">
          Kami berkomitmen memberikan nilai terbaik untuk setiap pembelian Anda
        </p>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">
                <FontAwesomeIcon icon={reason.icon} />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
