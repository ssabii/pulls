import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Theme } from "../electron/IpcChannel/theme";
import { useQuery } from "@apollo/client";
import { GetSearchDocument, SearchType } from "./gql/graphql";


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

  const handleClickTheme = (theme: Theme) => {
    setTheme(theme);
    window.themeApi.setTheme(theme);
  };

  const { data } = useQuery(GetSearchDocument, {
    variables: {
      query: "is:closed is:pr review-requested:ssabii archived:false",
      type: SearchType.Issue,
      first: 10
    }
  });
  console.log(data);
  return (
    <div className="h-screen p-4">
      <div className='flex flex-col'>
        <div>current theme is: {theme}</div>
        <div className='flex gap-2'>
          <Button onClick={() => handleClickTheme('light')}>Light</Button>
          <Button onClick={() => handleClickTheme('dark')}>Dark</Button>
          <Button onClick={() => handleClickTheme('system')}>System</Button>
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
