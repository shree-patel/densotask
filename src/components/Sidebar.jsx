
import { Nav } from "react-bootstrap";
import { FaFileUpload,  FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";

export default function NavigationPanel() {
const redirect = useNavigate();

 const onLogoutClick = () => {
  
    redirect('/');
  };

  return (
    <div className="d-flex flex-column bg-light p-3" style={{ width: '250px', height: '100vh' }}>
      <img 
        src="/src/assets/denso-vector-logo-small.png" 
        alt="logo" 
        className="w-75 mb-4 mx-auto"
      />

      <Nav className="flex-column">
        <Nav.Link as={Link} to="/upload">
          <FaFileUpload className="me-3" /> XML Generator
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          <FaUserEdit className="me-3" /> Candidate Registration
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          <FaUserTie className="me-3" /> User Profile
        </Nav.Link>
      </Nav>

      <div className="mt-auto">
        <button className="btn btn-outline-danger w-100 mt-4" onClick={onLogoutClick}>
          <FaSignOutAlt className="me-1" /> Logout
        </button>
        <div className="text-center mt-3 medium text-bold">
          	&copy; Denso All Rights Reserved
        </div>
      </div>
    </div>
  );
}
