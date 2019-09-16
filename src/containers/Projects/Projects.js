import React, { Component } from 'react'
import Carousel from '../../components/Carousel/Caro';
import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h2>Projects</h2>
                <Carousel className='carousel'/>
            </div>
        )
    }
}
