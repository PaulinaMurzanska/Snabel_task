import { Button } from 'reactstrap';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import photo from '../media/photo-1517457373958-b7bdd4587205.webp';


const EventCard = ({ event, handleTickets, handleGalery }) => {
	const {
		id,
		title,
		description,
		endDate,
		startDate,
		media,
		category,
	} = event;
	const cleanText1 = description.replace(/<\/?[^>]+(>|$)/gi, '');
	const cleanText = cleanText1.replace(/&oacute;/g, 'ó');
	const starts = moment(startDate).format('lll');
	const ends = moment(endDate).format('lll');

	const photoToDsiplay = event.media[0];

	const photoToCard = photoToDsiplay === undefined ? photo : photoToDsiplay.file

	return (
		<>
			<div>
				<Card>
					<CardBody>
						<CardTitle tag="h5">{title} </CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							id:{id} kategoria: {category}
						</CardSubtitle>
						<CardSubtitle tag="h6" className="dates">
							rospoczęcie:{starts} zakończenie: {ends}
						</CardSubtitle>
					</CardBody>
					<div className="photo-wrapper"
						style={{
							backgroundImage: `url(${photoToCard})`,
							width: "100%",
							height: "250px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}>


					</div>
					<CardBody>
						<CardText>{cleanText}</CardText>
						<div className="links">
							<Link to="/bilety">
								<Button id={id} onClick={handleTickets}>
									bilety
								</Button>
							</Link>
							{media.length !== 0 && (
								<Link to="/galeria">
									<Button id={id} onClick={handleGalery}>
										galeria
									</Button>
								</Link>
							)}
							{media.length === 0 && (
								<p class="no-pic-info">
									brak zdjęć dla tego wydarzenia
								</p>
							)}
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default EventCard;
