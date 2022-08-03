import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import Menubar from '../../Shared/Menubar/Menubar';
import Portfolio from '../Portfolio/Portfolio';
import './Portfolios.css';

const Portfolios = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        fetch("https://sleepy-falls-18007.herokuapp.com/portfolio")
        .then(res => res.json())
        .then(data => {
            setPortfolios(data);
            setLoading(false);
        
        });
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
            :<div className="portfolio-section">
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
            </div>}
        </>
    );
};

export default Portfolios;