import React, { useState } from "react";

import { Header } from "./sections/Header";
import { MainLaptopCard } from "./sections/MainLaptopCard";
import { ControlsRadioSlide } from "./sections/ControlsRadioSlide";
import { Background } from "./sections/Background";

import "../styles/app.scss";
import "../styles/tablet.scss";
import "../styles/mobile.scss";

function App() {
	const [radioActive, setRadioActive] = useState(0);

	// ?Functions Next and Back for the arrows controls.
	const arrowNext = (id) => {
		if (id < 2) setRadioActive(id + 1);
	};

	const arrowBack = (id) => {
		if (id > 0) setRadioActive(id - 1);
	};

	// ?Images Laptop
	const laptops = [
		{
			id: 1,
			image: "./images/matebook.png"
		},
		{
			id: 2,
			image: "./images/matebook-2.png"
		},
		{
			id: 3,
			image: "./images/matebook-7.png"
		}
	];

	return (
		<>
			<Header />

			{/* Main */}

			<MainLaptopCard laptops={laptops} radioActive={radioActive} />

			{/* controls-slide */}

			<ControlsRadioSlide
				radioActive={radioActive}
				setRadioActive={setRadioActive}
				arrowBack={arrowBack}
				arrowNext={arrowNext}
			/>

			{/* background */}

			<Background />
		</>
	);
}

export default App;
