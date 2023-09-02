import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useTheme } from 'next-themes';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState('');
  const { theme, setTheme } = useTheme();

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
    <div className="h-screen p-4">
      <div className='flex flex-col'>
        <div>current theme is: {theme}</div>
        <div className='flex gap-2'>
          <Button onClick={() => setTheme('light')}>Light</Button>
          <Button onClick={() => setTheme('dark')}>Dark</Button>
          <Button onClick={() => setTheme('system')}>System</Button>
        </div>
      </div>
      <div>
        <Input value={value} onChange={handleChange} />
        <Button onClick={getUsername}>Get Username</Button>
        <Button onClick={setUsername}>Set Username</Button>
      </div>
    </div >
  );
}

export default App;
