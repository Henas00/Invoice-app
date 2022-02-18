import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar from "./components/layouts/navigation/navbar/Sidebar";
import Home from "./pages/Home";
import InvoiceDetaile from "./pages/[InvoiceDetaile]";
import useLocalStorage from 'use-local-storage'

import './App.css'
import NotFound from "./components/layouts/NotFound";


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function switchTheme() {
    console.log("Clicked")

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="App" data-theme={theme} >
      <Sidebar theme={theme} handleClick={switchTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<InvoiceDetaile />} />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
