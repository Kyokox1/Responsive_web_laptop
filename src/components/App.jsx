import React, { useState } from "react";

import logo from "../../public/images/logo.svg";
import cart from "../../public/images/cart.svg";

import "../styles/app.scss";
import "../styles/tablet.scss";
import "../styles/mobile.scss";

function App() {
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
			<main>
				<section className="card">
					<section className="card__body">
						<div className="card__description">
							<h1>Laptop for the future</h1>
							<p>
								The new 14 inch bezeless display oferring a 4k display with
								touch screen.
							</p>
						</div>
						<div className="card__btns">
							<button className="card__btn ">14 Inch</button>
							<button className="card__btn card__btn-pink">
								Add To Cart
							</button>
						</div>
					</section>
					<div className="card__laptop">
						<img
							className="card__laptop-img"
							src="./images/matebook.png"
							alt="Laptop"
						/>
					</div>
				</section>
			</main>

			{/* controls-slide */}
			<div className="controls">
				<img src="./images/arrow-left.svg" alt="controls" />
				<img src="./images/dot.svg" alt="controls" />
				<img src="./images/dot-full.svg" alt="controls" />
				<img src="./images/dot-full.svg" alt="controls" />
				<img src="./images/arrow-right.svg" alt="controls" />
			</div>

			{/* Hambrguer-button */}

			<button
				onClick={() => setActiveAsideNav(!activeAsideNav)}
				className={`hamburger hamburger--vortex ${
					activeAsideNav && "is-active"
				}`}
				type="button"
			>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>

			{/* background */}
			<img
				className="big__eclipse"
				src="./images/big-eclipse.svg"
				alt="background"
			/>
			<img
				className="mid__eclipse"
				src="./images/mid-eclipse.svg"
				alt="background"
			/>
			<img
				className="small__eclipse"
				src="./images/small-eclipse.svg"
				alt="background"
			/>
		</>
	);
}

export default App;
