import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/set-name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) {
        throw new Error("Ошибка при сохранении имени");
      }

      navigate("/home");
    } catch (err) {
      console.error("Ошибка:", err.message);
      alert("Не удалось сохранить имя");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Введите имя</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;