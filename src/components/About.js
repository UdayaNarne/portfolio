import React from 'react';
// import './root.css'
import styles from './about.module.css';
export default function About(){
    return(
        <>
            <div style={{marginTop:"200px",paddingTop:"100px",backgroundColor:"#61028d",color:"white",paddingBottom:"100px"}}>
                <div className={styles.flex}>
                    {/* <img src="../images/aboutme.jpeg" alt="about me" style={{width:"50px" , height:"50px"}}/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" style={{marginRight:"5px",paddingRight:"0px"}} class="bi bi-person-exclamation" viewBox="0 0 16 16">
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                    </svg>
                    <p style={{marginLeft:"10px",fontSize:"36px",fontWeight:"800"}}>ABOUT ME</p>
                </div>
                
                <div className="mt-5 p-5 pt-0">
                    <p className={styles.ptext}>
                        Hii, I'm Udaya Narne, a passionate <span style={{fontWeight:"bold"}}>competitive programmer</span> with a solid foundation in C++ and and a deep interest in <span style={{fontWeight:"bold"}}>Data Structures and Algorithms.</span>
                    </p>
                    <p className={styles.ptext}>
                    I actively solve problems on platforms like LeetCode, where I have a rating of 1560, constantly sharpening my problem-solving skills and algorithmic thinking.      
                    I enjoy building clean, interactive web applications using HTML and React, and I'm always eager to learn new tools that improve the user experience and performance.
                    </p>
                    <p className={styles.ptext}> 
                    Whether it's optimizing algorithms or creating dynamic UIs, I love bringing ideas to life through code.
                        I often find me solving  problems on competitive programming platforms.
                    </p>
                </div>
            </div>
        </>
    )
}