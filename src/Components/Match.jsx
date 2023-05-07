import React from 'react'
import './Game.css';
import { useState } from 'react';
import $ from 'jquery'

export default function Match(props) {
  const [img1,setimg1] = useState('/Images/Player-1.png')
  const [img2,setimg2] = useState('/Images/Player-2.png')
  let pos = 0;
  let win = false;
  const temp = () => {
    var output = parseInt(Math.random()*100%6+1)
    console.log(output);
    var arr = [];
    arr = document.getElementsByTagName('td');

    pos += output;
    console.log(pos);
    switch(pos){
        // snakes
        case 27: pos = 5;
                $('#im').animate({
                    left: arr[86].offsetLeft+123+"px",
                    top: arr[86].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[94].offsetLeft+123+"px",
                    top: arr[94].offsetTop+43+"px"
                })
                break;

        case 40: pos = 3;
                $('#im').animate({
                    left: arr[70].offsetLeft+123+"px",
                    top: arr[70].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[92].offsetLeft+123+"px",
                    top: arr[92].offsetTop+43+"px"
                })
                break;

        case 43: pos = 18;
                $('#im').animate({
                    left: arr[52].offsetLeft+123+"px",
                    top: arr[52].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[82].offsetLeft+123+"px",
                    top: arr[82].offsetTop+43+"px"
                })
                break;

        case 54: pos = 31;
                $('#im').animate({
                    left: arr[46].offsetLeft+123+"px",
                    top: arr[46].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[69].offsetLeft+123+"px",
                    top: arr[69].offsetTop+43+"px"
                })
                break;

        case 66: pos = 45;
                $('#im').animate({
                    left: arr[35].offsetLeft+123+"px",
                    top: arr[35].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[54].offsetLeft+123+"px",
                    top: arr[54].offsetTop+43+"px"
                })
                break;

        case 76: pos = 42;
                $('#im').animate({
                    left: arr[24].offsetLeft+123+"px",
                    top: arr[24].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[42].offsetLeft+123+"px",
                    top: arr[42].offsetTop+43+"px"
                })
                break;
        case 89: pos = 53;
                $('#im').animate({
                    left: arr[18].offsetLeft+123+"px",
                    top: arr[18].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[47].offsetLeft+123+"px",
                    top: arr[47].offsetTop+43+"px"
                })
                break;
        case 99: pos = 41;
                $('#im').animate({
                    left: arr[1].offsetLeft+123+"px",
                    top: arr[1].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[50].offsetLeft+123+"px",
                    top: arr[50].offsetTop+43+"px"
                })
                break;

        // ladder

        case 4: pos = 25;
                $('#im').animate({
                    left: arr[93].offsetLeft+123+"px",
                    top: arr[93].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[74].offsetLeft+123+"px",
                    top: arr[74].offsetTop+43+"px"
                })
                break;

        case 13: pos = 46;
                $('#im').animate({
                    left: arr[87].offsetLeft+123+"px",
                    top: arr[87].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[55].offsetLeft+123+"px",
                    top: arr[55].offsetTop+43+"px"
                })
                break;
                
        case 33: pos = 49; 
                $('#im').animate({
                    left: arr[67].offsetLeft+123+"px",
                    top: arr[67].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[58].offsetLeft+123+"px",
                    top: arr[58].offsetTop+43+"px"
                })
                break;
                
        case 42: pos = 63;
                $('#im').animate({
                    left: arr[52].offsetLeft+123+"px",
                    top: arr[52].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[32].offsetLeft+123+"px",
                    top: arr[32].offsetTop+43+"px"
                })
                break;
                
        case 50: pos = 69;
                $('#im').animate({
                    left: arr[59].offsetLeft+123+"px",
                    top: arr[59].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[38].offsetLeft+123+"px",
                    top: arr[38].offsetTop+43+"px"
                })
                break;
                
        case 62: pos =  89;
                $('#im').animate({
                    left: arr[32].offsetLeft+123+"px",
                    top: arr[32].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[10].offsetLeft+123+"px",
                    top: arr[10].offsetTop+43+"px"
                })
                break;
                
        case 74: pos =  92;
                $('#im').animate({
                    left: arr[26].offsetLeft+123+"px",
                    top: arr[26].offsetTop+43+"px"
                })
                $('#im').animate({
                    left: arr[8].offsetLeft+123+"px",
                    top: arr[8].offsetTop+43+"px"
                })
                break;
                
        case 100: pos =  100;
                $('#im').animate({
                    left: arr[0].offsetLeft+123+"px",
                    top: arr[0].offsetTop+43+"px"
                })
                win = true;
                alert("Frist round completed")
                break;
                
        default: for(let i=0;i<arr.length;i++){
                    if(parseInt(arr[i].innerHTML)===pos){
                        $('#im').animate({
                            left: arr[i].offsetLeft+123+"px",
                            top: arr[i].offsetTop+43+"px"
                        })
                    }
                    }
                    if(pos>100){
                        pos = pos - output;
                    }
    }
        
  }

  return(
    <>
    <div className='match'>
    <button id='btn' onClick={temp}>click</button>
    </div>
    <img style={{zIndex: 20,position:"absolute" ,top: "95%",left: "60px"}} height={80} id='im' src={img1} alt='rahul'></img>
    <img style={{zIndex: 10,position:"absolute" ,top: "80%",left: "60px"}} height={90} id='im' src={img2} alt='rahul'></img>
    </>
  )
}