import React,{useState} from 'react';
import "./Sidebar.css";
import { useSelector,useDispatch} from 'react-redux';
import { setItem } from '../state/action-creators';

export default function Sidebar(){
    const obj=useSelector(state=>state.item);
    console.log("Sidebar Item from Redux:",obj.item);
    let item=obj.item;

    const dispatch=useDispatch();
    const onChange = (e) => {
        const clickedId = e.target.id;
        dispatch(setItem(clickedId.replace("2", ""))); // converts "projects2" to "projects"
    };
    const obj2=useSelector(state=>state.item);
    item=obj2.item;
    console.log("Updated Sidebar Item:",item);


    //console.log("Sidebar Item:",item);
    //let [state,setState]=useState("");
    // function onClickHandler(e){
    //     let val=e.target.id;
    //     setState(val);
    // }
    //const highlightBg = ["home", "projects", "skills"].includes(item) ? "#61028d" : "white";
    const highlightBg = item === "home" ? "#61028d" : item === "projects" ? "#61028d" : item === 'skills' ? "#61028d" : "white";
    const textColor = ["home", "projects", "skills"].includes(item) ? "white" : "#61028d";
    console.log("Highlight Background:",highlightBg);
    return (
        <>
        <div id="sidebar" className="collapse collapse-horizontal" style={{height:"100%",position:"fixed",padding:"60px",zIndex:"999",backgroundColor:highlightBg}} > 
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
                    ].map((it)=>(
                        <li className="nav-item" key={it.id}>
                            <a href={it.href} style={{color:textColor}} id={it.id} onClick={onChange} className={`nav-link ${(item+'2'===(it.id))?'active':''}`} >
                                <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"></svg>{it.name}
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