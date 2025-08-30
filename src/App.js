import React from 'react';


function App() {
const [msg, setMsg] = React.useState('...loading');


React.useEffect(() => {
const apiUrl = process.env.REACT_APP_API_URL;
fetch(`${apiUrl}/api/hello`)
.then(r => r.json())
.then(d => setMsg(d.message))
.catch(e => setMsg('Ошибка: ' + e.message));
}, []);


return (
<div style={{ padding: 20 }}>
<h1>React frontend</h1>
<p>Backend says: <b>{msg}</b></p>
</div>
);
}


export default App;