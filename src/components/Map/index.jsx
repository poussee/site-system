import React from 'react';
import { Map } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';

const defaultCenter = { lat: -23.482777365733014, lng: -46.77427577636617 };

export default function GoogleMaps() {
	return (
		<Map
			provider={osm}
			height={280}
			defaultCenter={[-23.482777365733014, -46.77427577636617]}
			defaultZoom={16}
		/>
	);
}
