import React from "react";
import horse from '../images/horse.png'
import './style/styie.css';
function Dashboard(){
    return (
        <div className="dashboard">
            <div className="container">
            <div className="color-block blue">
                    <div className="blocktext">
                        <h3>Views</h3>
                        <h1>721K</h1>
                    </div>                    
                </div>
                <div className="color-block gray">
                    <div className="blocktext">
                        <h3>Views</h3>
                        <h1>721K</h1>
                    </div>    
                </div> 
                <div className="color-block blue">
                    <div className="blocktext">
                        <h3>Views</h3>
                        <h1>721K</h1>
                    </div>
                </div>
                <div className="color-block gray">
                    <div className="blocktext">
                        <h3>Views</h3>
                        <h1>721K</h1>
                    </div>    
                </div> 
            </div>
                
        </div>
    );
}

export default Dashboard;
