import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  const getToken = async () => {
    const token = await window.tokenApi.getToken()
    setValue(token ?? '')
  }

  const setToken = () => {
    window.tokenApi.setToken(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={getToken}>Get Token</button>
      <button onClick={setToken}>Set Token</button>
    </div>
  )
}

export default App
