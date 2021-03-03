import React, { Component } from 'react'

export default class ProfileHeader extends Component {

    render() {
    const username = this.props.username;
        return (
            <li style={{padding:'0px',margin:'0px',position:'relative',width:'100%'}} className="profile-header">
                <div className="lii">{username}</div>
         
            </li>
        )
    }
}
