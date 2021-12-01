import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Menubar from '../../Shared/Menubar/Menubar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MoreDetails.css';

const MoreDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const {git_client, git_server, live_link, project_img_main, project_img_one,project_img_two, project_name, technology, project_des, short_desk } = details;
    useEffect(()=>{
    const url = `https://sleepy-falls-18007.herokuapp.com/portfolio/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setDetails(data))
    },[id]);
    return (
        <div className="details-area">
            <Menubar />
           <div>
               <h1 className="section-title"><span>Project</span> Details</h1>
           <div className="details-container">
            <div className="details-img">
                <Carousel>
                <div>
                    <img src={project_img_main} alt="" />
                </div>
                <div>
                    <img src={project_img_one} alt=""  />
                </div>
                <div>
                    <img src={project_img_two} alt=""  />
                </div>
            </Carousel>
            <div className="project-button">
                <a href={live_link}>Live</a>
                <a href={git_client}>Client</a>
                <a href={git_server}>Serer</a>
            </div>
            </div>
            <div className="details-info">
                <h1>Details</h1>
                <h2>{project_name}</h2>
                <h5>Technology : </h5>
                <p>{technology}</p>
                <h5>More-Details</h5>
                <p>{project_des}</p>
                <ul>
                    <li>{short_desk?.one}</li>
                    <li>{short_desk?.two}</li>
                    <li>{short_desk?.three}</li>
                </ul>
            </div>
            </div> 
           </div>
        </div>
    );
};

export default MoreDetails;