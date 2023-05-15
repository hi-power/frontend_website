import React from "react";
import {Link} from "react-router-dom";
import './../style/styie.css';
import './Sidebar.css';
import kill from "../img/kill.jpeg"; 
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillSmile } from "react-icons/ai";
import styled from "styled-components";
import { BsPieChart } from "react-icons/bs";
import { BiFolder, BiBookOpen, BiShoppingBag } from "react-icons/bi";
import { TbBrandWechat, TbNotebook } from "react-icons/tb";
import { FaPeopleArrows, FaUser } from "react-icons/fa";
import { MdSwitchAccount} from "react-icons/md";

const Account = styled.div`
    display: flex;
    text-align: center;
    flex-wrap: nowrap;
    align-items: center;
`;
const Favorite = styled.div`
    text-align: center;
    justify-content: center;
    div{
        display: flex;
        flow-wrap: nowrap;
        p{
            margin: 4px;
            font-size:12px;
        }
        ul{
            margin:0;
            padding: 0;
            margin-left:20px;
        }
    }
`;

function Sidebar(){
    return (
        <div className="left-column">            
            <Account>
                <img src="https://wikimediafoundation.org/zh/wp-content/uploads/sites/22/2018/05/cropped-wikimedia-logo_black-svg-2.png" 
                alt="headphoto" className="headphoto"></img>
                <p>Willy</p>
            </Account>
            <Favorite>
                <di>
                    <p></p>
                    <p></p>
                </di>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </Favorite>
            <AiFillCaretRight/>Dashboard
                <div className="Dsb">
                <ul>
                    <li><Link to="/"><AiFillSmile/>Default </Link></li>
                    <li><Link to="/Settings"><AiFillSmile/>eCommerce</Link></li>
                    <li><Link to="/Visuallizations"><AiFillSmile/>Projectse</Link></li>
                    <li><Link to="/note"><AiFillSmile/>OnlineCourses</Link></li>
                </ul>
                    
                </div>
            
            </div>
            /*
        <div>
            
        </div>*/
    );
}

export default Sidebar;
