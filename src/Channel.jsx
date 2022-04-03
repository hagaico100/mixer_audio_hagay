import React,{useState, useEffect,useCallback, forwardRef, useRef, useImperativeHandle} from 'react';
import { FaBeer, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
//import {Howl, Howler} from 'howler';
import './Channel.css';

function Channel(props) {

const [sound, setSound] = useState(props.song);
const [duration, setDuration] = useState(props.duration);
const [timeC, setTimeC] = useState(0);





useEffect(() => {
  if(props.play){
   setInterval(() => {
    setTimeC((sound.currentTime).toFixed(0));
  }, 1000);
  
  } 
  }, [props.play]);

  







useEffect(() => {
//only when play is run:
console.log("play song?", props.play);
console.log("play song", sound);

  }, [props.play]);


  function changeDuration(event){

    setTimeC(event.target.value);
    props.sendTime(timeC);
   console.log("changeDur:", event.target.value);
  }
   
  function playOrMute(){
    console.log(sound.muted);
    //check audio is playing
    (!sound.muted)? 	sound.muted=true: sound.muted=false;
    //console.log(sound);
    }
   
      return( 
          
      // !sound.readyState?<div>loading</div>:(
        <div className="">
<br />
    <span><button className="muteBtn" onClick={() => playOrMute(sound)}>{(!sound.muted)? <FaVolumeUp /> : <FaVolumeMute />}</button></span>
    <span>  name: song{props.id+1} </span>
    <span> ({props.time}) </span>
    <span>  <input className="range" type="range" min="0" max={props.duration} value={props.time} onChange={changeDuration}></input></span>
    <span>   ({props.duration}) </span>
    <audio src={sound}></audio>
    </div>
      //  )
    )
}

export default Channel;
