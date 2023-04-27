import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Nav id='footer' className="justify-content-center" activeKey="/home">
        <Nav.Item>
       
          <Nav.Link  href="/home"><a href="mailto: ryanbairdchilders@gmail.com">Contact Us</a></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/terms">Terms and Conditions</Link>
        </Nav.Item>
        
      </Nav>
  );
}

export default Footer;