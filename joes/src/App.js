import React from 'react';
import './App.css';


import Card from './components/Card';
import axios from 'axios';

const url = 'https://api.github.com/users/jidelson'
const followers = 'https://api.github.com/users/jidelson/followers'

class App extends React.Component {


constructor(){
  super();
this.state = {
  users: [],
  followers: []
}
}

componentDidMount(){
  console.log("cDM is fetching data...")


  axios.get(url)
  .then(res => {
    console.log(res);
    this.setState({
     
      users:res.data
    })
   
  })
  .catch (err => {
    console.log(err)
  })



  axios.get(followers)
  .then(res => {
    console.log(res);
    this.setState({
     
      followers:res.data
    })
   
  })
  .catch (err => {
    console.log(err)
  })

}

render(){
  
  return(
    <div>
      <div>
      
      <Card 
      userProps={this.state.users}
      />
      </div>
     
    </div>
  )
}
};

export default App;
