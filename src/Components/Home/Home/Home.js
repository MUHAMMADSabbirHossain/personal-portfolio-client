import React from 'react';
import { Link } from 'react-router-dom';
import Menubar from '../../Shared/Menubar/Menubar';
import meimg from '../../../resource/me.jpeg';
import TypeWriterEffect from 'react-typewriter-effect';


import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Menubar />
            <div className="home-info">
            <img src={meimg} alt="" />
            <h1>Hi, I'm <span>Md.Samiul Islam</span> </h1>
            <div className="text-title">
                <h2>A, </h2>
                <TypeWriterEffect
                        textStyle={{
                        fontFamily: 'Roboto Condensed',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '40px',
                        }}
                        startDelay={2000}
                        cursorColor='#fff'
                        multiText={[
                        'JavaScript Developer',
                        'React Js Developer',
                        'MERN Stack Developer',
                        'JavaScript Developer',
                        'React Js Developer',
                        'MERN Stack Developer',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={50}
                    />
            </div>
            <div className="contact-button">
                <a className="cv-button" href="https://drive.google.com/file/d/19-HP3Q5QgdovGvShip89WuMYIi9dsyfF/view?usp=sharing" target="_blank"><i className="far fa-file-alt contact-icon"></i> See Cv</a>
                <Link className="contact-btn" to="/contact"><i className="far fa-comments contact-icon"></i> Contact</Link>
            </div>
            </div>
        </div>
    );
};

export default Home;