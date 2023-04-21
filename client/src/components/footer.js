import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <Nav id='footer' className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Terms and Conditions</Nav.Link>
        </Nav.Item>
        
      </Nav>
  );
}

export default Footer;