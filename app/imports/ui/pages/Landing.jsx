import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

    constructor(props){
        super(props);
        console.log(Meteor.userId());
        console.log(Meteor.user());
    }

  render() {
    return (
        <div className = "header-background">
            <Grid verticalAlign='middle' textAlign='center' container>

                <Grid.Row>
                    <Grid.Column width={4}>
                        <Image size='small' className = "margin-center" circular src="/images/maps-logo.png"/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8} className = "white-text darken-overlay">
                        <h1>Welcome to Manoa Maps</h1>
                        <p>Please create an account</p>
                    </Grid.Column>
                </Grid.Row>





            </Grid>
        </div>
    );
  }
}

export default Landing;
