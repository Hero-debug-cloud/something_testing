import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import "./DashboardPage.css";

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <Outlet/>
        </div>
    )
}

export default Home;