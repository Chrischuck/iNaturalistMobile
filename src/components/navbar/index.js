import React from 'react'
import './index.scss'


export default class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isHidden: false
    }
  }
  hideBar = () => {
    let { isHidden } = this.state
    console.log(window.scrollY)
    console.log(this.prev)
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
            <div className='nav-link'>
              map
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

          <div className='profile-picture-container'>
            profile pic
          </div>
        </div>
      </div>
    )
  }
}