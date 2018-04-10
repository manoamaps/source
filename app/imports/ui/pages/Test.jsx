import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
 /*


    map1: Normal Student Parking
    map2: Everywhere Parking
    map3: Night Pass
 */
export default class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            time: {
                0: '12:00AM', 1: '1:00AM', 2: '2:00AM', 3: '3:00AM',
                4: '4:00AM', 5: '5:00AM', 6: '6:00AM', 7: '7:00AM',
                8: '8:00AM', 9: '9:00AM', 10: '10:00AM', 11: '11:00AM',
                12: '12:00PM', 13: '1:00PM', 14: '2:00PM', 15: '3:00PM',
                16: '4:00PM', 17: '5:00 PM', 18: '6:00PM', 19: '7:00PM',
                20: '8:00PM', 21: '9:00PM', 22: '10:00PM', 23: '11:00PM',

            },
        };

    }
    // TODO: I don't think we need this.
    returnTime(key) {
        return (this.state.time[key]);
    }

    render() {
        // const containerStyle = {
        //     position: 'relative',
        // const imageStyle = {
        //     position: 'absoulte',
        // };
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column>
                        <p>Roley</p>
                        <h1>{this.state.time[this.state.value]}</h1>
                    </Grid.Column>
                    <Grid.Column>
                        {/* TODO: Set min width/height of map so it doesnt mess up when screen gets small.. */}
                        <div className="map-container">
                        <Image size="huge" src="/images/map.gif"/>
                        <Image className="map-image" size="huge" src="/images/map1.gif"/>
                        <Image className="map-image" size="huge" src="/images/map2.gif"/>
                        </div>
                        <InputRange
                            maxValue = {24}
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
