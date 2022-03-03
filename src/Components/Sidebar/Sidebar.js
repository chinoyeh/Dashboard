import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    var username = 'Prabhatsinh Rathod';
    var role = 'UI/UX Designer'
  return (
      <div>
    <div className='sidebar'>
        <div className='profile'>
        <img src={require('./images/Ellipse96.png')} />
            <h3>{username}</h3>
            <h4>{role}</h4>
        </div>
        <button>Become a Pro</button>
        <div className='sidelinks'>
            <li>Dashboard</li>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
            <li>Menu 5</li>
            <li>Menu 6</li>
            <div className='storage'>
               
                <div className='memory-card'>
                    <div className='memory-box'>
                    </div>
                    <div className='memory'> 
                <div className='yellow'>

                </div>
                <div className='yellow'>
                    
                </div>
                <div className='yellow'>
                    
                </div>

                </div>
                </div>
                 <h3>Buy More Storage</h3>
           
                <button className='storage-button'>Buy now</button>


            </div>
            <li>Menu 7</li>
        </div>
  

    </div>
    </div>
  )
}

export default Sidebar