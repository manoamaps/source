import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import Map from '../components/Map.jsx';
/*

    map1: Normal Student Parking
    map2: Everywhere Parking
    map3: Night Pass
*/
class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column>
                        <Map time={this.state.value} />
                    </Grid.Column>
                    <Grid.Column>
                        <InputRange
                            maxValue = {24}
                            minValue = {0}
                            value = {this.state.value}
                            onChange = {
                                // TODO-DONE: Setup proper react, so that we update a component, instead of having it all in one page/.jsx
                                value => this.setState({ value })
                            }
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Test;