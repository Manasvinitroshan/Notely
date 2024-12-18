import React, { useState } from 'react'

import ProfileInfo from '../../components/Navbar/Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'


const Navbar = () => {
  const [searchQuery,setSearchQuery] = useState("")
  

  const navigate = useNavigate
  const onLogout = () =>{
    navigate("/login");
  };
  return (
    <div className='bg-white flex items-center justify-between px-4 py-2 drop-shadow '>
        <h2 className='text-xl font-medium text-black py-2'>Notes</h2>
        <SearchBar/>
        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar