import React, {useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
} from 'reactstrap';
import './Galery.scss';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Galery = ({ eventForGaleryDisplay}) => {

	const items = eventForGaleryDisplay.media;
	const eventTitle = eventForGaleryDisplay.title;

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex =
			activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.file}
			>
				<div
					style={{
						backgroundImage: `url(${item.file})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						width: '100%',
						height: '385px',
						borderRadius: '8px',
					}}
				></div>
			</CarouselItem>
		);
	});

	return (
		<React.Fragment>
			
			<Link to="/">
				<Button className="back-btn">Powrót do listy wydarzeń</Button>
			</Link>
			<div className="event-title"> {eventTitle}</div>
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={goToIndex}
				/>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={next}
				/>
			</Carousel>
		</React.Fragment>
	);
};

export default Galery;
