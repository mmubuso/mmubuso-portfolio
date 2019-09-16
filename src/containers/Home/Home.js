import React, { Component } from 'react'
import './Home.css'
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import AboutMeInfo from '../../components/AboutMeInfo/AboutMeInfo';

export default class AboutMe extends Component {

    state ={
        
    }

    render() {
        return (
            <div className='col-sm-12 container home row justify-content-center'>
                <ProfilePicture/>
                <AboutMeInfo />
            </div>
        )
    }
}
