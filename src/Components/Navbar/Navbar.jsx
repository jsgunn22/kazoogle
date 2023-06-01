import React from "react";
import Avatar from "../Atoms/Avatar/Avatar";
import './Navbar.css'

function Navbar() {

    function UserInfo() {
        return(
            <div id="user-info">
                <Avatar src={'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg'} id='avatar'/>
                <div>
                    <h4>User Name</h4>
                    <p className="small-body">sdfasdf</p>
                </div>
                <i className="fa fa-caret-down" id="caret"></i>
            </div>
        )
    }

    return(
            <nav>
                <div id="site-name">
                    <i className="fa fa-map-pin icon" ></i>
                    <h3>Kazoogle</h3>
                </div>
                <div id="user-info">
                    <UserInfo />
                </div>
            </nav>
    )
}

export default Navbar;