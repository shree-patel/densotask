import { Nav } from "react-bootstrap";
import { FaFileUpload, FaUserPlus, FaUser, FaSignOutAlt } from 'react-icons/fa';



export default function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
        <img src="/assests/Densologo.svg" alt="logo" className="w-75 mb-4 mx-auto"/>
        <Nav  className="flex-column">

         <Nav.Link href="/upload"><FaFileUpload className="me-2"/>Generate XML </Nav.Link>
         <Nav.Link href="/register"><FaUserPlus className="me-2" />Candidate Registration</Nav.Link>
         <Nav.Link href="/profile"><FaUser className="me-2" />Profile </Nav.Link>
        </Nav>

        <div className="mt-auto">
            <button className="btn btn-outline-danger w-100 mt-4">
                <FaSignOutAlt className="me-2" />LOGOUT

            </button>
            <div className="text-center mt-3 text-muted small">
                "©" Denso. All rights Reserved
            </div>

        </div>

    </div>
  );
}

