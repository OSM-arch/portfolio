import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./frontend/guest/App.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import SignUp from "./frontend/signUp/signUpForm.jsx";
import AdminPanel from "./frontend/admin/AdminPanel.jsx";

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/admin" element={<AdminPanel />}/>
            <Route path="/guest" element={<App />} />
        </Routes>
    </HashRouter>
)