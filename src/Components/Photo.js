import React from 'react';
import { Card, CardImg } from 'reactstrap';
import './Galery.scss';

const Photo = ({ item }) => {
	const { file } = item;
	return (
		<div
			className="photo-wrapper"
			style={{
				backgroundImage: `url(${file})`,
			}}
		>
			<Card />
		</div>
	);
};

export default Photo;
