import React from "react";
import './Avatar.css'

function Avatar(props) {
    return(<img src={props.src} id='avatar' alt='src/Components/Navbar/defaultAvatar.png'></img>)
}

export default Avatar