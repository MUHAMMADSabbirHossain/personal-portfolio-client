import { Button } from '@mui/material';
import React from 'react';
import { Link} from 'react-router-dom';
import './Portfolio.css';
const Portfolio = ({ portfolio }) => {
    const {project_img_main, project_name, technology, live_link, git_client, _id}= portfolio;
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" data-aos-duration="4000" data-aos-delay="300" className="portfolio-area">
            <div className="portfolio-card">
                <div className="portfolio-img">
                    <img src={project_img_main} alt="" />
                </div>
                <div className="portfolio-info">
                    <h2>{project_name}</h2>
                    <h5>Technology : </h5>
                    <p>{technology}</p>
                    <div className="card-footer">
                        <a className="see-button" href={live_link}>Live</a>
                        <a className="see-button" href={git_client}>Code</a>
                        <Link to={`/portfolio/${_id}`}><Button className="see-button">Details</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;