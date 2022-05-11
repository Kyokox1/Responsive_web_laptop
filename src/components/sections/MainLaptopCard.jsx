import React from "react";

export const MainLaptopCard = ({ laptops, radioActive }) => {
	return (
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
						src={laptops[radioActive].image}
						alt="Laptop"
					/>
				</div>
			</section>
		</main>
	);
};
