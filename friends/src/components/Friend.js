import React from 'react';
import styled from 'styled-components';

const DeleteBtn = styled.button `
    border-radius: 50%;
    background-color: crimson;
    margin-bottom: 10px;
    position: relative;
    bottom: 85px;
    right: 50px;
`;

const FriendCont = styled.div `
    background-image: linear-gradient(to right, pink, lightyellow, lightblue);
    border: 3px solid black;
    border-radius: 50%;
    margin: 10px auto;
    width: 45%;
`;

const DetailSpan = styled.span `
    font-weight: bold;
`;

const FriendTitle = styled.h1 `
    text-decoration: underline;
`;

const FriendDetails = styled.div `
    /* border: 1px solid black; */
`;

const FriendP = styled.p `
    font-size: 18px;
`;


class Friend extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return(
            <FriendCont>
                <FriendDetails>
                    <FriendTitle>{this.props.friend.name}</FriendTitle>
                    <FriendP><DetailSpan>Age: </DetailSpan>{this.props.friend.age}</FriendP>
                    <FriendP><DetailSpan>Email: </DetailSpan>{this.props.friend.email}</FriendP>
                </FriendDetails>
                <DeleteBtn onClick = {() => this.props.deleteFriend(this.props.friend.id)}>x</DeleteBtn>
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
                </form>
                <button onClick = {() => this.props.updateFriend(this.props.friend.id, this.props.newFriend)}>Update</button>
            </FriendCont>
        )
    }
}

export default Friend;