import React, { Component } from 'react'
import './Home.css'
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import AboutMeInfo from '../../components/AboutMeInfo/AboutMeInfo';

export default class AboutMe extends Component {

    state ={
        
    }

    render() {
        return (
            <div className='col-xs-12 container about-me row justify-content-center'>
                <ProfilePicture/>
                <AboutMeInfo />
            </div>
        )
    }
}
