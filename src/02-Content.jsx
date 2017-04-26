import React, { Component } from 'react';
import './style.css';
import tpic1 from './IMG/mg2.ico';

class SCon extends Component{
    render(){
        return(
                <div className="con-global">


                    <div className="search-main Trans" >


                        <input type="text" name="fname" className="input" placeholder="Search your VIDS...." />
                        <img className="m-glass" src={tpic1} alt="y la foto??" />
                    </div>

                    <div className="con-main" >

                        <div className="c-l cnt Trans">
                            <p className="con-p">Parte de luna</p>
                        </div>




                        <div className="c-r cnt Trans">
                            <p className="con-p">asdfasdft</p>
                            <p className="con-p">asdfasdft</p>
                            <p className="con-p">asdfasdft</p>
                            <p className="con-p">asdfasdft</p>
                            <p className="con-p">asdfasdft</p>
                        </div>

                    </div>

                </div>
        )
    }
}

export default SCon;
