import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends Component {
    static defaultProps = {
        center: { lat: 21.298050, lng: -157.817112 },
        zoom: 17,
      };

    render() {
        const style = {
            height: '85vh',
            width: '100%',
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
