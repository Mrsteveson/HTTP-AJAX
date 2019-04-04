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
    constructor(props){
        super(props);
        this.state = {
            editFormActive: false,
        }

    }

    // toggleForm = () => {
    //     this.setState ({
    //         editFormActive: !this.state.editFormActive
    //     })
    // }

    render() {
        return(
            <FriendCont>
                <FriendDetails onClick = {() => this.props.updateFriend(this.props.friend)}>
                    <FriendTitle>{this.props.friend.name}</FriendTitle>
                    <FriendP><DetailSpan>Age: </DetailSpan>{this.props.friend.age}</FriendP>
                    <FriendP><DetailSpan>Email: </DetailSpan>{this.props.friend.email}</FriendP>
                </FriendDetails>
                <DeleteBtn onClick = {() => this.props.deleteFriend(this.props.friend.id)}>x</DeleteBtn>
            </FriendCont>
        )
    }
}

export default Friend;