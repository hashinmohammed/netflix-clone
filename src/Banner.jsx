import { useEffect,useState } from "react";
import axios from "./axios";
import './Banner.css'
import requests from "./requests";

function Banner({ fetchUrl }) {
  const [movie, SetBanner] = useState([]);
  useEffect(() => {
    console.log("Banner =>", fetchUrl);
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log("hello");
      console.log(request.data.results);
      SetBanner(
        request.data.results[
          Math.floor(Math.random()*request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  },[fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundPosition:"center centre",
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`}}
        // "https://image.tmdb.org/t/p/original/eoAvHxfbaPOcfiQyjqypWIXWxDr.jpg"
    >
      <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        

        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* div=> 2button */}
        <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
        {/* description */}
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
