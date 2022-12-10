import React, { useState } from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import MoviesC2 from "./MoviesC2";

const context=React.createContext()
const consumerContext=context.Consumer;
function MovieContext(props) {
    const [movie,setMovie]=useState([{
        name:"ANT MAN",
        price:'150',
        id:'1'
    },
    {
        name:"BAT MAN",
        price:'250',
        id:'2'
    },
    {
        name:"CAT MAN",
        price:'200',
        id:'3'
    },
    {
        name:"HULK MAN",
        price:'175',
        id:'4'
    }
])
    return ( <>
    <context.Provider value={{state:movie.name}}>
        {props.childern}
    </context.Provider>
    </> );
}

export default MovieContext;