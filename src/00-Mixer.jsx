import React, { Component } from 'react';
import './style.css';
import TBar from './01-Top-Bar.jsx';
import SCon from './02-Content.jsx';
import PBot from './03-Bottom.jsx';

class Comp_01 extends Component{
    render(){
        return(
            <div className="m-container">

                    <TBar />

                    <SCon />

                    <PBot />

            </div>
        )
    }
}

export default Comp_01;
