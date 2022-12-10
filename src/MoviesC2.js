import React, { useContext } from "react";
import { ConsumerContext } from "./MovieList";
function MoviesC2() {
    const { movieName, name } = useContext(ConsumerContext);
        return ( <>
    <h2 style={{color:"red"}}>{movieName } : { name}</h2>
    </> );
}

export default MoviesC2;