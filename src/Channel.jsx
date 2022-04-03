import React,{useState, useEffect,useCallback, forwardRef, useRef, useImperativeHandle} from 'react';
import { FaBeer, FaVolumeMute } from 'react-icons/fa';
//import {Howl, Howler} from 'howler';
import './Channel.css';

function Channel(props) {

const [sound, setSound] = useState(props.song);
const [duration, setDuration] = useState(props.song.duration);


useEffect(() => {
  //to display duration time:
  if(duration===0){
  setDuration(props.song.duration)
}
//only when play is run:
console.log("play song", props.play);
console.log("play song", sound);

  }, [props.play]);


  function changeDuration(){
   console.log("changeDur");
  }
   
  function playOrMute(){
    console.log(sound.muted);
    //check audio is playing
    (!sound.muted)? 	sound.muted=true: sound.muted=false;
    //console.log(sound);
    }
   
      return( 
          
//        sound._state!="loaded"?<div>loading</div>:(
        <div className="">
<br />
    <span><button className="muteBtn" onClick={() => playOrMute(sound)}>{(!sound.muted)? <FaBeer /> : <FaVolumeMute />}</button></span>
    <span>  name: song{props.id+1} </span>
    <span> ({props.time}) </span>
    <span>  <input className="range" type="range" min="0" max={props.duration} value={props.time} onChange={changeDuration}></input></span>
    <span>   ({props.duration}) </span>
    <audio src={sound}></audio>
    </div>
  //      )
    )
}

export default Channel;
