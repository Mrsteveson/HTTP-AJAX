import React from 'react';
import axios from 'axios';
// import {Route, Link } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import styled from 'styled-components';


const AppContainer = styled.div `
  text-align: center;
  display: flex;
  justify-content: center;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: {
        name: '',
        age: '',
        email: '',
      }
    }
  }
  
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
          console.log(response);
          this.setState({ friendsData: response.data })
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      friend: {...this.state.friend, [event.target.name]: event.target.value }
    })
  };

  addFriend = person => {
    axios
      .post('http://localhost:5000/friends', person)
      .then(() => axios.get('https://localhost:5000/friends'))
        .then(response => {
          console.log(response);
          this.setState({
            friendsData: response.data,
          })
        .catch(err => console.log(err));
        })
      .catch(err => console.log(err));
  }

  deleteFriend = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      console.log(response);
      this.setState({
        friendsData: response.data
      })
    })
    .catch(err => console.log(err));
  }
  
  updateFriend = (person, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, person)
      .then(response => {
        console.log(response);
        this.setState({
          friendsData: response.data
        })
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <AppContainer>
        <h1>My Friends List!</h1>
        <FriendsForm 
          handleChange = {this.handleChange}
          addFriend = {this.addFriend}
          friend = {this.state.friend}
        />
        <FriendsList 
          friendsData = {this.state.friendsData}
          deleteFriend = {this.deleteFriend}
          updateFriend = {this.updateFriend}
        />
      </AppContainer>
    );
  }
}

export default App;
