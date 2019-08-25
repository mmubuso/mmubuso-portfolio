import React, { Component } from 'react'
import './AboutMe.css'
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';

export default class AboutMe extends Component {

    state ={
        
    }

    render() {
        return (
            <div className='col-xs-12 container about-me row justify-content-center'>
                <ProfilePicture/>
            </div>
        )
    }
}
