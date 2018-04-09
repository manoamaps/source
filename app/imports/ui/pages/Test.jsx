import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
 /*


    map1: Faculty Pass
    map2: Student Pass
    map3: Night Pass
 */
export default class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            time: {
                0: '12:00AM', 1: '12:30AM', 2: '1:00AM', 3: '1:30AM',
                4: '2:00AM', 5: '2:30AM', 6: '3:00AM',
            },
        };

    }
    returnTime(key) {
        return (this.state.time[key]);
    }

    render() {
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column>
                        <p>Roley</p>
                        <h1>{this.state.time[this.state.value]}</h1>
                    </Grid.Column>
                    <Grid.Column>
                        {/* TODO: Set min width/height of map so it doesnt mess up when screen gets small.. */}
                        <Image className="map" size="huge" bordered src="/images/map.gif"/>
                        <InputRange
                            maxValue = {48}
                            minValue = {0}
                            value = {this.state.value}
                            onChange = {
                                value => this.setState({ value })}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
