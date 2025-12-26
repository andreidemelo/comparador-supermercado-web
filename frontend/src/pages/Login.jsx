import { useState } from "react";
import { api } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function entrar() {
    const res = await api.post("/login", { email, password });
    localStorage.setItem("token", res.data.token);
    window.location = "/";
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input className="border p-2 w-full mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-4" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-600 text-white p-2 w-full" onClick={entrar}>
        Entrar
      </button>
    </div>
  );
}
