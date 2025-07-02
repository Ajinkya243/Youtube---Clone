import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
const Head = () => {
    const[searchQuery,setSearchQuery]=useState("");
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    useEffect(()=>{
      getSearchSuggestions();
    },[searchQuery]);

    const getSearchSuggestions=async()=>{
      const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json=await data.json();
      console.log(json[1])
    }

  return (
    <div className='grid grid-flow-col p-5  shadow-lg'>
    <div className='flex items-center gap-2 col-span-1 -mt-1'>
      <FontAwesomeIcon icon={faBars} size="lg" onClick={toggleMenuHandler} className='cursor-pointer'/>  
      <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#fa0000",}} />
      <span className='text-2xl'>Youtube</span>
      </div>
      <div className='col-span-10'>
        <input type="text" className='border border-gray-400 w-1/2 p-2 rounded-l-full' value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}/>
        <button className='border border-gray-400 p-2 rounded-r-full px-3 bg-gray-200 '><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" /></button>
      </div>
      <div className='col-span-1'>
        <FontAwesomeIcon icon={faUser} size="xl" />
      </div>
    </div>
  )
}

export default Head