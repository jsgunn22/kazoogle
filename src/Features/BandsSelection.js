import React from "react";
import './BandsSelection.css'

// components
import BandTile from "../Components/BandTile/BandTile";

// data
import artists from "../data";
import SearchField from "../Components/Atoms/Input/Search/SearchField";

function BandsSelection() {

    function getSelection(artist) {
        return ( 
            <div>
                <BandTile 
                    name={artist.name} 
                    location={artist.location} 
                    img={artist.img} 
                    genre={artist.genre}
                    description={artist.description}    
                    />
            </div>
        )
    
    }

    return (
        <div>
        <SearchField placeholder='test' />
        <div id="grid-container">
            
                {artists.map(getSelection)}
                </div>
        </div>
    )
}

export default BandsSelection