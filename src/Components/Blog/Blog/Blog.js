import React from 'react';
import { PulseLoader } from 'react-spinners';
import Menubar from '../../Shared/Menubar/Menubar';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Menubar />
            <h1 style={{textAlign:"center", color: "white"}}>Blog Will be coming soon <PulseLoader color={"white"}  /></h1>
        </div>
    );
};

export default Blog;