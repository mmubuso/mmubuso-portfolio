import React, { Component } from 'react'
import Carousel from '../../components/Carousel/Caro';
import Card from '../../components/Card/Card';
import './Projects.css';



export default class Projects extends Component {
    state = {
        projects: [
            {
                title: "Simon",
                image: "./images/simon.gif",
                alt: "simon game",
                text: "For this project I created the game Simon using Javascript, HTML and CSS. The game presented the challenge of working with asynchronous programming to allow our application to create a delay in between each pattern. Having never worked with javascript in an asynchronous manner gave me the opportunity to learn, stumble but eventually succeed",
                technology: "Languages --> HTML, CSS3, JavaScript \nLibraries --> jQuery, sweetalerts, and bootstrap",
                github: "https://github.com/mmubuso/Simon-Game",
                deployed: "https://fervent-murdock-35e87e.netlify.com"
            },
            {
                title: "Trillo",
                image: "./images/trillo.gif",
                alt: "Trello website gif",
                text: "Using the Mehn stack I created a clone of the popular project management website Trello. This project pushed me to learn about client side request using the fetch api in order to update my database and keep all my information updated.",
                technology: `Backend --> Express, Mongoose, NodeJs\n Frontend --> Bootstrap 4, JavaScript, Handlebars, CSS
                APIs - Fetch API, Drag and Drop API`,
                github: "https://github.com/mmubuso/trillo-clone-project",
                deployed: "https://shrouded-plains-30762.herokuapp.com/accounts"
            },
            {
                title: "Face Recognition Application",
                image: "./images/face-api.gif",
                alt: "face recognition software",
                text: " fun and interactive web application that uses facial recgonition technology and emojis to show the users emotions. The available emotions are ",
                technology: `Frontend --> JavaScript, CSS, HTML, React
                \nBackend --> Node.js, Face-Api`,
                github: "https://github.com/mmubuso/30-Day-30-Applications-Challenge",
                deployed: "https://face-api-emojis.herokuapp.com/"
            },
            {
                title: "Chatter App",
                image: "./images/chatter.gif",
                alt: "chatter application",
                text: "Created a fully functional chat application using React.js, Express, MongoDB, Mongoose, Node.js and Socket.io. The most challenging part of this project was integrating socket.io into a fullstack mern application because there was a lack of examples using socket.io in a mern application. The solution I came up with arose from my understanding of the react component life cycle and the socket.io documentation. It took me 43 different tries before I was able to accomplish my goal. ",
                technology: `Backend --> Express, Mongoose, NodeJs, Socket.io 
                \nFrontend --> Bootstrap 4, JavaScript, React.js, Socket.io-client,CSS3`,
                github: "https://github.com/mmubuso/chatter-project",
                deployed: "https://chatter-project.herokuapp.com/"
            },
            {
                title: "SEI-Chatbot",
                image: "./images/chatbot.gif",
                alt: "chatbot",
                text: "I created this chatbot to assist upcoming general assembly students with finding information on Software Engineering topic they struggle with. Using a chatbot interface the user can ask the bot to either test or explain a topic to them. I created the chatbot using Facebooks Wit.ai with a node.js backend.  ",
                technology: `Backend --> Express, Mongoose, NodeJs, Wit, AI 
                \nFrontend --> Bootstrap 4, JavaScript, React.js, Wit,AI, Create React flips`,
                github: "https://github.com/mmubuso/SEI-Chatbot",
                deployed: "https://sei-chatbot.herokuapp.com/"
            }     
        ]
    }
    render() {
        let cards = this.state.projects.map((item,index) => {
            return(
                <Card 
                    key={index}
                    title={item.title}
                    image={item.image}
                    alt={item.alt}
                    text={item.text}
                    technology={item.technology}
                    github={item.github}
                    deployed={item.deployed}
                />
            )
        })
        return (
            <div className="projects">
                <h2 className="projects-header">Projects</h2>
                <p>I am constantly working on projects in order to sharpen my skillset and these are some of the projects I've created in the last 3 months</p>
                <Carousel className='carousel' />
                <h2>Deployed Apps</h2>
                <div className="card-container">
                    {cards}
                </div>
            </div>
        )
    }
}
