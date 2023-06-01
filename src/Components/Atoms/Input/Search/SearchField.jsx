import React from "react";
import './SearchField.css'

function SearchField(props) {
    return (
        <form>
            <div id="container">
                <i className="fa fa-magnifying-glass"></i>
                <input placeholder={props.placeholder} value={props.value}></input>
            </div>
        </form>
    )
}

export default SearchField