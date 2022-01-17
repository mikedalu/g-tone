import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import slideData from "../slideData";
import styled from "styled-components";

function Caro() {
	const BlackText = styled.div`
		color: #000;
		font-size: 1.5rem;
		font-weight: bold;
	`;
	const WhiteText = styled.div`
		color: #fff;
		font-size: 1.5rem;
		font-weight: bold;
	`;

	const pics = slideData.products;
	return (
		<Container>
			<Carousel>
				<Carousel.Item interval={4000}>
					<img fluid className="d-block " src={pics[0].image} alt="Second slide" />
					<Carousel.Caption>
						<BlackText>
							<h3 className="slid-2">Fashion has never benn better with Gtone MultiBizz</h3>
							<p>Lorem ipsum dolor sit.</p>
						</BlackText>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item interval={4000}>
					<img fluid className="d-block" src={pics[1].image} alt="Second slide" />
					<Carousel.Caption>
						<BlackText>
							<h3 className="slid-2">Better fashion with us</h3>
							<p>Lorem ipsum dolor sit </p>
						</BlackText>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img fluid className="" src={pics[2].image} alt="Third slide" />
					<Carousel.Caption>
						<WhiteText>
							<h3 className="slid-3">Don't just be cool</h3>
							<p>Look cool! with Gtone accessories</p>
						</WhiteText>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default Caro;
