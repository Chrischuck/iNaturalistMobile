import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import compass from '../../assets/compass.svg'

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

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-content'>
          <div className='routes'>
            <div className='nav-link link-active'>
                <Link to='/'>
                  <svg aria-hidden="true" fill={'#74ac00'} style={{ height: '1.75rem' }} data-prefix="fas" data-icon="compass" class="svg-inline--fa fa-compass fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM307.446 120.844l-102.642 97.779a23.997 23.997 0 0 0-6.772 11.729l-33.359 137.779c-5.68 23.459 22.777 39.318 39.88 23.024l102.64-97.779a23.99 23.99 0 0 0 6.772-11.729l33.359-137.779c5.618-23.198-22.591-39.493-39.878-23.024zM256 224c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path></svg>
                </Link>
            </div>
            <div className='nav-link'> 
              your observations
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