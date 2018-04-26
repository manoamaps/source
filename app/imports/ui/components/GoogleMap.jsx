import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends Component {
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11,
      };

    render() {
        const style = {
            width: '100vw',
            height: '100vh',
        };
        return (
            <div style={style}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: ['AIzaSyCP_BFT1dJV1G3dMcU0KB_wNnixlSBl9E8'] }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            />
            </div>
        );
    }
}
