import React from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';

class MyCard extends React.Component {
    
 
   
    render(){
      
    return (
       <div>
<Card>
<CardBody body inverse style={{ 
            backgroundColor: 'lightgrey', 
            border: '4px double blue',
            marginLeft:'35%',
            marginRight:'35%',
            marginTop: '2%',
            marginBottom: '2%',
            paddingTop: '1%',
            paddingBottom: '1%',
            boxShadow: '5px 10px',

            }}>
           <CardImg src={this.props.userProps.avatar_url} />
            <CardText>
           <div>
           Name: {this.props.userProps.name}
           </div>

           <div>
               Location: {this.props.userProps.location}
           </div>

           <div>
               Login: {this.props.userProps.login}
           </div>
           </CardText>
           </CardBody>
           </Card>

       </div>
    )}
}

//card text and card img not doing anything at this point

export default MyCard;

