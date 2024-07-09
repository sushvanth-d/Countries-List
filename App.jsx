import Header from "./Components/Header"
import { Outlet } from "react-router-dom"

import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
