import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const ControlsRadioSlide = ({
	radioActive,
	setRadioActive,
	arrowBack,
	arrowNext
}) => {
	return (
		<div className="controls">
			<BsChevronLeft
				className="controls__arrow"
				onClick={() => arrowBack(radioActive)}
			/>
			<button
				className={`controls__btn ${
					radioActive === 0 && "controls__btn-active"
				}`}
				onClick={() => setRadioActive(0)}
			></button>
			<button
				className={`controls__btn ${
					radioActive === 1 && "controls__btn-active"
				}`}
				onClick={() => setRadioActive(1)}
			></button>
			<button
				className={`controls__btn ${
					radioActive === 2 && "controls__btn-active"
				}`}
				onClick={() => setRadioActive(2)}
			></button>
			<BsChevronRight
				className="controls__arrow"
				onClick={() => arrowNext(radioActive)}
			/>
		</div>
	);
};
