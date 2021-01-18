import React from "react";
import DetailCard from "../DetailCard/DetailCard";
import "./Favorites.css";
import brokenHeart from "../../Assets/broken-heart.png";


//knows about currentFavorites and removeFromFavorites from APP

const Favorites = ({ currentFavorites, addToFavorites, removeFromFavorites }) => {

   const displayDetailCards = () => {
        return currentFavorites.map((entry, i) => {
            return <DetailCard entry={entry} key={i}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites} />
        })
    }
   
    if (currentFavorites.length === 0) {
       return ( <section className="noFavs">
            <h1>No favorites yet -- let's add some!</h1>
            <img className="broken-heart" src={brokenHeart} alt="vector-broken-heart-with-band-aid" />
        </section>
       )
    } else {
        return (
            <section className="favorites-container">
                <h1>Hello from Favorites</h1>
                {displayDetailCards()}
            </section>

        )    
    }
}

export default Favorites;