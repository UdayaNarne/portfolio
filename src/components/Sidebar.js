import React,{useState} from 'react';
import "./Sidebar.css";

export default function Sidebar(){
    let [state,setState]=useState("");
    function onClickHandler(e){
        let val=e.target.id;
        setState(val);
    }
    return (
        <>
        <div id="sidebar" className="collapse collapse-horizontal" style={{height:"100%",position:"fixed",padding:"60px",zIndex:"999",backgroundColor:(state==="home2" || state==="projects2" || state==="skills2")?"#61028d":"white"}} > 
            <hr/>
            <div className="sidebar-content">
                <ul className="nav nav-pills flex-column mb-3"> 
                    {[
                        {id:"home2", name:"Home", href:"#home"},
                        {id:"about2", name:"About Me", href:"#about"},
                        {id:"projects2", name:"Projects", href:"#projects"},
                        {id:"profiles2", name:"DSA", href:"#profiles"},
                        {id:"skills2", name:"Skills", href:"#skills"},
                        {id:"connect2", name:"Connect", href:"#connect"}
                    ].map((item)=>(
                        <li className="nav-item" key={item.id}>
                            <a href={item.href} id={item.id} style={{color:(state==="home2" || state==="projects2" || state==="skills2")?"white":"#61028d"}} onClick={onClickHandler} className={`nav-link ${(state===item.id)?'active':''}`} >
                                <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"></svg>{item.name}
                            </a>
                        </li>
                    ))}
                </ul> 
            <hr/> 
            </div>
        </div>
    </>
    )
};