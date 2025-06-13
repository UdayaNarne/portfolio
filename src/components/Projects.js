import React from 'react';
import projectdata from './projectdata.json';
import styles from  "./Projects.module.css";
export default function Projects(){
    // const handleClick = () => {
    //     const url = projectdata["frontend-link"];
    //     console.log("Project URL:", url);
    //     if (url) {
    //       window.open(url, "_blank");
    //     } else {
    //       console.error("Project link is not available");
    //     }
    //   }      
    return(
        <>
            <div style={{paddingTop:"100px",paddingBottom:"100px"}}>
                <div className="heading" style={{display:"flex",paddingLeft:"30px"}}>
                    <img src="../images/projectlogo.png" style={{width:"60px",height:"50px"}} alt="project logo"/>
                    <p style={{marginLeft:"10px",fontSize:"36px",fontWeight:"800",color:"#61028d"}}>PROJECTS</p>
                </div>
                <div className="mt-5" style={{paddingLeft:"50px",display:"flex", flexWrap:"wrap",justifyContent:"space-around"}}>
                    {projectdata.map((project,index)=>{
                        return(
                            <div className="mr-5" style={{borderRadius:"50%"}} key={index}>
                                <div className={`card ${styles.zoom} ${styles.coloring}`} style={{display:"flex",flexWrap:"wrap",marginBottom:"30px",height:"300px",width:"300px"}}>
                                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                                        <img src={project.image} alt={project.alt} style={{height:"150px",borderBottom:"5px solid",width:"280px"}} />
                                        <p style={{textAlign:"center",paddingTop:"20px",color:"#61028d",fontWeight:"bold"}}>{project.title}</p>
                                    </div>
                                    <div className="buttons" style={{display:"flex",justifyContent:"space-between"}}> 
                                        <button type="button" className="btn btn-outline-dark"  style={{margin:"0px 30px 30px 30px"}} onClick={()=>{
                                            const url=project["frontend-link"];
                                            const name=project.name;
                                            console.log("Project Name:", name);
                                            if (url!="") {
                                                console.log("Project URL:", );
                                                window.open(url, "_blank");
                                            } else {
                                                console.error("Project link is not available");
                                            }
                                        }}>View</button>
                                        <button type="button"  style={{margin:"0px 30px 30px 30px"}} className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${index}`}>More
                                        </button>
                                    </div>
                                </div>

                                <div className="modal fade" id={`staticBackdrop-${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel-${index}`} aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header" style={{backgroundColor:"#61028d"}}>
                                                <h1 className="modal-title fs-5" id={`staticBackdropLabel-${index}`} style={{fontWeight:"bold",color:"white"}} >{project.name}</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div style={{fontWeight:"bold",color:"#61038d"}}>
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
                                                {project["backendLink"] && <p><span style={{fontWeight:"bold"}}>Backend:</span> <a style={{color:"blue"}} href={project["backend-link"]} target="_blank" >{project["backendLink"]}</a></p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}