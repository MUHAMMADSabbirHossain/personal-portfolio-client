import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
const Portfolio = ({ portfolio }) => {
    const {project_img_main, project_name, technology, live_link, git_client}= portfolio;
    return (
        <div className="portfolio-area">
            <div className="portfolio-card">
                <div className="portfolio-img">
                    <img src={project_img_main} alt="" />
                </div>
                <div className="portfolio-info">
                    <h2>{project_name}</h2>
                    <h5>Technology : </h5>
                    <p>{technology}</p>
                    <div className="card-footer">
                        <a href={live_link}>Live</a>
                        <a href={git_client}>Code</a>
                        <Link to="/">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;