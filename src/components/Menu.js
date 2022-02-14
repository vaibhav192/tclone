import React from 'react';
import {HomeOutlined,AccountCircleOutlined,MessageOutlined} from '@mui/icons-material';
import './css/menu.css'
import Logo from '../assests/logo.png'
import Profile from '../assests/profile.jpg'

function Menu() {
  return (
    <div className='menu'>
            <div className='logo'>
                    <img src={Logo} width={'50px'} height="50px" />
                    <h2>Twitter</h2>
            </div> 
            <div >
                <div className='menuItem'>
                    <HomeOutlined/>
                    <h3>Home</h3>
                </div>
                <div className='menuItem'>
                    <AccountCircleOutlined/>
                    <h3>Profile</h3>
                </div>
                <div className='menuItem'>
                    <MessageOutlined/>
                    <h3>Messages</h3>
                </div>
                <div className='menuItem'>
                  <button className='btn'>
                    Create Request +
                  </button>
                </div>
            </div>
            <div className='userName'>
                    <img src={Profile} 
                    style={{
                      width:'30px',height:'30px',
                      borderRadius:'50%',
                      margin:'10px'
                    }} />
                    <h3>User Name</h3>
            </div>
    </div>
  );
}

export default Menu;
