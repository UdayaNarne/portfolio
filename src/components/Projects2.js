import React from 'react';
import projectdata from './projectdata.json';
import styles from "./Projects.module.css";
import { useState } from 'react';
export default function Projects(){
    const [state,setState]=useState({src:"/images/snakegame.png",alt:"snakegame"});
    function handleHover(e){
        const alt=e.target.alt;
        const src=e.target.src;
        setState({src,alt});
    }
    function handleClick(e){

    }
    return(
        <>
            <div className="mt-5">
                <h1 style={{marginLeft:"10px"}}>PROJECTS</h1>
                <div className={styles.mainscreen}>
                    <div className={`${styles.subscreen1} ${styles["glitter-border"]}`}>
                        {console.log(state)}
                        <img src={state.src} alt={state.alt}/>
                    </div>
                    <div className={styles.subscreen2}>
                        {projectdata.map((project,index)=>{
                            return(
                                <>
                                <img src={project.image} alt={project.alt} onMouseOver={handleHover} onClick={handleClick} data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${index}`}/>
                                <div className="modal fade" id={`staticBackdrop-${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel-${index}`} aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id={`staticBackdropLabel-${index}`} style={{fontWeight:"bold"}} >{project.name}</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div style={{fontWeight:"bold"}}>
                                                    <i>{project.techstack}</i>
                                                </div>
                                                {project.description.map((desc)=>{
                                                    return(
                                                        <ul>
                                                            <li>{desc}</li>
                                                        </ul>
                                                    )
                                                })}
                                                {project.code && <p><span style={{fontWeight:"bold"}}>Code:</span> <a style={{color:"blue"}} href={project.code} target="_blank">{project.code}</a></p>}
                                                {project['frontend-link'] && <p><span style={{fontWeight:"bold"}}>Frontend:</span> <a style={{color:"blue"}} href={project['frontend-link']} target="_blank" >{project['frontend-link']}</a></p>}
                                                {project["backend-link"] && <p><span style={{fontWeight:"bold"}}>Backend:</span> <a style={{color:"blue"}} href={project["backend-link"]} target="_blank" >{project["backend-link"]}</a></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}