import React from "react";
import data from "../data";
import styled from "styled-components";

function Blog() {
	const pic = data.products;
	const Styles = styled.div`
		width: 100%;
		height: 100%;

		h1 {
			color: #1e293b;
			text-align: center;
			margin: 6rem;
			font-size: 62px;
		}
		h3 {
			color: #1e293b;
			font-size: 30px;
			font-weight: 500;
			text-align: left;
			margin: 5px;
			padding: 5px;
		}
		.section {
			width: 80%;
			margin: 60px auto;
			padding: 20px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}
		.main {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			p {
				color: #1e293b;
				width: 500px;
				word-spacing: 5px;
			}
			img {
				height: auto;
				width: 30%;
			}
		}
	`;
	return (
		<>
			<Styles>
				<h1>Blog</h1>
				<div className="section">
					<h3>Gold is the way out</h3>
					<div className="main">
						<p>
							We must be quiet, soft and gentle. Trees grow in all kinds of ways. They're not all perfectly straight. Not every
							limb is perfect. That's what painting is all about. It should make you feel good when you paint. And I know you're
							saying, 'Oh Bob, you've done it this time.' And you may be right.
						</p>
						<img src={pic[0].image} alt="fashion picture" />
					</div>
				</div>
				<div className="section">
					<h3>You can never go wrong with a diamon ring</h3>
					<div className="main">
						<p>
							Use your imagination, let it go. You are only limited by your imagination. We'll put all the little clouds in and
							let them dance around and have fun. There he comes. In your world you have total and absolute power.
						</p>
						<img src={pic[1].image} alt="fashion picture" />
					</div>
				</div>
				<div className="section">
					<h3>Pen and Pencils</h3>
					<div className="main">
						<p>
							These trees are so much fun. I get started on them and I have a hard time stopping. Once you learn the technique,
							ohhh! Turn you loose on the world; you become a tiger. Every single thing in the world has its own personality -
							and it is up to you to make friends with the little rascals. I guess I'm a little weird. I like to talk to trees
							and animals. That's okay though; I have more fun than most people. You could sit here for weeks with your one hair
							brush trying to do that - or you could do it with one stroke with an almighty brush.
						</p>
						<img src={pic[3].image} alt="fashion picture" />
					</div>
				</div>
				<div className="section">
					<h3>Fashion is awesome</h3>
					<div className="main">
						<p>
							I sincerely wish for you every possible joy life could bring. In your world you can create anything you desire. Use
							what you see, don't plan it. As trees get older they lose their chlorophyll.
						</p>
						<img src={pic[4].image} alt="fashion picture" />
					</div>
				</div>
				<div className="section">
					<h3></h3>
					<div className="main">
						<p>
							You are only limited by your imagination. It's all a game of angles. And that's when it becomes fun - you don't
							have to spend your time thinking about what's happening - you just let it happen. A little happy sunlight shining
							through there.
						</p>
						<img src={pic[5].image} alt="fashion picture" />
					</div>
				</div>
				<div className="section">
					<h3>Fashion is Art</h3>
					<div className="main">
						<p>
							Son of a gun. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful
							out of it. Only God can make a tree - but you can paint one. The secret to doing anything is believing that you can
							do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. You don't
							have to be crazy to do this but it does help. It's a good way of getting rid of all your anxieties and hostilities.
						</p>
						<img src={pic[2].image} alt="fashion picture" />
					</div>
				</div>
				<div className="section">
					<h3>No art can match fashion</h3>
					<div className="main">
						<p>
							You are only limited by your imagination. It's all a game of angles. And that's when it becomes fun - you don't
							have to spend your time thinking about what's happening - you just let it happen. A little happy sunlight shining
							through there.
						</p>
						<img src={pic[0].image} alt="fashion picture" />
					</div>
				</div>
			</Styles>
		</>
	);
}

export default Blog;
