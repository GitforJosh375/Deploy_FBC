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
      <Routes basename="/Deploy_FBC">
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/prayer" element={<Prayer/>}/>
      </Routes>
    </div>
  );
}
