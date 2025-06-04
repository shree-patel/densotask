import { Routes, Route } from 'react-router-dom';
import LogInPage from "./pages/LogInpage";
import FileUploadView from "./pages/UploadFilepage";
import RegistrationForm from "./components/Registration";
import ProfileView from "./pages/Profile";
import LayoutShell from "./pages/DashboardLayout";

export default function AppRoutes() {
return (
    <Routes>
   
      <Route path="/" element={<LogInPage />} />

     
      <Route element={<LayoutShell />}>
        <Route path="upload" element={<FileUploadView/>}/>
       <Route path="register" element={<RegistrationForm/>}/>
       <Route path="profile" element={<ProfileView/>}/>
      </Route>
    </Routes>
  );
}
