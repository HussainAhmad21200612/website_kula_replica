import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
// import Scroll from './scroll';
import Content from './scroll';
import Video from './videos';
window.onscroll = function() {scrollChange()};

function scrollChange() {
    const scrollValue=document.documentElement.scrollTop;
  if ( scrollValue> 680 && scrollValue< 1850) {
    document.getElementById("vid1").style.zIndex =-1;
    document.getElementById("vid2").style.zIndex =1;
    document.getElementById("vid3").style.zIndex =-1;
  } else if (scrollValue>= 1850) {
    document.getElementById("vid1").style.zIndex =-1;
    document.getElementById("vid3").style.zIndex =1;
  }
  else {
    document.getElementById("vid1").style.zIndex =1;
    document.getElementById("vid2").style.zIndex =-1;
    document.getElementById("vid3").style.zIndex =-1;
  }
}
ReactDOM.render(
<div className='out'>
    <div className='navi'>
        <Nav/>
    </div>
    <div className='outer-box'>
            <div className='con'>
                <Content />
                <Video/>
            </div>
    </div> 
</div>
,document.getElementById('root'));

// ReactDOM.render(<Data/>,document.getElementById('root'));