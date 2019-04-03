import React from 'react';

class Friend extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className = 'friendContainer'>
            <div>
            <h1>{this.props.friend.name}</h1>
                <p><span>Age: </span>{this.props.friend.age}</p>
                <p><span>Email: </span>{this.props.friend.email}</p>
            </div>
                <button >x</button>
            </div>
        )
    }
}

export default Friend;