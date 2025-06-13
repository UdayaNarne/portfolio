import React,{useState} from 'react';
import "./Navbar.css";
import Sidebar from "./Sidebar"
import {Link} from 'react-router-dom';

export default function Navbar(){
     const [state,setState]=useState("");
    //const item=useSelector((state)=>state.item);
    console.log(item);
    function onClickHandler(e){
        let val=e.target.id;
        setState(val);
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg" style={{position:"fixed",top:"0",width:"100%",zIndex:"1000", backgroundColor:(state==="about" || state==="profiles" || state==="connect")?"white":"#61028d",color:(state==="about" || state==="profiles" || state==="connect")?"#61028d":"white"}}>  
                <div className="container-fluid">
                        <button type="button" className="sidebar-collapse" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-justify" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </button>

                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {[
                                    {id:"home", name:"Home", href:"#home"},
                                    {id:"about", name:"About", href:"#about"},
                                    {id:"projects", name:"Projects", href:"#projects"},
                                    {id:"profiles", name:"DSA", href:"#profiles"},
                                    {id:"skills", name:"Skills", href:"#skills"},
                                    {id:"connect", name:"Connect", href:"#connect"}
                                ].map((item)=>(
                                    <li className="nav-item" onClick={onClickHandler} key={item.id}>
                                    <a className="nav-link text-white"  href={item.href}>{item.name}</a>
                                </li>
                                ))}

                        </ul>
                        </div>
                </div>
            </nav>
        </>
    )
}
