import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import './index.scss'

@withRouter
export default class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isHidden: false
    }
  }

  hideBar = () => {
    let { isHidden } = this.state
    window.scrollY > this.prev ?
    !isHidden && this.setState({ isHide: true }) :
    isHidden && this.setState({isHide:false})

    this.prev = window.scrollY;
  }
  componentDidMount(){
    window.addEventListener('scroll',this.hideBar);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.hideBar);
  }

  renderActive = loc => this.props.history.location.pathname === loc
  render() {

    return (
      <div className='navbar'>
        <div className='navbar-content'>
          <div className='routes'>
            <div className={`nav-link ${this.renderActive('/explore') ? 'link-active' : ''}`}>
                <Link to='/explore'>
                  <svg aria-hidden="true" fill={this.renderActive('/explore') ? '#74ac00' : 'rgb(101, 119, 134)'} style={{ height: '1.75rem' }} data-prefix="fas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM307.446 120.844l-102.642 97.779a23.997 23.997 0 0 0-6.772 11.729l-33.359 137.779c-5.68 23.459 22.777 39.318 39.88 23.024l102.64-97.779a23.99 23.99 0 0 0 6.772-11.729l33.359-137.779c5.618-23.198-22.591-39.493-39.878-23.024zM256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path></svg>
                </Link>
            </div>
            <div className={`nav-link ${this.renderActive('/community') ? 'link-active' : ''}`}> 
              <Link to='/community'>
                <svg aria-hidden="true" fill={this.renderActive('/community') ? '#74ac00' : 'rgb(101, 119, 134)'} style={{ height: '1.75rem' }} data-prefix="fas"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
              </Link>
            </div>
            <div className='nav-link'>
              Identify
            </div>
            <div className='nav-link'>
              More
            </div>

          </div>

          <div className='profile-container'>
            profile pic
          </div>
        </div>
      </div>
    )
  }
}