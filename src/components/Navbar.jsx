import React,{useState,useContext} from 'react';
import {ItemContext} from '../context/itemContext';
import "./Navbar.css";
import Sidebar from "./Sidebar"
import {Link} from 'react-router-dom';

export default function Navbar(){
    // const dispatch=useDispatch();
    // const item=useSelector((state)=>state.item);
    // const onChange=(e)=>{
    //     const clickid=e.target.dataset.name2;
    //     dispatch(setItem(clickid));
    //     console.log("Clicked ID:",clickid);
    // }
    // console.log("Navabaer item",item);
    const {setItem}=useContext(ItemContext);
    console.log("Navbar Item from Context:",setItem);
    const onChange=(e)=>{
        const clickedId = e.target.dataset.name2;
        setItem(clickedId.replace("2","1"));
        console.log("Clicked ID:",clickedId);
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg" style={{position:"fixed",top:"0",width:"100%",zIndex:"1000", backgroundColor:"#61028d",color:"white"}}>  
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
                                    {id:"home", name:"Home",name2:"home", href:"#home"},
                                    {id:"about", name:"About",name2:"about",href:"#about"},
                                    {id:"projects", name:"Projects",name2:"projects",href:"#projects"},
                                    {id:"profiles", name:"DSA",name2:"profiles",href:"#profiles"},
                                    {id:"skills", name:"Skills",name2:"skills",href:"#skills"},
                                    {id:"connect", name:"Connect",name2:"connect",href:"#connect"}
                                ].map((val)=>(
                                    <li className="nav-item"  key={val.id}>
                                    <a className="nav-link text-white" onClick={onChange} data-name2={val.name2} href={val.href} >{val.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                </div>
            </nav>
        </>
    )
}
