import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/compare").then(r => setItems(r.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Melhor Compra</h1>
      {items.map((i, idx) => (
        <div key={idx} className="border p-3 rounded mb-2">
          {i.name} — {i.market} — <strong>R$ {i.price}</strong>
        </div>
      ))}
    </div>
  );
}
