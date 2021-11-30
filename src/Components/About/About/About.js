import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import meOne from '../../../resource/me-3-1.png'
import './About.css';

const About = () => {
    return (
        <div className="about-area">
            <Menubar />
            <div className="about-container">
            <div className="about-img">
                <img src={meOne} alt="" />
            </div>
                <div className="about-info">
                    <h1><span>About</span> Me</h1>
                    <p>Hi, This is <span>Md. Samiul Islam</span>. A passionate MERN stack web developer from Bangladesh. Recently I have completed my course. There are I'm making some web application projects those are made by using: js, react js, react-router-dom, Firebase, nodejs, express js, MongoDB, and also tools and technology. I'm very much curious for knowing about web development, programming, and new growing technology.</p>
                </div>
           
            <div className="social-area">
                <h2>Know More <span>About Me</span></h2>
                <div className="social-icon">
                    <a title="Facebook" href="https://www.facebook.com/simplysamiul" target="_blank"><i className="fab fa-facebook-square"></i></a>
                    <a title="Linkdin" href="https://www.linkedin.com/in/simplysamiul/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a title="Github" href="https://github.com/simplysamiul" target="_blank"><i className="fab fa-github-square"></i></a>
                    <a title="My Cv" href="https://drive.google.com/file/d/19-HP3Q5QgdovGvShip89WuMYIi9dsyfF/view?usp=sharing" target="_blank"><i className="far fa-file-alt"></i></a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;