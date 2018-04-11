import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
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
            currentMap: 1,
        };
    }
    updateValue(i) {
        this.setState({ value: i });
    }

    render() {
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column>
                        {/* TODO: Change these buttons to pictures of parking passes */}
                        <Button onClick={() => { this.setCurrentMap(1); }}>Student Pass</Button>
                        <Button onClick={() => { this.setCurrentMap(2); }}>Faculty Pass</Button>
                        <Button onClick={() => { this.setCurrentMap(3); }}>Night Pass</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Map time={this.state.value}/>
                        <InputRange
                            maxValue = {23} // Since 0 is 12:00AM
                            minValue = {0}
                            value = {this.state.value}
                            onChange = {value => this.setState({ value })}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Test;
