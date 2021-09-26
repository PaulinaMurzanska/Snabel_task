import React from 'react';
import { Link } from 'react-router-dom';
import Ticket from './Ticket';
import './Tickets.scss';
import { Button } from 'reactstrap';

const Tickets = ({ eventForTicketsDisplay }) => {
	const { title, tickets, description, media } = eventForTicketsDisplay;
	const cleanText = description.replace(/<\/?[^>]+(>|$)/g, '');

	return (
		<React.Fragment>
			<Link to="/">
				<Button className="back-btn">Powrót do listy wydarzeń</Button>
			</Link>
			<div className="tickets-wrapper">
				<h4>Bilety na wydarzenie {title}</h4>
				<p>
					Wybierz interesującą Cię opcję spośród {tickets.length}
					dostępnych.
				</p>
				<div className="card-wrapper">
					{tickets.map((ticket, index) => (
						<Ticket ticket={ticket} key={index} />
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Tickets;
