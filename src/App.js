import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import Messages from "./pages/Messages";
import Support from "./pages/Support";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/support" element={<Support />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
