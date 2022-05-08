import React from "react";

import logo from "../../public/images/logo.svg"
import cart from "../../public/images/cart.svg"

import "../styles/app.scss"

function App() {
	return <>
		<header>
			<div className="logo" >
				<a href="/"  className="logo__link" >
					<img src={logo} alt="logo" />
					<p>Three Dots</p>
				</a>
			</div>
			<nav className="navbar" >
				<ul className="navbar__links" >
					<li> <a href="/" className="navbar__link" >Specs	</a> </li>
					<li> <a href="/" className="navbar__link" >Products	</a> </li>
					<li> <a href="/" className="navbar__link" >Contact	</a> </li>
				</ul>
			</nav>
			<div className="cart" >
				<img  className="cart__img" src={cart} alt="cart" />
			</div>
		</header>
	</>;
}

export default App;
