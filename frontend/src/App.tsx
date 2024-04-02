import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/home.tsx";
import DashboardDetails from "./pages/dashboardDetails.tsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboards/:id" element={<DashboardDetails/>}/>
        </Routes>
    )
}

export default App
