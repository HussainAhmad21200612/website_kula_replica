import React from 'react';

const Player = (props) => {
    return (
        <div id={props.id1} className="edit">
            <video id={props.id2} autoPlay="true" loop="true" muted>
                <source src={props.src} type="video/mp4" />
            </video>
        </div>
    )
}

export default Player;
