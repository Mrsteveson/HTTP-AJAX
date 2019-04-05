import React from 'react';

class FriendsForm extends React.Component {
  // constructor(props){
  //     super(props);  
  // }

  render() {
    return(
      <form>
        <input 
          type = 'text'
          placeholder = 'Enter Name'
          name = 'name'
          value = {this.props.friend.name}
          onChange = {this.props.handleChange}
        />

        <input 
          type = 'text'
          placeholder = 'Enter Age'
          name = 'age'
          value = {this.props.friend.age}
          onChange = {this.props.handleChange}
        />

        <input 
          type = 'text'
          placeholder = 'Enter Email'
          name = 'email'
          value = {this.props.friend.email}
          onChange = {this.props.handleChange}
        />
        <button onClick = {() => this.props.addFriend(this.props.friend)}>Add Friend</button>
      </form>
    )
  }
}

export default FriendsForm;