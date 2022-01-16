import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

function Contact() {
	const Style = styled.div`
		h1 {
			color: #1e293b;
			text-align: center;
			margin: 6rem;
			font-size: 52px;
		}
		form {
			font-size: 20px;
			color: #1e293b;
		}
	`;
	return (
		<div>
			<Container>
				<Style>
					<h1>Contact Us</h1>

					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" rows={10} />
						</Form.Group>
					</Form>
				</Style>
			</Container>
		</div>
	);
}

export default Contact;
