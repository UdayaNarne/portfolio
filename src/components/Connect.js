import React,{useState} from "react";
import styles from "./Connect.module.css";
export default function Connect() {
  //const [state,setState]=useState("");
  function handleClick(e){
    const state = e.target.getAttribute("name");
    //setState(e.target.name);
    if(state==="github"){
      window.location.href="https://github.com/UdayaNarne"
    }
    else if(state==="linkedin"){
      window.location.href="https://www.linkedin.com/in/udaya-sree-narne-48372526b/";
    }
  }
  return (
    <>
    <div style={{paddingTop:"100px", paddingBottom:"200px",backgroundColor:"#61028d",color:"white"}}>
      <div style={{display:"flex",paddingLeft:"30px",marginRight:"0px",paddingRight:"0px"}}>
      {/* <img src="../images/chat.png" alt="Connect Icons" style={{width:"60px",height:"50px"}}/> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" style={{marginRight:"5px",paddingRight:"0px"}} class="bi bi-chat-dots" viewBox="0 0 16 16">
        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
      </svg>
      <p style={{marginLeft:"10px",fontSize:"36px",fontWeight:"800"}}>CONNECT ME ON</p>
      </div>
      
      <div className="d-flex icons" style={{paddingLeft:"50px",display:"flex", flexWrap:"wrap"}}>
        <div style={{width:"100px",height:"100px",marginRight:"20px",padding:"0px 15px 15px 15px"}}>
          <a href="https://github.com/UdayaNarne" target="_blank" style={{ display: "inline-block" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className={`bi bi-github ${styles.zoom}`} viewBox="0 0 16 16" style={{padding:"15px"}} name="github">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
          <h5 style={{textAlign:"center",width:"100px",fontWeight:"bold"}}>Github</h5>
          </a>
        </div>
        <div style={{width:"100px",height:"100px",padding:"0px 15px 15px 15px",marginRight:"20px"}}>
          <a href="https://www.linkedin.com/in/udaya-sree-narne-48372526b/" target="_blank" style={{ display: "inline-block"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className={`bi bi-linkedin ${styles.zoom}`} viewBox="0 0 16 16" name="linkedin" style={{padding:"15px"}}>
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146 v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
          <h5 style={{textAlign:"center",width:"100px",fontWeight:"bold"}}>Linkedin</h5>
          </a>
        </div>
        <div style={{width:"100px",height:"100px",padding:"0px 15px 15px 15px",marginRight:"20px"}}>
          <a href="mailto:udayanarne1221@gmail.com">
            {/* <img src="../images/email.png" alt="Email icon" className={styles.zoom}/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
              <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
              <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
            </svg>
            <h5 style={{textAlign:"center",width:"100px",fontWeight:"bold"}}>Email</h5>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
