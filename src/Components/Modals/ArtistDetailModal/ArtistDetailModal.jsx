import React, { useState } from "react";
import Tag from "../../Atoms/Tag/Tag";
import './ArtistDetailModal.css'

function ArtistDetailModal(props) {
    
    const [show, setShow] = useState(props.showHide)


    function hideModal() {
        setShow(false)
    }

    return (
        <div>
            {show &&     
                <div id="overlay" onClick={hideModal} on>
                    <div id="modal-body" onClick={''}>
                        <div id="header-section">
                            <h1>{props.name}</h1>
                        </div>
                        <div id="genre-tags">
                            {props.genre.map(genre =>  <Tag text={genre} />)}
                        </div>
                        <div id="body-section">
                            <div id="modal-artist-img-container">
                                <img id="artist-img" src={props.img} alt='artistImage'></img>
                            </div>
                            <div style={{borderRight: 'solid var(--neutral-600)'}}></div>
                            <div id='artist-description'>
                                <p className="medium-body">
                                {props.description}
                                </p>
                            </div> 
                        </div>
                        <div>
                                <p className='medium-body'>Location: {props.location}</p>
                            </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ArtistDetailModal