import React, { useState, useEffect } from 'react';
import cloud1 from './modalimg/cloud1.png';
import cloud2 from './modalimg/cloud2.png';
import cloud3 from './modalimg/cloud3.png';
import cloud4 from './modalimg/cloud4.png';
import cloud5 from './modalimg/cloud5.png';
import styles from "./Clouds.module.css";

const clouds = [cloud1, cloud2, cloud3, cloud4, cloud5];
const {innerWidth, innerHeight} = window; //화면 크기 구하기

function Cloudflake(props){
    const [hover, setHover] = useState('');
    function mousehover(e) {
        console.log(hover);
        setHover(true);
    }
    const r = Math.floor(Math.random() * 5);
    const rw = Math.random() * (300 - 200) + 200;
    const rh = Math.random() * (300 - 200) + 200;
    console.log(props.id)
    return(
        <div style={{ position:'absolute', 
            left:Math.random() * (innerWidth - 100) + 'px',
            top:Math.random() * (innerHeight - 100) + 'px',
            zIndex:100}}>
            <img src={clouds[r]} className={
                0 <= props.id < 4 ? styles.cloud1 :
                4 <= props.id < 8 ? styles.cloud2 :
                styles.cloud3
                }
             
            />
        </div>
    )
}
function Clouds(){
    const arr = Array.from('111111111111');

    
    /*function makeclouds(){
        var arr = []
        
        var cloud = React.createElement("img", {src:cloud1});
        var a = React.createElement("div",{ position:'absolute', 
        left:Math.random() * (innerWidth - 100) + 'px',
        top:Math.random() * (innerHeight - 100) + 'px'}, [cloud]);
        for (var i = 0; i < 5;i++){
            arr.push(a);
        }
        return(arr);
    }
    */
    return(
        <div>
            {
                arr.map((el, i) =>{
                    return(<Cloudflake id={i}/>)
                })
            } 
        </div>
    )
}

export default Clouds;