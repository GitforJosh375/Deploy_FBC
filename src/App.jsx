import "./styles.css";
import { Route, Routes } from "react-router-dom"
import Home from "./routes/home.jsx";
import About from "./routes/about.jsx";
import Event from "./routes/event.jsx";
import Contact from "./routes/contact.jsx";
import Prayer from "./routes/prayer.jsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route basename="/" path="/" element={<Home/>}/>
        <Route basename="/about" path="/about" element={<About/>}/>
        <Route basename="/event" path="/event" element={<Event/>}/>
        <Route basename="/contact" path="/contact" element={<Contact/>}/>
        <Route basename="/prayer" path="/prayer" element={<Prayer/>}/>
      </Routes>
    </div>
  );
}
