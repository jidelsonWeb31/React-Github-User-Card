import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Card from './components/Card';

const url = 'https://api.github.com/jidelson/'
const followers = 'https://api.github.com/jidelson/followers'

class App extends React.Component {
  constructor(){
    super();
    console.log("constructor running...");
    this.state = {
      users: [],
      followers: []
    };
  }

  componentDidMount() {
    console.log("cDM is fetching data");
    
     {
      axios.get(url)
      .then(res => {
        this.setState({
          ...this.state,
          users: res
        })
        .catch (err => {
          console.log(err)
        })
      })
    }

    {
      axios.get(followers)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res
        })
        .catch (err => {
          console.log(err)
        })
      })
    }


  }



  render () {
    return(
      <div>
        <Card />
        <p>test</p>
      </div>
    )
  }
};

export default App;
