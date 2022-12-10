import { createContext, useState } from "react";
import MoviesC1 from "./MoviesC1";

const Context = createContext();
export const ConsumerContext = Context.Consumer;
function MovieList() {
  
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
    return (<div>
        {movie.map((e,i)=>{
         return <Context.Provider value={{movieName: 'Movie Name', name: e.name}}>
            <MoviesC1 />
         </Context.Provider>
        })}
    </div> );
}

export default MovieList;
