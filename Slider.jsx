import React from "react";
import { useState } from "react";

import MainGallery from "./MainGallery";
import BottomGallery from "./BottomGallery";

import styles from "./slider.module.scss";

const Slider = (props) => {
	const { slides } = props; // SliderDtat with src and alt attributes. The ammount of slides depends on this array of objects.

	const [activeSlide, setActiveSlide] = useState([]); //set the data-number of clicked slide on mini gallery

	const [displaySlide, setDisplaySlide] = useState(false); // true when some tail slide in mini gallery is cllicked, false when the close btn is clicked

	const slideSetter = (index) => {
		// taking the value from data-number
		setActiveSlide(index);
	};

	return (
		<>
			<div className={styles.slider}>
				{/*if we click on the BottomGallery slide, we change the value and display the MainGallery with particular slide open*/}
				{displaySlide ? (
					<div>
						<MainGallery
							slides={slides}
							activeSlide={activeSlide}
							onSetDisplaySlide={setDisplaySlide}
							displaySlide
							onSetActiveSlide={slideSetter}
						/>
					</div>
				) : null}

				<div>
					<BottomGallery
						slides={slides}
						onSetActiveSlide={slideSetter}
						onSetDisplaySlide={setDisplaySlide}
					/>
				</div>
			</div>
		</>
	);
};

export default Slider;
