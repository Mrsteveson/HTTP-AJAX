import React from 'react';

class FriendsForm extends React.Component {
  // constructor(props){
  //     super(props);  
  // }

  render() {
    return(
      <div>
        {/*Add Friend  */}
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

        {/* Edit Friend */}
        <form>
          <input 
            type = 'text'
            placeholder = 'Name'
            name = 'name'
            value = {this.props.newFriend.name}
            onChange = {this.props.handleUpdate}
          />

          <input 
            type = 'text'
            placeholder = 'Age'
            name = 'age'
            value = {this.props.newFriend.age}
            onChange = {this.props.handleUpdate}
          />

          <input 
            type = 'text'
            placeholder = 'Email'
            name = 'email'
            value = {this.props.newFriend.email}
            onChange = {this.props.handleUpdate}
          />

          <input 
            type = 'text'
            placeholder = 'id #'
            name = 'id'
            value = {this.props.newFriend.id}
            onChange = {this.props.handleUpdate}
          />
          <button onClick = {() => this.props.updateFriend(this.props.newFriend.id, this.props.newFriend)}>Update</button>  
      </form>
    </div>
    )
  }
}

export default FriendsForm;