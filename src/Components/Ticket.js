import React from 'react';
import {
	Card,
	Button,
	CardHeader,
	CardBody,
	CardTitle,
} from 'reactstrap';

const Ticket = ({ ticket }) => {
	const { name, cost, tickets_num, sell_end, sell_start } = ticket;
	const sellStopMillisec = Date.parse(sell_end);
	const today = Date.now();

	const ticketsHeaderInfoCheck = tickets_num > 0 && sellStopMillisec > today;
	const ticketsHeaderInfo = ticketsHeaderInfoCheck
		? `Bilety dostępne w ilości ${tickets_num}`
		: 'Przepraszamy, bilety nie są dostępne';

	return (
		<Card>
			<CardHeader>{ticketsHeaderInfo}</CardHeader>
			<CardBody>
				<CardTitle tag="h6">
					{name} w cenie {cost} zł.
				</CardTitle>
				<Button>Zarezerwuj</Button>
			</CardBody>
		</Card>
	);
};

export default Ticket;
