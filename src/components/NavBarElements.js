import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Nav = styled.nav`
	background: #080705;
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	z-index: 999;
`;
export const Brand = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 10px;
`;
export const Logo = styled.span`
	align-self: center;
	font-size: 42px;
	color: #4d4d80;
`;

export const Ul = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	z-index: 9;
	/* width: 100vw; */
	/* flex-wrap: nowrap; */

	@media screen and (max-width: 760px) {
		display: block;
		height: 100%;
		width: 50%;
		padding-left: 50px;

		position: absolute;
		top: 80px;
		left: -100%;
		background-color: black;
		transition: 0.5s ease;

		&.active {
			top: 80px;
			left: 0;
		}
	}
`;
export const Li = styled.li`
	list-style: none;
	font-size: 20px;
	color: #fff;
	padding: 0px;
	&.hide {
		display: none;
	}

	@media screen and (max-width: 760px) {
		margin-bottom: 24px;
		font-size: 20px;
		&.hide {
			display: inline-block;
			width: auto;
		}
	}
`;
export const NavLink_ = styled(Link)`
	color: #fff;
	text-decoration: none;
	&:hover {
		color: #547fc9;
		border-radius: 4px;
		transition: all 0.2s ease-in-out;
	}
	padding: 0 1rem;
	cursor: pointer;
	&.active {
		color: #547fc9;
	}
	&.logo {
		font-size: 32px;
		color: #fff;
	}
`;

export const Hamburger = styled(FaBars)`
	display: none;
	color: #fff;

	@media screen and (max-width: 760px) {
		display: block;
		positioin: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 3rem;
		cursor: pointer;
	}
`;

export const CloseBtn = styled(AiOutlineClose)`
	display: none;
	color: #fff;

	@media screen and (max-width: 760px) {
		display: block;
		positioin: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 3rem;
		cursor: pointer;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #547fc9;
	padding: 10px 22px;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #080705;
	}
`;
export const SignInBtn = styled.div`
	align-self: center;

	@media screen and (max-width: 760px) {
		display: none;
	}
`;
