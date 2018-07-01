import React from 'react'
import './index.scss'


export default class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-content'>
          <div className='routes'>
            <div style={{margin: '5px'}}>
              map
            </div>
            <div style={{margin: '5px'}}> 
              your observations
            </div>
            <div style={{margin: '5px'}}>
              Identify
            </div>
            <div style={{margin: '5px'}}>
              More
            </div>

          </div>

          <div style={{margin: '20px'}}>
            profile pic
          </div>
        </div>
      </div>
    )
  }
}