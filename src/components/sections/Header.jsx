import React, { useState } from "react";

import { HamburgerButton } from "../items/HamburgerButton";

import logo from "../../../public/images/logo.svg";
import cart from "../../../public/images/cart.svg";

export const Header = () => {
	const [activeAsideNav, setActiveAsideNav] = useState(false);

	return (
		<>
			<header>
				<div className="logo">
					<a href="#" className="logo__link">
						<img src={logo} alt="logo" />
						<p>Three Dots</p>
					</a>
				</div>
				<nav className={`navbar ${activeAsideNav && "navbar-is-active"}`}>
					<ul
						className={`navbar__links ${
							activeAsideNav && "navbar-is-active"
						} `}
					>
						<li>
							{" "}
							<a
								href="#"
								className={`navbar__link ${
									activeAsideNav && "navbar__link-is-active"
								}`}
							>
								Specs{" "}
							</a>{" "}
						</li>
						<li>
							{" "}
							<a
								href="#"
								className={`navbar__link ${
									activeAsideNav && "navbar__link-is-active"
								}`}
							>
								Products{" "}
							</a>{" "}
						</li>
						<li>
							{" "}
							<a
								href="#"
								className={`navbar__link ${
									activeAsideNav && "navbar__link-is-active"
								}`}
							>
								Contact{" "}
							</a>{" "}
						</li>
					</ul>
				</nav>
				<div className="cart">
					<img className="cart__img" src={cart} alt="cart" />
				</div>
			</header>

			{/* Hambrguer-button-(Mobile) */}

			<HamburgerButton
				activeAsideNav={activeAsideNav}
				setActiveAsideNav={setActiveAsideNav}
			/>
		</>
	);
};
