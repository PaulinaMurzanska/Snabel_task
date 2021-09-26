import React from 'react';
import axios from 'axios';

const baseURL = 'https://eventkiosk.snabel.pl/api/v1/events/';
const withEvents = (WrappedComponent) => {
	return class extends React.Component {
		state = {
			eventsToDisplay: [],
			errorMessage: false,
		};

		fetchEventsData = async () => {
			try {
				const response = await axios.get(baseURL, {
					headers: {
						Authorization:
							`Token ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,

					},
				});
				const data = response.data.results;
				const events = data.map((item) => ({
					id: item.event_id,
					category: item.category,
					title: item.title,
					startDate: Date.parse(item.date_start),
					endDate: Date.parse(item.date_end),
					description: item.description,
					status: item.status,
					media: item.eventmedia,
					tickets: item.tickets,
				}));
				const today = new Date();
				const currentEvents = events.filter(
					(item) => new Date(item.endDate) > today
				);
				const currentEventsActive = currentEvents.filter(
					(item) => item.status === 'active'
				);
				this.setState({
					eventsToDisplay: currentEventsActive,
				});
			} catch (error) {
				this.setState({ errorMessage: true })
			}
		};

		render() {
			console.log(this.state.currentEventsActive);
			return (
				<WrappedComponent
					{...this.state}
					{...this.props}
					fetchEventsData={this.fetchEventsData}
					eventsToDisplay={this.state.eventsToDisplay}
					errorMessage={this.state.errorMessage}
				/>
			);
		}
	};
};
export default withEvents;
