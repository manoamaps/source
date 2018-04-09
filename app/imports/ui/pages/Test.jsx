import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

 /*


    map1: Faculty Pass
    map2: Student Pass
    map3: Night Pass
 */
export default class componentName extends Component {
    render() {
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column>
                        <p>Roley</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Image className="map" size="huge bordered" src="/images/map.gif"/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
