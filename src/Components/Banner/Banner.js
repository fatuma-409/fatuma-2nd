import React, { useEffect, useState } from 'react';
import Request from '../../Request/Request';
import axios from 'axios';
import { Movie } from '@mui/icons-material';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(Request?.RequestMovies).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  const fontDecrease = (string, number) => {
    if (string.length > number) {
      return string.slice(0, number) + "...";
    } else {
      return string;
    }
  };
  console.log(movie);

  return (
    <div className='w-full h-[550px]'>
      <div className='w-full h-full'>
        <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
        <div className=" absolute top-[20%] mx-15 px-15 left-20">
          <p className="text-gray-400 font-bold">{movie?.title}</p>
        </div>
        <div className=" absolute top-[40%] left-20flex items-center justify-end">
        <button className="bg-red-800 text-white font-bold py-2 px-4 rounded-l">
          Play
        </button>
        <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-r">
          Watch Later
        </button>
      </div>
      <div
      className='absolute top-[90%] left-5 bg-yellow-200 text-yellow-800 font-bold py-2 px-4'
    >
      Release Date:{movie?.release_date}
    </div>
    <div className='absolute top-[60%] left-24 bg-green-100 text-gray-800 font-bold py-2 px-4 w-full sm:w-[250px] md:w-[300px] lg:w-[350px]'>
    {movie?.overview && fontDecrease(movie?.overview, 100)}
  </div>
      </div>
    </div>
  );
};

export default Banner;

