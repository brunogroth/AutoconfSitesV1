import React, { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import User from '../Entities/User'

interface DefaultLayoutProps {
  user: User;
  token: string | null;
  testing: boolean | null;
}

export default function DefaultLayout() {
  const {token, user} = useStateContext();
  
  // if (!token) {
  //   return <Navigate to='/login' />
  // }

  const onLogout = (ev: React.MouseEvent) => {
   ev.preventDefault;
   
  }

  return (
    <div id="defaultLayout">
      <aside>
        <img height={'30px'} style={{borderRadius:'10px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AQV6i9cjLrSvh7xuKu8ia7udcS6LZf-lsKHOczas1bI_CJMkY3rjol6NIC4ExMBoufo&usqp=CAU'></img>
        <span style={{fontSize:'1.5rem', color: 'white'}}> Autoconf Sites</span>
        <hr/>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/">Lançamento de Sites <small style={{backgroundColor:'blue', padding:'0.3rem 0.6rem', borderRadius:'20px'}}>Beta</small></Link>
        <Link to="/">Sites Inativos <small style={{backgroundColor:'blue', padding:'0.3rem 0.6rem', borderRadius:'20px'}}>Beta</small></Link>
      </aside>
      <div className='content'>
        <header>
          <div>
            Header
          </div>
          <div>
            Bem vindo, {user?.name}!
            <a href="#" className='btn-logout' onClick={onLogout}><img height={'15px'} style={{marginTop:'1rem'}} src='https://cdn-icons-png.flaticon.com/512/1403/1403474.png'></img></a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}