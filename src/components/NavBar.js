import React from "react";
import { Nav, Brand, Logo, NavLink_, Li, Hamburger, Ul, SignInBtn, NavBtnLink, CloseBtn } from "./NavBarElements";
import { useState } from "react";

function NavBar() {
	const [navOpen, setNavOpen] = useState(false);
	const toggleOpenNav = () => {
		setNavOpen(!navOpen);
	};

	let navBtn;
	let ClassShowMenu;
	if (navOpen) {
		navBtn = <CloseBtn onClick={toggleOpenNav} />;
		ClassShowMenu = "active";
	} else {
		navBtn = <Hamburger onClick={toggleOpenNav} />;
		ClassShowMenu = "";
	}
	return (
		<>
			<Nav>
				<Brand>
					<Logo>Gm</Logo>
					<NavLink_ className={"logo"} to="/">
						G-tone
					</NavLink_>
				</Brand>
				{navBtn}
				<Ul className={ClassShowMenu} onClick={toggleOpenNav}>
					<Li>
						<NavLink_ to="/">Home</NavLink_>
					</Li>

					<Li>
						<NavLink_ to="/blog">Blog</NavLink_>
					</Li>
					<Li>
						<NavLink_ to="/contact">Contact-us</NavLink_>
					</Li>
					<Li className="sing-up">
						<NavLink_ to="/">Sign Up</NavLink_>
					</Li>
					<Li className="hide">
						<NavBtnLink to="/">Sing In </NavBtnLink>
					</Li>
				</Ul>
				<SignInBtn>
					<NavBtnLink to="/">Sing In </NavBtnLink>
				</SignInBtn>
			</Nav>
		</>
	);
}

export default NavBar;
