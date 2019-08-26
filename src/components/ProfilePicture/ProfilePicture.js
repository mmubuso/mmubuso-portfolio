import React from 'react';
import './ProfilePicture.css';

export default function ProfilePicture() {
    return (
        <div className='my-4 col-xs-8'>
            <div className='my-4 profile-picture'>
                <img
                    src={require('../../lib/images/profile-photo.jpg')}
                    alt='good looking african american male. wearing a stripped shirt'
                />
            </div>
        </div>
    )
}
