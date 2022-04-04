import React,{useState, useEffect} from 'react';
import { FaBeer, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import './Channel.css';

function Channel(props) {

const [sound, setSound] = useState(props.song);
const [timeC, setTimeC] = useState(0);

//send currentTime to App:
  function changeDuration(event){
    setTimeC(event.target.value);
    props.sendTime(timeC);
   //console.log("changeDur:", event.target.value);
  }
   
  function playOrMute(){
    console.log(sound.muted);
    //check audio is playing on mute or not:
    (!sound.muted)? 	sound.muted=true: sound.muted=false;
      }
   
      return( 
          
      <div className="">
    <span><button className="muteBtn" onClick={() => playOrMute(sound)}>{(!sound.muted)? <FaVolumeUp /> : <FaVolumeMute />}</button></span>
    <span>  name: song{props.id+1} </span>
    <span> ({props.time}) </span>
    <span>  <input className="range" type="range" min="0" max={props.duration} value={props.time} onChange={changeDuration}></input></span>
    <span>   ({props.duration}) </span>
    <audio src={sound}></audio>
    </div>
    )
}

export default Channel;
