import React from "react";

import styles from "./bottom.module.scss";

const BottomGallery = ({ onSetActiveSlide, onSetDisplaySlide, ...props }) => {
	const { slides } = props;

	const getIndex = (e) => {
		onSetActiveSlide(+e.target?.dataset.number);
	}; // taking data-number and lift the value up

	const handleDisplay = () => {
		onSetDisplaySlide(true);
	}; // changing the displaySlide "true" -  next, lift the value up to main component. This value is handed over to MainSlider and if "true" - open the main gallery with slide number equal to data-number lifted up from "onSetActiveSlide" from above

	return (
		<div className={styles.bottom__wrapper}>
			{slides.map((slide, index) => {
				return (
					<div
						className={styles.bottom__img_box}
						key={index}
						onClick={handleDisplay}
					>
						<img
							src={slide.src}
							alt={slide.alt}
							loading="lazy"
							data-number={index}
							onClick={getIndex}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default BottomGallery;
