import React from "react";

// ?Hamburger Button for Mobile

export const HamburgerButton = ({ setActiveAsideNav, activeAsideNav }) => (
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
);
