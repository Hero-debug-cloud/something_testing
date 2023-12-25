import './App.css';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import AllApplicantsPage from "./pages/AllApplicantsPage/AllApplicantsPage";
import PostJobPage from "./pages/PostJobPage/PostJobPage";
import ApplicantsTable from './pages/AllApplicantsPage/ApplicantsTable';
import Profile from './pages/AllApplicantsPage/Profile'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<PostJobPage />} />
          <Route path="/post" element={<PostJobPage />} />
          <Route path="/all" element={<AllApplicantsPage />} />
          <Route path="/applicants" element={<ApplicantsTable />} />
          <Route path="/applicants/:index" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
