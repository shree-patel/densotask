import { Navbar } from "react-bootstrap";

export default function HeaderNavigation() {
 return (
    <Navbar bg="white" className="border-bottom px-3 justify-content-end">
      <div className="d-flex align-items-center">
        <div className="me-3 text-end">
          <div className="fw-bold text-danger">ADMINISTRATION</div>
          <div className="text-muted small">administrator@denso.com</div>
        </div>

        <img
          src="/src/assets/imageone.png"
          alt="User"
          width="40"
          height="40"
          className=" rounded-circle me-1"
        />

        <img
          src="/src/assets/imagetwo.png" 
          alt="icon"
          width="20"
          height="20"
        />
      </div>
    </Navbar>
  );
}
