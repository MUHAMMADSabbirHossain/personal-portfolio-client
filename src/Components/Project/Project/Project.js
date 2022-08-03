import React from 'react';
import { PulseLoader } from 'react-spinners';
import Menubar from '../../Shared/Menubar/Menubar';
import './Project.css';

const Project = () => {
    return (
        <div>
            <Menubar />
            <h1 style={{textAlign:"center", color : "white"}}>Project will be coming soon <PulseLoader color={"white"}  /></h1>
        </div>
    );
};

export default Project;