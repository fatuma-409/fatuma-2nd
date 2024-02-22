import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomeList = ({ title, fetchurl }) => {
  const [videos, setVideos] = useState([]);

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

  console.log(videos, "checking");

  return (
   

    <>
    <h1 className='text-blue-800 bg-black-200 opacity-100 sm:font-3xl md-font-5xl'>{title}</h1>
    <div className='relative flex item-center'>
      <div className='slider'>
        <div className='w-full h-full'>
          {videos?.map((item, id) => (
            <div key={id} className='w-[160px] sm:w-[200px]'>
            <img className='w-full ' src={`https://api.themoviedb.org/3/${item.backdrop_path}`} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
      );
    };
    
    


export default HomeList;