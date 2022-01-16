import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
	const Styles = styled.footer`
		font-family: "Archivo", sans-serif;
		background-color: #000;
		padding-top: 2rem;
		padding-left: 2rem;
		h6 {
			color: #ccc;
			font-size: 18px;
		}
		hr {
			color: #fff;
		}
		p a {
			color: #fff;
			cursor: pointer;
			&:hover {
				color: #547fc9;
			}
		}
		p {
			color: white;
		}
		.footer-link {
			margin-right: 1rem;
		}
		.col {
			margin-bottom: 1rem;
			padding-bottom: 1rem;
		}
	`;
	return (
		<>
			<Styles>
				<Container fluid>
					<Row justify-content-center>
						<Col sm={6} lg={4} className="col">
							<h6>Home</h6>
							<hr />
							<p>
								<Link to="/">Home</Link>
								<br />
								<Link to={"/category"}>Category</Link>
								<br />
								<Link to={"/contact"}>Contanct</Link>
							</p>
						</Col>

						<Col sm={6} lg={4}>
							<h6>Category</h6>
							<hr />
							<p>
								<Link to={"/"}>Watches</Link>
								<br />
								<Link to={"/"}>Jewelries</Link>
								<br />
								<Link to={"/"}>Cosmetics</Link>
							</p>
						</Col>
						<Col sm={12} lg={4}>
							<h6>Socials/Contact</h6>
							<hr />
							<p>
								<Link to={"/"}>
									<AiOutlineMail className="footer-link" />
									gtoneMultibis@gmail.com
								</Link>
							</p>
							<p>
								<Link to={"/"}>
									<AiOutlineInstagram className="footer-link" />
									intagram
								</Link>
								<br />
								<Link to={"/"}>
									<AiOutlineFacebook className="footer-link" />
									facebook
								</Link>
								<br />
								<Link to={"/"}>
									<AiOutlineTwitter className="footer-link" />
									twitter
								</Link>
								<br />
							</p>
						</Col>
					</Row>
					<p className="text-center">Gtone MultiB &copy; 2022</p>
				</Container>
			</Styles>
		</>
	);
}

export default Footer;
