import { render } from "@testing-library/react";
import React, { useState } from "react";
import Tag from "../Atoms/Tag/Tag";
import ArtistDetailModal from "../Modals/ArtistDetailModal/ArtistDetailModal";
import './BandTile.css'

function BandTile(props) {


    const [tileState, setTileState] = useState(true);
    const [artistDetailModal, openArtistDetailModal] = useState(false)
    const overflow = props.genre.length - 2;
    function handleHover() {
        setTileState(false);
    }

    function handleLeave() {
        setTileState(true);
    }


    function openModal() {
        openArtistDetailModal(true);
        render(<ArtistDetailModal 
            showHide={artistDetailModal} 
            name={props.name} 
            img={props.img}
            location={props.location}
            description={props.description}
            genre={props.genre}

        />)
    }

    return(
        <div onClick={openModal}>
            

            <div id="tile-body" 
            onClick={''}
            onMouseEnter={handleHover} 
            onMouseLeave={handleLeave} 
            style={{
                backgroundColor:  tileState ? '' : 'var(--neutral-600)', 
                transform: tileState ? '' : `translate(${0}px, ${4}px)`,  
                cursor: 'pointer'
                }}
            >
                <div id="artist-img-container">
                    <img id='artist-img' src={props.img} alt='artistPhoto' />
                </div>
                <div id="genre-list">
                {props.genre.length <= 3 ? props.genre.map(genre =>  <Tag text={genre} />) : 
                <><Tag text={props.genre[0]} /><Tag text={props.genre[1]} /> <Tag text={'+' + overflow}/></> }
                    {}
                </div>
                <div id="artist-labels">
                    <h4 id="artist-name">{props.name}</h4>
                    <p id="artist-location" className="small-body">{props.location}</p>
                </div>
            </div>
        </div>
    )
}

export default BandTile
