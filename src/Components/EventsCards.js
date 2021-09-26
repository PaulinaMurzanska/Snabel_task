import React, { useState } from 'react';
import EventCard from './EventCard';
import './Events.scss';
import Option from './Option';

const EventsCards = ({ eventsToDisplay, handleTickets, handleGalery, eventForGaleryDisplay }) => {
	const categories = eventsToDisplay.map((item) => item.category);
	const categoriesUnique = [...new Set(categories)];
	const [selectedCategory, setSelectedCategory] = useState(0);
	const filteredEvents = eventsToDisplay.filter(
		(event) => event.category === selectedCategory
	);

	const eventsToDisplay2 =
		selectedCategory === 0 ? eventsToDisplay : filteredEvents;
	const initialValue = 0;

	return (
		<React.Fragment>
			<div className="events-wrapper">
				<div className="sort-section">
					<select
						onChange={(e) =>
							setSelectedCategory(parseInt(e.target.value))
						}
					>
						<option value={initialValue}>Sortuj wg kategorii</option>
						{categoriesUnique.map((item, index) => (
							<Option item={item} key={index} />
						))}
					</select>
					<button className="reset" onClick={e => setSelectedCategory(0)}>resetuj kategorie</button>
				</div>
				{eventsToDisplay2.map((event, index) => (
					<EventCard
						key={index}
						event={event}
						handleTickets={handleTickets}
						handleGalery={handleGalery}
						eventForGaleryDisplay={eventForGaleryDisplay}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default EventsCards;
