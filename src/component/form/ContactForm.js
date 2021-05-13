import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contactForm.scss";

export default function ContactForm() {
  return (
    <div className="contact-form">
      <Form>
        <h3>Contact Form</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Your message</Form.Label>
          <Form.Control as="textarea" placeholder="Your Message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="form-img"> some text</div>
      {/* <img
        src="https://preview.redd.it/oh95ijukz1y61.jpg?width=640&crop=smart&auto=webp&s=bf6d502845551e29a5384e67749eb30b0c52ec74"
        alt="message"
      /> */}
    </div>
  );
}
