import './App.css';
import Channel from './Channel';
import React,{useState, useEffect} from 'react';
import {Howl, Howler} from 'howler';
import a from './sounds/LEAD 1.mp3'
import b from './sounds/_tambourine_shake_higher.mp3'
import c from './sounds/ALL TRACK.mp3'
import d from './sounds/B VOC.mp3'
import e from './sounds/DRUMS.mp3'
import f from './sounds/HE HE VOC.mp3'
import g from './sounds/HIGH VOC.mp3'
import h from './sounds/JIBRISH.mp3'
import i from './sounds/UUHO VOC.mp3'
import { FaPlay, FaPause, FaStop,FaShare} from 'react-icons/fa';

function App() {
  const sounds = [a, b, c, d, e, f, g, h, i];
  const [play, setPlay] = useState(false);
  const [allSounds, setAllSounds] = useState([]);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const playBtn = document.querySelector('.play');
  const pauseBtn = document.querySelector('.pause');
  const loopBtn = document.querySelector('.loop');
  const stopBtn = document.querySelector('.stop');
 
// run function one time in start:
useEffect(() => {
  sounds.map((element) => {
    var song = new Audio(element);
  
    setAllSounds((prev)=>{
    return [...prev, song]
})
  })

}, []);



useEffect(() => {
if(play){
 setInterval(() => {
  setTime((allSounds[0].currentTime).toFixed(0));
  setDuration(Math.ceil(allSounds[0].duration));
  if(allSounds[0].ended){
    // to replace disabled btn:
    (allSounds[0].ended)?  pauseBtn.disabled = true :pauseBtn.disabled = false; 
    (allSounds[0].ended)?  playBtn.disabled = false :playBtn.disabled = true;
    }

 
}, 1000);
if(allSounds[0].ended){
// to replace disabled btn:
(allSounds[0].ended)?  pauseBtn.disabled = true :pauseBtn.disabled = false; 
(allSounds[0].ended)?  playBtn.disabled = false :playBtn.disabled = true;
}
} 
}, [play]);





/*
useEffect(() => {
  if(play){
   setInterval(() => {
    setDuration(allSounds[0].duration.toFixed(0));
    
    if(allSounds[0].ended){
      // to replace disabled btn:
      (allSounds[0].ended)?  pauseBtn.disabled = true :pauseBtn.disabled = false; 
      (allSounds[0].ended)?  playBtn.disabled = false :playBtn.disabled = true;
      }
   
  }, 1000);
  if(allSounds[0].ended){
  // to replace disabled btn:
  (allSounds[0].ended)?  pauseBtn.disabled = true :pauseBtn.disabled = false; 
  (allSounds[0].ended)?  playBtn.disabled = false :playBtn.disabled = true;
  }
  } 
  }, [play]);

*/







function playS (){
  allSounds.forEach( (element) => {
    element.play();
    //look the play btn to secend click.
    playBtn.disabled = true;
    pauseBtn.disabled = false;
  });
  
  setPlay(true);
}
function pauseS (){
  allSounds.forEach( (element) => {
    element.pause();
    pauseBtn.disabled = true;
    playBtn.disabled = false;
  });
  setPlay(false);
}

function stopS (){
  allSounds.forEach( (element) => {
    element.load();
    pauseBtn.disabled = true;
    playBtn.disabled = false;
  });
  setPlay(false);
  setTime(0);
}
function loopS (){

  allSounds.forEach( (element) => {
    (!element.loop) ? element.loop = true : element.loop = false;
  });
}

function sendTime (timeC){
 setTime(timeC);
}


return (
    <div className="App">
     
     <button className="play" onClick={() => playS() }><FaPlay/></button>
     <button className="pause" onClick={() => pauseS() }><FaPause/></button>
     <button className="stop" onClick={() => stopS() }><FaStop/></button>
     <button className="loop" onClick={() => loopS() }><FaShare/></button>
  <br/>

{allSounds.map( (element, index) => 
  <Channel 
  key= {index}
  id={index}
  song={element}
  play={play}
  time={time}
  duration={duration}
  sendTime= {sendTime}
 />

 )}
    </div>
  );
}

export default App;
