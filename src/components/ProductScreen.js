import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data";
import { useParams } from "react-router-dom"; //needed to function with latest react-router-dom
import styled from "styled-components";

const Styles = styled.div`
	background-color: #c6c6c6;

	.product-name {
		font-size: 2rem;
		font-weight: bold;
	}
	.product-brand {
		font-size: 1.2rem;
		color: #808080;
	}
	.product-price {
		font-size: 2.5rem;
		font-weight: bold;
	}
	.product-image {
		max-width: 34rem;
		max-height: 34rem;
	}

	.product-rating {
		margin-bottom: 1rem;
	}

	.details-image img {
		max-width: 100%;
		height: auto;
	}
	.details-info {
		flex: 1 1 30rem;
		color: #547fc9;
	}
	.details-info ul {
		list-style-type: none;
		padding: 0;
		li {
			color: white;
			list-style: none;
			margin-bottom: 1rem;
		}
	}
	/* .details-action {
		flex: 1 1 30rem;
		background-color: beige;
		padding: 10rem;
	} */

	.back-to-result {
		padding: 1rem;
		font-size: 2rem;
		margin: 1rem;
		color: #f8f8f8;
	}

	.details-action {
		border: 0.1rem #808080 solid;
		border-radius: 0.5rem;
		background-color: #f8f8f8;
		padding: 1rem;
	}
	.details-action ul li:last-child {
		display: flex;
		flex-direction: column;
		margin: 10px;
	}
	.button {
		padding: 1rem;
		border: 0.1rem #808080 solid;
		border-radius: 0.5rem;
		cursor: pointer;
	}
	.button:hover {
		border: 0.1rem #404040 solid;
	}
	.button.primary {
		background-color: #caa5aa;
	}

	.custom-btn {
		background-color: #547fc9;
	}
`;

const ProductScreen = (props) => {
	const { id } = useParams(); //needed in place of props.params.match.id
	const product = data.products.find((x) => x._id === id);
	return (
		<>
			<Container>
				<Styles>
					<Link to="/" className="back-to-result">
						Back to Result
					</Link>

					<Row>
						<Col sm={12} md={4}>
							<div className="details-image">
								<img className="product-image" src={product.image} alt="product" />
							</div>
						</Col>
						<Col sm={12} md={4}>
							<div className="details-info">
								<ul>
									<li>
										<h4 className="product-name">{product.name}</h4>
									</li>
									<li>{product.rating} Stars</li>
									<li>
										Price:<b>${product.price}</b>
									</li>
									<li>
										Description:
										<div>{product.description}</div>
									</li>
								</ul>
							</div>
						</Col>
						<Col sm={12} md={4}>
							<div className="details-action">
								<ul>
									<li>Price: ${product.price}</li>
									<li>Status: {product.status}</li>
									<li>
										Qty:
										<select>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
										</select>
									</li>
									<li>
										<button className="button primary">Add to Cart</button>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Styles>
			</Container>
		</>
	);
};

export default ProductScreen;
