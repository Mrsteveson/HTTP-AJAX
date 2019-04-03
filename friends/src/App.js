import React from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
    }
  }
  
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
          // console.log(response);
          this.setState({ friendsData: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <FriendsList 
          friendsData={this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;
