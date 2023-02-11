import React, { useState } from 'react'
import './Home.css';
import MainBar from '../components/MainBar/MainBar';
import SideBar from '../components/SideBar/SideBar'

const Home = () => {
  const [queries, setqueries] = useState({})

  return (
    <div className="Home">
      <header className='header'>
        <div className='breadcrumbs'>Home /&nbsp;<p className='products'>Products</p></div>
      </header>
      <div className='contents'>
        <SideBar queries={(e)=>setqueries(e)}/>
        <MainBar queries={queries} />
      </div>
    </div>
  )
}

export default Home
