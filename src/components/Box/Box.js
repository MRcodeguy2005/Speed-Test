import React,{useState,useRef} from "react";
import styles from './style1.module.css';
import { CSSTransition } from "react-transition-group";
export default function Box(){
    const nodeRef = useRef(null);
    const[res,setRes] = useState("0 Kbps");
    const[txt,setTxt] = useState("GO");
    const[view,setView] = useState(false); 
    const[btnstyle,setbtnstyle] = useState(styles.Start_button1);
    var images =[
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/207030301.jpg",
            "size": 49704
        },
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/4835.jpg",
            "size": 106567
        },
        {
            "file":"https://wallpaperaccess.com/full/2472433.jpg",
            "size": 147832
        },
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/5352DC.jpg",
            "size": 529756
        },
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/984605000.jpg",
            "size": 796999
        },
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/9861.jpg",
            "size": 1367480
        },
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/7203.jpg",
            "size": 1979489
        },
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/7202.jpg",
            "size": 2332216
        },
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/7847.jpg",
            "size": 2625339
        },
        {
            "file":"https://www.sefram.com/images/products/photos/hi_res/SP260B.jpg",
            "size": 3633130
        },
    ]
    var global_time;
    //BEFORE SPEED TEST
    function speed(){ 
        
        global_time = new Date().getTime();
        func(0);
    }
    //AFTER SPEEDTEST
    function enable_btn(){
        setTxt("AGAIN");
        setView(false);
        setbtnstyle(styles.Start_button);
    }
    //RECURSION FUNCTION FOR DOWNLOADING IMAGES;
    function func(i){
        let curr_time = new Date().getTime();
        if(curr_time>global_time+10000){
            enable_btn();
            return;
        }
    
        //ALL FILES ARE EXHAUSTED
        if(i===images.length){
            enable_btn();
            return;
        }
    
        var start,end,timeduration;
        start =new Date().getTime();
        let downloadsrc = new Image();
        let cacheimg = "?nn" + start;
        downloadsrc.src = images[i].file + cacheimg //DOWNLOADING THE IMAGE
        downloadsrc.onload = function () {
            end = new Date().getTime();
            timeduration = (end - start)/1000;
            let loadedbites = (images[i].size)*8
            let speed = ((loadedbites/timeduration)/1024/1024).toFixed(2);
            if(speed<1){
                speed = speed*1024;
                setRes(speed +" Kbps");
            }
            else if(speed >=1){
                setRes(speed +" Mbps");
            }
            
            //CALLING THE FUNCTION TO DOWNLOAD THE NEXT IMAGE
            i++;
            func(i);
        }
            
    }
    return(
        <div id="box_container">
            <h1 id="el1">SPEED</h1>
            <h1 id="result">{res}</h1>
            <CSSTransition in={view} nodeRef={nodeRef} timeout={600} classNames="alert">
                <>
                    <div ref={nodeRef} className="container">
                        <button onClick={()=>{
                            speed();
                            setView(true);
                        }} className={btnstyle} > {txt}</button>
                        <span id="ring"></span>
                    </div>
            
                </>

            </CSSTransition>   
        </div>
    )
}