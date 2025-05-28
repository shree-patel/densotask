import Sidebar from "./components/Sidebar"
import UploadFilepage from "./pages/UploadFilepage";
import TopNavbar from "./components/Navbar";


export default function App() {
  return(
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <TopNavbar />
        <div className="Flex-grow-1 p-3"> 
          <UploadFilepage/>

        </div>
        <div  className="text-end text-muted small me-3 mb-2">Powered By Optimized Solutions Limited</div>


      </div>

      

    </div>
  );
}


