import React from "react";
import { useState, useRef } from "react";

import styles from "./main.module.scss";

const MainGallery = ({
	activeSlide, // data-number of active slide taken from BottomGallery
	onSetDisplaySlide, // setDisplaySlide()
	displaySlide, // default "false", "true" if the mini slide is clicked by an user
	onSetActiveSlide, // setting the data-number as a value and display correct slide
	...props
}) => {
	const { slides } = props;

	const closeGallery = () => {
		// for close btn
		onSetDisplaySlide(false);
	};

	const nextSlide = () => {
		// for right arrow
		if (activeSlide < slides.length - 1) {
			onSetActiveSlide((prevSlide) => prevSlide + 1);
		} else if (activeSlide === slides.length - 1) {
			onSetActiveSlide(0);
		}
	};

	const prevSlide = () => {
		// for left arrow
		if (activeSlide > 0) {
			onSetActiveSlide((prevSlide) => prevSlide - 1);
		} else if (activeSlide === 0) {
			onSetActiveSlide(slides.length - 1);
		}
	};

	return (
		<div className={styles.main}>
			<div className={styles.main__container}>
				<div className={styles.main__contentbtns_box}>
					<span className={styles.main__closebtn} onClick={closeGallery}>
						X
					</span>

					<span className={styles.main__leftbtn} onClick={prevSlide}>
						&lt;
					</span>

					<span className={styles.main__rightbtn} onClick={nextSlide}>
						&gt;
					</span>

					<span className={styles.main__numbers}>
						{activeSlide + 1 + " / " + slides.length}
					</span>
				</div>

				{slides.map((slide, index) => {
					if (displaySlide === true && index === activeSlide) {
						return (
							<div
								className={
									!displaySlide
										? styles.main__content
										: `${styles.main__content} ${styles.main__content_active}`
								}
								key={index}
								data-number={index}
							>
								<img
									src={slide.srcLarge}
									alt={slide.alt}
									loading="lazy"
									data-number={index}
								/>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default MainGallery;
