import { Navbar } from "react-bootstrap"


export default function TopNavbar() {
  return (
    <Navbar bg="white" className="border-bottom justify-content-end px-3">
        <div className="d-flex align-items-center">
            <div className="text-end me-3">
                <div className="fw-bold text-danger">ADMINISTRATION</div>
                <div className="small text-muted">administrator@denso.com</div>

            </div>
            <img
          src="/assests/imageone.png"
          alt="profile"
          width="40"
          height="40"
          className="rounded-circle me-2"
        />
        <img
          src="/assests/imagetwo.png"
          alt="notifications"
          width="24"
          height="24"
        />

        </div>

    </Navbar>
  );
}

