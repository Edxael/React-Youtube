import React, { Component } from 'react';
import './style.css';
import tpic1 from './IMG/title1.png';
import tpic2 from './IMG/sg1.png';
import tpic3 from './IMG/sg2.png';


class TBar extends Component{
    render(){
        return(
                <div className="Top Trans" >
                    <img className="side-img-top-l" src={tpic2} alt="y la foto??" />
                    <img className="top-title" src={tpic1} alt="y la foto??" />
                    <img className="side-img-top-r" src={tpic3} alt="y la foto??" />
                </div>
        )
    }
}

export default TBar;
