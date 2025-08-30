import { useState } from 'react';

export default function NameForm() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/save-name`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      setMsg(data.message);
      setName('');
    } catch (err) {
      console.log(err);
      setMsg('Ошибка при отправке');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Введите имя" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <button type="submit">Сохранить</button>
      {msg && <p>{msg}</p>}
    </form>
  );
}