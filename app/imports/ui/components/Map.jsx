import React, { Component } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import 'react-input-range/lib/css/index.css';

/**
 * TODO: When Andrew finishes his thing and each item (parking pass) has default constructors,
 * TODO: we will have to have an entire different functoin returnCurrentMap()
 * 
 * I'm thinking it's something along the lines of
 * 
 * returnCurrentMap(pass) {
 *  time = pass.defaultTimes;
 * 
 *  do work
 *  do work
 * }
 */

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            whichMap: 1,
            map: {
                1: 'Student Pass',
                2: 'Faculty Pass',
                3: 'Night Pass',
            },
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
    returnCurrentMap() {
        // If past 4PM, or before 7AM
        if (this.props.time > 15 || this.props.time < 8) {
            return (
                <Image className="map-image" size="huge" src="/images/map2.gif"/>
            );
        }
        return (
            <Image className="map-image" size="huge" src="/images/map1.gif"/>
        );
    }

    render() {
        return (
                <div>
                    <Header as="h1" textAlign="center">{this.state.map[this.state.whichMap]}</Header>
                    <Header as="h2" textAlign="center">{this.state.time[this.props.time]}</Header>
                    {/* TODO: Set min width/height of map so it doesnt mess up when screen gets small.. */}
                    <div className="map-container">
                        {this.returnCurrentMap(this.props.time)}
                    </div>
                </div>
        );
    }
}

Map.propTypes = {
    time: PropTypes.number,
};
