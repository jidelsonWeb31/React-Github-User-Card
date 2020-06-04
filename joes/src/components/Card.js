import React from 'react';
// import data from './data';

class Card extends React.Component {
    
 
   
    render(){
      
    return (
       <div>
           <img src={this.props.userProps.avatar_url} />

           <div>
           Name: {this.props.userProps.name}
           </div>
       </div>
    )}
}

export default Card;

