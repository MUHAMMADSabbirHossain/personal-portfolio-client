import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import meOne from '../../../resource/me-3-1.png'
import './About.css';

const About = () => {
    return (
        <div className="about-section" style={{backgroundColor:"#212428"}}>
            <Menubar />
            <div className="about-container">
            <div className="about-img">
                <img data-aos="zoom-in" data-aos-duration="2000" src={meOne} alt="" />
            </div>
                <div className="about-info">
                    <h1 data-aos="fade-down" 
                    data-aos-easing="linear" 
                    data-aos-duration="1500"><span>About</span> Me</h1>
                    <p data-aos="fade-up"
                    data-aos-duration="2000">Hi, This is <span>Md. Samiul Islam</span>. A passionate <span>MERN</span> stack web developer from Bangladesh. Recently I have completed my course. There are I'm making some web application projects those are made by using: js, react js, react-router-dom, Firebase, nodejs, express js, MongoDB, and another tools and technology.Also I'm skilled in Front End technologies such as Html5 , Css3 , JavaScript , React , BootStrap, Material UI, and Back End technologies such as Node.JS, Express JS and MongoDb. I'm very much curious for knowing about web development, programming, and new growing technology.</p>
                    </div>
           
            <div data-aos="fade-up"
                    data-aos-duration="2000" className="social-area">
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