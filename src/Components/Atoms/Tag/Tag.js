import React, { useState } from "react";
import './Tag.css'

function Tag(props) {

    const [tagState, setTagState] = useState(true)

    function onHover() {
        setTagState(false)
    }

    function offHover() {
        setTagState(true)
    }

    return (
    
    <div 
        className="small-body" 
        id="tag" 
        onMouseEnter={onHover} 
        onMouseLeave={offHover} 
        style={{backgroundColor: tagState ? '' : 'var(--base-600)'}}
        >
        <p>{props.text}</p>
        </div>
    
    )
}

export default Tag