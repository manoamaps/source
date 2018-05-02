import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import GoogleMap from '../components/GoogleMap.jsx';

export default class Test extends Component {
    render() {
        return (
            <div>
                <Grid container stackable columns={2} id="map-container">
                    <Grid.Column>
                        <div id="ok">
                            <p>Oh hi mark</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <GoogleMap/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

