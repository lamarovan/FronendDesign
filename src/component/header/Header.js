import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    // <header className="header container">
    //   <div className="title">
    //     KTM
    //     <p className="title-cyan">CODERS</p>
    //   </div>
    //   <ul className="nav">
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </ul>
    // </header>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"> KTM &#123; CODERS &#125;</Navbar.Brand>

      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
  );
}
