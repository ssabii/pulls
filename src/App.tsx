import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getUsername = async () => {
    const username = await window.storeApi.getStore('username');
    setValue(username);
  };

  const setUsername = () => {
    window.storeApi.setStore('username', value);
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={getUsername}>Get Username</button>
      <button onClick={setUsername}>Set Username</button>
    </div>
  );
}

export default App;
