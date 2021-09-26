import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Galery from './Galery';
import EventsCards from './EventsCards';
import Tickets from './Tickets';
import withEvents from './WithEvents';
import Error from './Error';


const Events = ({ eventsToDisplay, fetchEventsData, errorMessage }) => {

	const [eventId, setEventId] = useState(undefined);

	useEffect(() => {
		fetchEventsData();
	}, [eventsToDisplay]);

	const handleTickets = (e) => {
		const ticketId = parseInt(e.target.id);
		setEventId(ticketId);
	};
	const handleGalery = (e) => {
		const galeryId = parseInt(e.target.id);
		setEventId(galeryId);
	};

	const initialEvent = eventsToDisplay[0];
	const selectedEvent = eventsToDisplay.find((obj) => obj.id === eventId);
	const eventForTicketsDisplay =
		eventId === undefined ? initialEvent : selectedEvent;

	const initialEventForGalery = eventsToDisplay.find(
		(obj) => obj.media.length > 0
	);
	const selectedEventForGalery = eventsToDisplay.find(
		(obj) => obj.media.length > 0 && obj.id === eventId
	);
	const eventForGaleryDisplay =
		eventId === undefined ? initialEventForGalery : selectedEventForGalery;

	return (

		<BrowserRouter>
			{
				errorMessage === true && <Error />
			}
			{
				errorMessage === false &&
				<Switch>
					<Route exact path="/">
						<EventsCards
							eventsToDisplay={eventsToDisplay}
							handleTickets={handleTickets}
							handleGalery={handleGalery}
							eventForGaleryDisplay={eventForGaleryDisplay}
						/>
					</Route>
					<Route path="/bilety">
						<Tickets eventForTicketsDisplay={eventForTicketsDisplay} />
					</Route>
					<Route path="/galeria">
						<Galery eventForGaleryDisplay={eventForGaleryDisplay} />
					</Route>
				</Switch>
			}
		</BrowserRouter>
	);
};

export default withEvents(Events);
