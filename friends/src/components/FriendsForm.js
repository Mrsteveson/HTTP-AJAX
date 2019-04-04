// import React from 'react';
// import axios from 'axios';

// class FriendsForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name: '',
//             age: 0,
//             email: '',
//         }
//     }

//     componentDidMount = () => {
//         if(this.props.newFriend.name) {
//             this.setState({
//                 name: newFriend.name,
//                 age: newFriend.age,
//                 email: newFriend.email
//             })
//         }
//     }

//     handleChange = event => {
//         this.setState({
//           [event.target.name]: event.target.value,
//         })
//     };

//     handleSubmit = event => {
//         event.preventDefault();

//         if(!this.props.newFriend.name) {

//         }
//     }
// }

// export default FriendsForm;




// App.js route code if i ever get this all refactored
{/* <Route 
          exact path = '/' 
          render = {props => (
            <FriendsList 
              {...props} 
              friendsData={this.state.friendsData} 
              handleChange={this.handleChange}
              deleteFriend={this.deleteFriend}
            />)} 
        /> */}
        {/* <Route
          path = '/friendform/'
          render = {props => (
            <FriendsForm 
              {...props}
              friendsData={this.state.friendsData}
              newFriend={this.state.newFriend} 
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}

            />)} 
        /> */}