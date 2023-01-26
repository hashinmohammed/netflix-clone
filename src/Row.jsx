import { useEffect, useState } from "react";
import axios from "./axios";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow}) {
const [movies, SetMovies] = useState([]);
const[trailerUrl,setTrailerUrl]=useState('');

useEffect(() => {
async function fetchData() {
const request = await axios.get(fetchUrl);
// console.log(request);
SetMovies(request.data.results); /* which is an array of results */
return request;
}
fetchData();
}, [fetchUrl]);

const opts = {
height: '256',
width: "356",
playerVars: {
// https://developers.google.com/youtube/player_parameters
autoplay: 1,
},
};
const handleClick=(movie)=>{  if(trailerUrl){
  setTrailerUrl('');
}
else{
  movieTrailer(movie?.name || "")
  .then((url)=>{
   
    const urlParams=new URLSearchParams(new URL(url).search);
   
     setTrailerUrl( urlParams.get('v'));
  }).catch(err=>{
    
    console.log(err)
  })
}}

return (
<div className="row">
{/* title */}

<h2>{title}</h2>

{/* container->>posters */}

<div className="row__posters">
  {movies.map((movie) => {
    return (
      <img 
        onMouseEnter={()=>{
          
        handleClick(movie)
        }}
        onMouseLeave={()=> setTrailerUrl('')}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
         key={movie.id}
        src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path }`} 
        alt="movie" 
      />
    );
  })} 
</div>
 {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;

