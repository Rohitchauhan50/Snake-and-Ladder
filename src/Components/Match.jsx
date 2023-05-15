import React from 'react'
import './Game.css';
import { useState } from 'react';
import $ from 'jquery'

export default function Match(props) {
  const [immg,setimg] = useState('/Images/Player-1.png')
  var pos = 5;
  var start = 0
  const [arr,setArr]=useState(document.getElementsByTagName('td'))

  const temp = () => {
    var output = parseInt(Math.random()*100%6+1)
    if(output !==6 && start !== 6){
      document.getElementsByClassName("players")[0].innerHTML = "start is "+start+" ";
      document.getElementsByClassName("players")[0].innerHTML += "output is "+output+" ";
      return "";
    }
    
    start = 6;
    
    if((pos>10 && pos<21) || (pos>30 && pos< 41) || (pos>50 && pos<61) || (pos>70 && pos<81) || (pos>90 && pos<100)){
      setimg('/Images/Player1.png')
    }
    else{
      setimg('/Images/Player-1.png')
    }
    
    document.getElementsByClassName("players")[0].innerHTML = "start is "+start+" ";
    document.getElementsByClassName("players")[0].innerHTML += "output is "+output+" ";
    // alert("start is "+start+" ","output is "+output+" ")
    // alert("output is "+output+" ")
    
    console.log("before pos is "+pos);
    pos += output;
    console.log("output is "+output);
    console.log("pos is "+pos);
        for(let i=0;i<arr.length;i++){
            if(parseInt(arr[i].innerHTML)===pos){
                $('#im').animate({
                    left: arr[i].offsetLeft+123+"px",
                    top: arr[i].offsetTop+43+"px"
                })
            }
        }
  }

  return(
    <>
    <div className='match'>
    <button id='btn' onClick={temp}>click</button>
    </div>
    </>
  )
}