import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

export default class TestMap extends Component {
    render() {
        const MyMapComponent = withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8} 
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
            </GoogleMap>
        )
        return (
            <MyMapComponent isMarkerShown />
        );
    }
}

