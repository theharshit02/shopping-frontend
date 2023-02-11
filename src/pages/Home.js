import React from 'react'
import './Home.css';
import MainBar from '../components/MainBar/MainBar';
import SideBar from '../components/SideBar/SideBar'

const Home = () => {
  return (
    <div className="Home">
      <header className='header'>
        <div className='breadcrumbs'>Home /&nbsp;<p className='products'>Products</p></div>
      </header>
      <div className='contents'>
        <SideBar/>
        <MainBar/>
      </div>
    </div>
  )
}

export default Home
