import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';

const defaultCenter = { lat: -23.482777365733014, lng: -46.77427577636617 };
const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
	withGoogleMap((props) => (
		<GoogleMap
			defaultZoom={15}
			defaultCenter={defaultCenter}
			defaultOptions={defaultOptions}
		>
			<Marker position={defaultCenter} />
		</GoogleMap>
	))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '280px' };
const mapElementStyle = { height: '100%' };

export default function GoogleMaps() {
	return (
		<RegularMap
			googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZEE1EPxsFi7KxTddlHh2U6NzK-ruTMtM"
			loadingElement={<div style={loadingElementStyle} />}
			containerElement={<div style={containerElementStyle} />}
			mapElement={<div style={mapElementStyle} />}
		/>
	);
}
