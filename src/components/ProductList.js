import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/ProductList.css";

const CONTENTFUL_SPACE_ID = "xvvmez1zs93z";
const CONTENTFUL_ACCESS_TOKEN = "IQDTYzjpiMAnFaAzYmUlzAsWaPYziaLu1KdL8BDHnls";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?content_type=clothes&access_token=${CONTENTFUL_ACCESS_TOKEN}`,
        );
        const data = await response.json();

        // Process entries and assets
        const processedProducts = data.items.map((item) => {
          const fields = item.fields;
          return {
            id: item.sys.id,
            name: fields.namaBaju || "Produk Tanpa Nama",
            price: fields.price || 0,
            description: fields.description.content[0].content[0].value || "Deskripsi tidak tersedia",
            image: fields.gambar || null,
            category: fields.kategori || "Umum",
          };
        });

        setProducts(processedProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Gagal memuat produk. Silakan coba lagi nanti.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyClick = (productName, productPrice) => {
    const message = `Halo, saya tertarik dengan produk: *${productName}* (Rp${productPrice.toLocaleString("id-ID")}). Apakah tersedia?`;
    const whatsappUrl = `https://wa.me/62012345678910?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="products" className="product-section">
      <div className="container">
        <h2>Koleksi Terbaru Kami</h2>
        <p className="section-subtitle">
          Pilihan terbaik untuk setiap gaya dan kepribadian Anda
        </p>

        {loading && (
          <div className="loading">
            <p>Memuat produk...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>{error}</p>
            <p style={{ fontSize: "0.9em", marginTop: "10px" }}>
              Kami sedang memperbarui katalog. Hubungi kami via WhatsApp untuk
              info produk terbaru.
            </p>
          </div>
        )}

        {products.length > 0 && (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="image-placeholder">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">
                      Rp{product.price.toLocaleString("id-ID")}
                    </span>
                    <button
                      className="buy-btn"
                      onClick={() =>
                        handleBuyClick(product.name, product.price)
                      }
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="no-products">
            <p>Produk belum tersedia saat ini.</p>
            <p style={{ fontSize: "0.9em", marginTop: "10px" }}>
              Hubungi kami via WhatsApp untuk mengetahui koleksi terbaru.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductList;
