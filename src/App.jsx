import Sidebar from "./components/Sidebar"
import UploadFilepage from "./pages/UploadFilepage";
import TopNavbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

import Registration from "./components/Registration";


export default function App() {
  return(
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <TopNavbar />
        <div className="Flex-grow-1 p-3"> 


          <Routes>
            <Route path="/upload" element={<UploadFilepage />} />
            <Route path="/register" element={<Registration />} />
            
          </Routes>

        </div>


        <div  className="text-end text-muted small me-3 mt-5 mb-2">Powered By Optimized Solutions Limited
           <img
          src="\src\assets\favicon (1).ico"
          
          width="20"
          height="20"
        />
        </div>
      </div>

      

    </div>
  );
}


