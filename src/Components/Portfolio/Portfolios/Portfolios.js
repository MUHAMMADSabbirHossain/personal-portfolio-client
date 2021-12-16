import React, { useEffect, useState } from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import Portfolio from '../Portfolio/Portfolio';
import './Portfolios.css';

const Portfolios = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(()=>{
        fetch("https://sleepy-falls-18007.herokuapp.com/portfolio")
        .then(res => res.json())
        .then(data => setPortfolios(data));
    },[]);
    return (
        <div className="portfolio-section">
            <Menubar />
           <div className="portfolios-area">
                <h1 data-aos="fade-down" 
                data-aos-easing="linear" 
                data-aos-duration="1500"><span>My</span> Portfolio</h1>
                    <div className="portfolios-container">
                    {
                      portfolios.map(portfolio => <Portfolio
                        key={portfolio._id}
                        portfolio={portfolio}
                        />)  
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolios;