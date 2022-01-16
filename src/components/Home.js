import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import Button from "react-bootstrap/Button";
import Caro from "./Carousel";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Home() {
	return (
		<>
			<Caro />
			<Container>
				<Row>
					{data.products.map((product) => (
						<Col xs={12} sm={6} md={4} lg={3} className="g-4 ">
							<Card>
								<Link to={"/products/" + product._id}>
									<Card.Img variant="top" src={product.image} />
								</Link>
								<Card.Body>
									<Link to={"/products/" + product._id}>
										<Card.Title>{product.name}</Card.Title>
										<p>
											<Button variant="primary" className="custom-btn">
												Add to cart
											</Button>
										</p>
									</Link>
									<Card.Text></Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
}

export default Home;
