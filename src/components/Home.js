import React from 'react';
// import image from '../images/handwave.gif';
import styles from './Home.module.css'; 
export default function Home(){
    return(
        <div className={styles.container} style={{paddingTop:"100px",paddingBottom:"100px"}} >
            <div className={styles.left}>
                <img className="border-none" style={{width:"100px",height:"100px",marginTop:"100px"}} src="/images/handwave.gif" alt="HandWave"/>
                <h1 style={{fontWeight:"1000",fontSize:"3rem"}}>I'm</h1>
                <h1 style={{fontWeight:"1000",color:""}}>Udaya Narne</h1>
                <div className="p-5 pt-3">
                <p style={{fontWeight:"1000",color:"#61028d"}}>-DSA and DEV</p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.profileContainer}>
                        
                </div>
            </div>
            
        </div>
    )
} 