import React,  { useState } from 'react'
import './Dashboard.css'
import Calendar from 'react-calendar'
import 'react-bar-chart/example/BarChart.css'
import 'react-calendar/dist/Calendar.css'
import BarChart from 'react-bar-chart';




const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  const data = [
    {text: 'Jan', value: 200},
    {text: 'Feb', value: 100}, 
    {text: 'Mar', value: 300} , 
    {text: 'Apr', value: 350},
    {text: 'May', value: 150}, 
    {text: 'Jun', value: 300} , 
    {text: 'Jul', value: 500},
    {text: 'Aug', value: 400}, 
    {text: 'Sep', value: 300} , 
    {text: 'Oct', value: 100},
    {text: 'Nov', value: 50}, 
    {text: 'Dec', value: 450} 
  ];
  const margin = {top: 20, right: 20, bottom: 30, left: 40};

   
  return (
    <div>
    <div className='Dashboard'>
    <div className='dashnav'>
      <h1>Dashboard</h1>
     <form className='search-form'>
     <div >
     <button className='search'>search</button>
      <input type ='text' placeholder='Search here ...'/>
     </div>
      <div  >
     <button className='file'> +</button>
     </div>
     </form>
     <div className ='nav-buttons'>
       <button>N</button>
       <button>S</button>
     </div>
 
 
      </div>
 <div className='dash-content'>
 <div className='project'>
    <div className='project-nav'>
  <div>
  <h2>Ongoing Projects</h2>
  </div>
        <ul className='project-link'>
          <li>Remaining</li>
          <li>Ongoing</li>
          <li>Completed</li>
        </ul>
    </div>
    <div className='project-content'>
      <div className='one'>
        <h2>
          App Design
        </h2>
        <h5>
          17 August, 2021
        </h5>
      </div>
      <div className='two'>
        <h2>
          App Design
        </h2>
        <h5>
          17 August, 2021
        </h5>
      </div>
      <div className='three'>
        <h2>
          App Design
        </h2>
        <h5>
          17 August, 2021
        </h5>
      </div>
      <div className='taskbar'>
      <ul >
      <li>
        <div className='rect1'>

        </div>
          Todo
        </li>
        <li>
        <div className='rect2'>
          
          </div>
          Inprogress
        </li>
        <li>
        <div className='rect3'>
          
          </div>
          Completed
        </li>
      </ul>
      </div>

      <div className='avatars'>
      <img src={require('./images/Ellipse91.png')} />
      <img src={require('./images/Ellipse92.png')} />
      <img src={require('./images/Ellipse93.png')} />
     
      </div>
      <div className='slide'>

      </div>


    </div>
    <div className='tasks'>

    </div>
    <div className='Chart'>
     <div className='chart-header'>
       <h2>Progress Stats</h2>
       <ul>
         <li>day</li>
         <li>week</li>
         <li>month</li>
       </ul>
     </div>
   <div className='bar-chart'>
   <BarChart
      width={700}
      height={360}
      margin={margin}
      data={data}
      />
   </div>
            
    
    </div>
      </div>
      <div className='right-side'>
        <div className='upgrade'>
          <div className='upgrade-image'>
          <img src={require('./images/avatar.png')} />
          </div>
        <div className='upgrade-text'>
          <h3>
            Try Pro Version
          </h3>
          <h4>
            Unlock full power of calendar 
          </h4>
          <h4>
            For 2 weeks for Free
          </h4>
        </div>
        </div>
        
   
      
        <Calendar onChange={onChange} value={value} />
 
      <div className='call-div'>
        <h4>
        Project Manager
        </h4>
        <button>+ New</button>
        <h2> Client Meeting</h2>
        <div className='slider'>
       <div className='call-slider'> <i className='call'/></div>
       <div>
        <h3>Swipe to call</h3>
       </div>
      </div>
      </div>
    
        
      </div>
 </div>
 <i class="fa fa-phone" aria-hidden="true"></i>
 
    </div>
    </div>
  )
}

export default Dashboard