import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import slideData from "../slideData";
import styled from "styled-components";

function Caro() {
	const Styles = styled.div`
		color: #fff;
		font-size: 2rem;
		font-weight: bold;
		.w-100 {
			width: 100%;
		}
	`;
	const pics = slideData.products;
	return (
		<Container fluid>
			<Carousel>
				<Carousel.Item interval={2000}>
					<img fluid className="d-block  " src={pics[0].image} alt="First slide" />
					<Carousel.Caption>
						<Styles>
							<h3 className="slid-1">Get 30% off This watch</h3>
							<p>A gold wrist watch is all you need to up your fashion game</p>
						</Styles>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img fluid className="d-block w-100" src={pics[1].image} alt="Second slide" />
					<Carousel.Caption>
						<h3 className="slid-2">Fashion has never benn better with Gtone MultiBizz</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img fluid className=" w-100" src={pics[2].image} alt="Third slide" />
					<Carousel.Caption>
						<h3 className="slid-3">Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default Caro;
