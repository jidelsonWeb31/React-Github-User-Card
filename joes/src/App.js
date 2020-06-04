import React from 'react';
import './App.css';
// import axios from 'axios';

// import Card from './components/Card';

// const url = 'https://api.github.com/users/jidelson/repos'
// const followers = 'https://api.github.com/users/jidelson/repos/followers'

class App extends React.Component {
state= {
  users: [],
  followers: []
}

async componentDidMount(){
  const url ='https://api.github.com/users/jidelson';
  const response = await fetch(url);
  const data = await response.json();
  this.setState({
    ...this.state,
    users:data
  })
  console.log(data.name);
}

render(){
  return(
    <div>
      <div>
        {this.state.users.name}
      </div>
      <p>test</p>
    </div>
  )
}
};

export default App;
