import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import './Portfolio.css';
import dwelling from '../../../resource/portfolio-ss/dwelling.png';
import doctors from '../../../resource/portfolio-ss/doctors.png';
import emaJhon from '../../../resource/portfolio-ss/ema-jhon.png';
import letBegain from '../../../resource/portfolio-ss/let-begain.png';
import clinic from '../../../resource/portfolio-ss/our-clinic.png';
import university from '../../../resource/portfolio-ss/university.png';
import bike from '../../../resource/portfolio-ss/bike.png';

const Portfolio = () => {
    return (
        <div className="portfolio-area">
            <Menubar />
            <div className="portfolio-container">
            <h1><span>My</span> portfolio</h1>
            <div className="cards-container">
                <div className="portfolio-cards">
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <img src={dwelling} alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h1>Dwelling's-Car</h1>
                            <div className="card-bottom">
                            <h5>Technology</h5>
                            <div className="use-technology">
                                <small>React-js</small>
                                <small>Bootstrap</small>
                                <small>Css-3</small>
                                <small>Firebase</small>
                                <small>Node-js</small>
                                <small>Express-js</small>
                                <small>MongoDB</small>
                            </div>
                            <div className="link-button">
                                <a href="https://dwelling-car.web.app/" target="_blank">Live-Site</a>
                                <a href="https://github.com/simplysamiul/dwelling-car-client" target="_blank">Client-Site</a>
                                <a href="https://github.com/simplysamiul/dwelling-car-server" target="_blank">Servr-Site</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <img src={university} alt="" />
                        </div>
                        <div className="portfolio-info">
                        <h1>Global-University</h1>
                        <div className="card-bottom">
                            <h5>Technology</h5>
                            <div className="use-technology">
                                <small>React-js</small>
                                <small>Bootstrap</small>
                                <small>Css-3</small>
                                <small>Firebase</small>
                                <small>Node-js</small>
                                <small>Express-js</small>
                                <small>MongoDB</small>
                            </div>
                            <div className="link-button">
                                <a href="https://global-university-bd.netlify.app/" target="_blank">Live-Site</a>
                                <a href="https://github.com/simplysamiul/global-university" target="_blank">Client-Site</a>
                                <a href="https://github.com/simplysamiul/global-university" target="_blank">Servr-Site</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <img src={emaJhon} alt="" />
                        </div>
                        <div className="portfolio-info">
                        <h1>Ema-Jhon-commerce</h1>
                        <div className="card-bottom">
                            <h5>Technology</h5>
                            <div className="use-technology">
                                <small>React-js</small>
                                <small>Bootstrap</small>
                                <small>Css-3</small>
                                <small>Firebase</small>
                                <small>Node-js</small>
                                <small>Express-js</small>
                                <small>MongoDB</small>
                            </div>
                            <div className="link-button">
                                <a href="https://e-commerce-auth-d6e3c.web.app/" target="_blank">Live-Site</a>
                                <a href="https://github.com/simplysamiul/ema-john-e-commerece" target="_blank">Client-Site</a>
                                <a href="https://github.com/simplysamiul/ema-john-e-commerece" target="_blank">Servr-Site</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <img src={clinic} alt="" />
                        </div>
                        <div className="portfolio-info">
                        <h1>Our-Clinic</h1>
                        <div className="card-bottom">
                            <h5>Technology</h5>
                            <div className="use-technology">
                                <small>React-js</small>
                                <small>Bootstrap</small>
                                <small>Css-3</small>
                                <small>Firebase</small>
                                <small>Node-js</small>
                                <small>Express-js</small>
                                <small>MongoDB</small>
                            </div>
                            <div className="link-button">
                                <a href="https://ours-clinic.web.app/" target="_blank">Live-Site</a>
                                <a href="https://github.com/simplysamiul/our-clinic" target="_blank">Client-Site</a>
                                <a href="https://github.com/simplysamiul/our-clinic" target="_blank">Servr-Site</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <img src={letBegain} alt="" />
                        </div>
                        <div className="portfolio-info">
                        <h1>Let's-Begain</h1>
                        <div className="card-bottom">
                            <h5>Technology</h5>
                            <div className="use-technology">
                                <small>React-js</small>
                                <small>Bootstrap</small>
                                <small>Css-3</small>
                                <small>Firebase</small>
                                <small>Node-js</small>
                                <small>Express-js</small>
                                <small>MongoDB</small>
                            </div>
                            <div className="link-button">
                                <a href="https://let-s-begin-tourism.web.app/" target="_blank">Live-Site</a>
                                <a href="https://github.com/simplysamiul/Let-s-Begain" target="_blank">Client-Site</a>
                                <a href="https://github.com/simplysamiul/Let-s-Begain-Server/tree/main" target="_blank">Servr-Site</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <img src={doctors} alt="" />
                        </div>
                        <div className="portfolio-info">
                        <h1>Doctor's-Portal</h1>
                        <div className="card-bottom">
                            <h5>Technology</h5>
                            <div className="use-technology">
                                <small>React-js</small>
                                <small>Bootstrap</small>
                                <small>Css-3</small>
                                <small>Firebase</small>
                                <small>Node-js</small>
                                <small>Express-js</small>
                                <small>MongoDB</small>
                            </div>
                            <div className="link-button">
                                <a href="https://doctor-s-portal-f328c.web.app/" target="_blank">Live-Site</a>
                                <a href="https://github.com/simplysamiul/doctors-portal-client" target="_blank">Client-Site</a>
                                <a href="https://github.com/simplysamiul/doctors-portal-server" target="_blank">Servr-Site</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-card">
                        <div className="portfolio-img">
                            <img src={bike} alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h1>Latest-Bike</h1>
                            <div className="card-bottom">
                            <h5>Technology</h5>
                            <div className="use-technology">
                                <small>React-js</small>
                                <small>Bootstrap</small>
                                <small>Css-3</small>
                                <small>Firebase</small>
                                <small>Node-js</small>
                                <small>Express-js</small>
                                <small>MongoDB</small>
                            </div>
                            <div className="link-button">
                                <a href="https://2021-biikes-list.netlify.app/" target="_blank">Live-Site</a>
                                <a href="https://github.com/simplysamiul/2021-latest-bikes" target="_blank">Client-Site</a>
                                <a href="https://github.com/simplysamiul/2021-latest-bikes" target="_blank">Servr-Site</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;