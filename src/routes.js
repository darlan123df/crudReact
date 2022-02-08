import { BrowserRouter, Route, Routes } from "react-router-dom";

import Logon from './pages/Logon';
import Home from './pages/Home';

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/login" element={<Logon />} />
            <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}