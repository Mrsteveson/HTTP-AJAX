import React from 'react';
import axios from 'axios';
// import {Route, Link } from 'react-router-dom';

import FriendsList from './components/FriendsList';
// import FriendsForm from './components/FriendsForm';
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
      },

      blankFriend: {
        name: '',
        age: '',
        email: '',
      },
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
      [event.target.name]: event.target.value,
    })
  };

  addFriend = data => {
    const blankFriend = this.state.blankFriend;

    axios
      .post('http://localhost:5000/friends', data)
      .then(response => {
        console.log(response);
        this.setState({
          friendsData: response.data, friend: blankFriend
        })
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
  
  updateFriend = (data, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, data)
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
        <form>
          <h1>My Friends List!</h1>
          <input 
            type = 'text'
            placeholder = 'Enter Name'
            name = 'friend'
            value = {this.state.friend.name}
            onChange = {this.handleChange}
          />
          <input 
            type = 'text'
            placeholder = 'Enter Age'
            name = 'friend'
            value = {this.state.friend.age}
            onChange = {this.handleChange}
          />
          <input 
            type = 'text'
            placeholder = 'Enter Email'
            name = 'friend'
            value = {this.state.friend.email}
            onChange = {this.handleChange}
          />
          <button onClick = {this.addFriend}>Add Friend</button>
        </form>
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
