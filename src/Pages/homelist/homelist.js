import React, { useEffect, useState } from 'react';
import axios from 'axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';


const HomeList = ({ title, fetchurl }) => {
  const [videos, setVideos] = useState([]);
  const [trailer, setTrailer] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchurl);
        setVideos(response?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [fetchurl]);

  const toWatchVideo = (item) => {
    if (trailer) {
      setTrailer('');
    } else {
      movieTrailer(item?.title || item?.name || item?.original_title)
        .then((url) => {
          const waiting4url = new URLSearchParams(new URL(url).search);
          const videoId = waiting4url.get('v');
          setTrailer(videoId);
        })
        .catch((error) => {
          console.log(error);
          
        });
    }
  };

  return (
    <>
      <h1 className='text-blue-800 bg-black-200 opacity-100 sm:font-3xl md-font-5xl'>{title}</h1>
      <div className='relative flex items-center'>
        <div className='slider'>
          <div className='w-full h-full' style={{ display: 'flex' }}>
            {videos?.map((item, id) => (
              <div key={id} className='w-[160px] sm:w-[200px]'>
                <img
                  className='w-full relative flex items-center'
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt={item.title}
                  onClick={() => toWatchVideo(item)}
                />
                <p>{item.title}</p> 
              </div>
            ))}
          </div>
        </div>
      </div>
      {trailer && <YouTube videoId={trailer} />}
    </>
  );
};

export default HomeList;