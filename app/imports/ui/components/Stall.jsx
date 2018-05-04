import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button, Grid, Popup } from 'semantic-ui-react'

const style={
    
    position: 'relative', 
    color: 'white',
    background: 'red',
    height: 25, 
    width: 25, 
    top: -20, 
    left: -30,    
};

export default class Stall extends Component {
    render() {
        return (
            <div>
            <Popup wide trigger={<Button color="green"content='Open Stall' />} on='click'>
              <Grid divided columns='equal'>
                <Grid.Column>
                  <Popup
                    trigger={<Button color='blue' content='Reserve Stall' fluid onClick={console.log("oh hi mark")}/>}
                    position='top center'
                    size='tiny'
                    inverted
                  />
                </Grid.Column>
                <Grid.Column>
                  <Popup
                    trigger={<Button color='red' content='Red Pill' fluid />}
                    position='top center'
                    size='tiny'
                    inverted
                  />
                </Grid.Column>
              </Grid>
            </Popup>
            </div>
        )
    }
};


Stall.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
};
