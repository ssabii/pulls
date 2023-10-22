import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`,
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" enableSystem>
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
