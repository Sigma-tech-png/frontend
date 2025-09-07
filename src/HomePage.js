import { useEffect, useState } from "react";

function HomePage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/get-name`);
        if (!res.ok) {
          throw new Error("Ошибка при получении имени");
        }
        const data = await res.json();
        setName(data.name);
      } catch (err) {
        console.error("Ошибка:", err.message);
      }
    };

    fetchName();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Главная страница</h1>
      {name ? (
        <h2>Добро пожаловать, {name}!</h2>
      ) : (
        <h2>Загрузка имени...</h2>
      )}
    </div>
  );
}

export default HomePage;