
import React, { useEffect, useState } from 'react'
import  axios  from './axios';
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/original/";
function Row(props) {
  const { title, fetchUrl } = props;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("hello")
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log('hyuu')
  console.log(movies);
  return (
    <div className='row' >
      <h2>{title}</h2>
     
      <div className="row__posters">
        {movies.map(movie=>{
          return(
            <img className='row__poster'  src={`${base_url}${movie.poster_path}`}alt={movie.name} />
          )
        })}
        </div>
    </div>
  );
}

export default Row;