import React from 'react'
import './App.css';

function IssuePage({info}) {
    return (
        <div className="details">
            <h2>Profile</h2>
            <img src={`${info.user.avatar_url}`} alt="image"/>
            <h5>user_ID : {info.user.id}</h5>
            <h5>user login name: {info.user.login}</h5>
            <h5>git profile: {info.user.html_url}</h5>
            <p>{info.body}</p>
            <h5>Created At : {info.created_at}</h5>
            <h5>Updated At : {info.updated_at}</h5>
        </div>
    )
}

export default IssuePage;