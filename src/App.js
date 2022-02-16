import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar from "./components/layouts/navigation/navbar/Sidebar";
import Home from "./pages/Home";
import InvoiceDetaile from "./pages/[InvoiceDetaile]";
import { DataProvider } from './context/DataContext'
import useLocalStorage from 'use-local-storage'

import './App.css'


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function switchTheme() {
    console.log("Clicked")

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App" data-theme={theme} >
          <Sidebar theme={theme} handleClick={switchTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<InvoiceDetaile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
