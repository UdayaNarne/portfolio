import React from 'react';
// import leetcode from "/images/leetcode.png";
// import codechef from "/images/codechef.png";
// import codeforces from "/images/codeforces.png";
// import gfg from "/images/gfg.jpeg";
// import hackerrank from "/images/hackerrank.png";
import styles from "../components/DSA.module.css";
import { useState } from 'react';

export default function DSA(){
    const [state,setState]=useState("");
    function handleClick(e){
        const target=e.target.alt;
        setState(target);
        let url="";
        if(target==="leetcode"){
            url="https://leetcode.com/u/udayanarne1221/"
        }
        else if(target==="codechef"){
            url="https://www.codechef.com/users/udaya_08"
        }
        else if(target==="codeforces"){
            url="https://codeforces.com/profile/udaya_narne"
        }
        else if(target==="gfg"){
            // window.location.href="https://auth.geeksforgeeks.org/user/udayanarne1221/profile";
            url="https://www.geeksforgeeks.org/user/21131abz93/"        
        }
        else if(target==="hackerrank"){
            url="https://www.hackerrank.com/profile/udayasreenarne11"
        }
        window.open(url,"_blank");
        
    }
    return(
        <div className={styles.profiles} style={{paddingTop:"100px", backgroundColor:"#61028d",color:"white",paddingBottom:"100px"}}>
            <div style={{display:"flex",paddingLeft:"14px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="white" class="bi bi-code-slash" viewBox="0 0 16 16" style={{ marginRight: '5px',marginLeft: '15px' ,fontWeight: '800'}}>
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                </svg>
                <p style={{marginLeft:"10px",fontSize:"36px",fontWeight:"800"}} >CODING PROFILES</p>
            </div>
            
            <div className={styles.image}>
                <div className={styles.codes}>
                <img src="../images/leetcode.png" className={styles.zoom} alt="leetcode" onClick={handleClick}/>
                <h5 style={{textAlign:"center",fontWeight:"bold"}}>Leetcode</h5>
                </div>
                <div className={styles.codes}>
                <img src="../images/codechef.png" className={styles.zoom} alt="codechef" onClick={handleClick}/>
                <h5 style={{textAlign:"center",fontWeight:"bold"}}>CodeChef</h5>
                </div>
                <div className={styles.codes}>
                <img src="../images/codeforces.png" className={styles.zoom} alt="codeforces" onClick={handleClick}/>
                <h5 style={{textAlign:"center",fontWeight:"bold"}}>Codeforces</h5>
                </div>
                <div className={styles.codes}>
                <img src="../images/gfg.png" alt="gfg" className={styles.zoom} onClick={handleClick}/>
                <h5 style={{textAlign:"center",fontWeight:"bold"}}>GFG</h5>
                </div>
                <div className={styles.codes}>
                <img src="../images/hackerrank.png" alt="hackerrank" className={styles.zoom} onClick={handleClick}/>
                <h5 style={{textAlign:"center",fontWeight:"bold"}}>Hackerrank</h5>
                </div>
            </div>
            
        </div>
    )
}