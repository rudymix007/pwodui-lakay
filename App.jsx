import { useState } from "react";

const products = [
  {
    kategori: "Manje sèk",
    pwodui: "Diri",
    egzanp: "Diri Tchaka, Diri Oncle Sam",
    pri: "$25",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Haitian_white_rice.jpg",
  },
  {
    kategori: "Bwason",
    pwodui: "Cola Couronne",
    egzanp: "Cola Couronne plastik/vè",
    pri: "$1.50",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Cola_Couronne.jpg",
  },
  {
    kategori: "Kondiman",
    pwodui: "Pikliz",
    egzanp: "Pikliz Lakay, Pikliz Bèl Fanm",
    pri: "$6",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Pikliz.jpg",
  },
];

export default function PwoduiAyisyenOrderPage() {
  const [order, setOrder] = useState({ name: "", phone: "", items: "" });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `Nouvo Kòmand:\nNon: ${order.name}\nTelefòn: ${order.phone}\nPwodui yo vle achte:\n${order.items}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/13526821855?text=${encodedMessage}`, "_blank");
  };

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>Pwodui Ayisyen pou Kominote a</h1>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 24 }}>
        {products.map((prod, i) => (
          <div key={i} style={{ border: "1px solid #ccc", borderRadius: 12, padding: 12, width: 240 }}>
            <img src={prod.img} alt={prod.pwodui} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 12 }} />
            <h2>{prod.pwodui}</h2>
            <p><strong>Kategori:</strong> {prod.kategori}</p>
            <p>{prod.egzanp}</p>
            <p><strong>{prod.pri}</strong></p>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 500, margin: "40px auto" }}>
        <h2 style={{ fontSize: 24 }}>Fè Kòmand Ou</h2>
        <input name="name" placeholder="Non Ou" value={order.name} onChange={handleChange} style={{ width: "100%", padding: 8, marginBottom: 8 }} />
        <input name="phone" placeholder="Telefòn Ou" value={order.phone} onChange={handleChange} style={{ width: "100%", padding: 8, marginBottom: 8 }} />
        <textarea name="items" placeholder="Ki pwodwi ou bezwen?" value={order.items} onChange={handleChange} style={{ width: "100%", padding: 8, marginBottom: 8 }} />
        <button onClick={handleSubmit} style={{ backgroundColor: "green", color: "white", padding: 10, borderRadius: 8 }}>Voye Kòmand sou WhatsApp</button>
      </div>
    </div>
  );
}
