import React from 'react'
import Envelope from '../../lib/images/envelope.svg';
import Facebook from '../../lib/images/facebook-black-social-button-circle.svg';
import Linkedin from '../../lib/images/linkedin.svg';
import Twitter from '../../lib/images/twitter-logo-in-circular-black-button.svg';
import Github from '../../lib/images/github-logo.svg'
import LocationSign from '../../lib/images/location-sign.svg';
import MobilePhone from '../../lib/images/mobile-phone.svg';
import './AboutMeInfo.css'

// Contact information 

export default function AboutMeInfo() {
    return (
        <div className=''>
            <h2>Musiteli Mubuso</h2>
            <p className='lead'>Software Engineer</p>
            <p>
                <img src={Envelope}
                    className='icon-tag'
                    alt='envelope' /> mubuso.musiteli@gmail.com
                </p>
            <p>
                <img src={MobilePhone}
                    className='icon-tag'
                    alt='phone' /> 678 895 3203</p>
            <p>
                <img src={LocationSign}
                    className='icon-tag'
                    alt='gps sign' /> Greater Atlanta Area</p>
            {/* Social Media presence  */}
            <p className='icon-rows'>
                <a href='https://twitter.com/CallMeMrMubuso'
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={Twitter}
                        className='icon-tag'
                        alt='twitter bird' />
                </a>
                <a href='https://www.linkedin.com/in/musiteli-mubuso/'
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={Linkedin}
                        className='icon-tag'
                        alt='linkedin sign' />
                </a>
                <a href='https://www.facebook.com/profile.php?id=100011099793324'
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={Facebook}
                        className='icon-tag'
                        alt='facebook sign' />
                </a>
                <a href='https://github.com/mmubuso'
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={Github}
                        className='icon-tag'
                        alt='Github cat' />
                </a>
            </p>
        </div>
    )
}
