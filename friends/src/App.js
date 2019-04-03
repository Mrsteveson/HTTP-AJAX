import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
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
      <AppContainer>
        <FriendsList 
          friendsData={this.state.friendsData}
        />
      </AppContainer>
    );
  }
}

export default App;
