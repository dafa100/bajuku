Buatkan saya website berbasis ReactJs terbaru untuk brand parfume bernama "Bajuku" dimana dia menyediakan baju yang beda dari yang lain dan mempunyai karakter. Dalam website ini atau landing page ini gunakan copywriting yang baik sehingga bisa menarik konsumen dalam mengklik tombol beli.

Dalam prinsipnya gunakan teknik AIDA.

Gunakan flat design dalam css di web ini dengan basic warna (coklat dan turunannya) dengan color pallete yang sesuai. Gunakan icon dari fontawesome, jangan gunakan emoji web.

Dalam struktur web ini gunakan section seperti:

- Hero
- Why
- Product List
- CTA (Tombol ini mengarah ke prefill text whatsapp ke nomor 012345678910)
- Social Proof
- Dan section lain yang relevan dalam konsep AIDA
  Catatan: Jangan terlalu banyak section sehingga membuat orang lama berpikir, mungkin max 6 saja.

Pada product list silahkan consume data dari Contentful CMS, gunakan library contentful yang sudah proven, jangan membuat fetch sendiri. Dengan credentials (simpan di file .env):

- Spaces ID: REACT_APP_CONTENTFUL_SPACE_ID
- Access Token: REACT_APP_CONTENTFUL_ACCESS_TOKEN
- Content Type: clothes
