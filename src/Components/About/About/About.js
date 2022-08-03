import React, { useEffect, useState } from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import meOne from '../../../resource/me-3-1.png'
import './About.css';
import { PuffLoader } from 'react-spinners';

const About = () => {
    const [loading, SetLoading] = useState(false);
    useEffect(()=>{
        SetLoading(true);
        setTimeout(() =>{
        SetLoading(false);
        }, 2000);
    },[]);
    return (
        <>
            {loading ?
            <div className="display-loading">
            <PuffLoader
            color={"#ff014f"} 
            loading={loading}
            size={100} />
            </div>
            :<div className="about-section" style={{backgroundColor:"#212428"}}>
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
                        data-aos-duration="1000">Hi, This is <span>Md. Samiul Islam</span>. A passionate <span>MERN</span> stack web and <span>React Native</span> developer from Bangladesh. Now this time I'm working with react js, redux, node js, express js, next js, React Native etc technology. I'm looking to build my career as a software professional. And I always famishing to take on challenges and solve problems.</p>
                        </div>
            
                <div data-aos="fade-up"
                        data-aos-duration="2000" className="social-area">
                    <h2>Know More <span>About Me</span></h2>
                    <div className="social-icon">
                        <a title="Facebook" rel="noreferrer" href="https://www.facebook.com/simplysamiul" target="_blank"><i className="fab fa-facebook-square"></i></a>
                        <a title="Linkdin" rel="noreferrer" href="https://www.linkedin.com/in/simplysamiul/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a title="Github" rel="noreferrer" href="https://github.com/simplysamiul" target="_blank"><i className="fab fa-github-square"></i></a>
                        <a title="My Cv" rel="noreferrer" href="https://drive.google.com/file/d/1HSLIuF7DaZSOl7O5baC7ggGsjFYyqv2f/view" target="_blank"><i className="far fa-file-alt"></i></a>
                    </div>
                </div>
                </div>
            </div>}
        </>
    );
};

export default About;