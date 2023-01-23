import React from "react";
import Player from "./Player";
function Video(){

    return (<div className="box">
    <Player id1="side1" id2="vid1" src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"/>
        
    <Player id1="side2" id2="vid2" src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4"/>
        
    <Player id1="side3" id2="vid3" src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4"/>
</div>)

}
export default Video;