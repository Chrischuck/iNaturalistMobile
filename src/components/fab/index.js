import React from 'react'
import './index.scss'

import camera from '../../assets/camera.svg'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef();
  }

  onClick = event => {
    event.preventDefault();
    this.inputRef.current.click()
  }

  handleFileUpload = () => {
    const files = this.inputRef.current.files
    console.log(files)
  }

  render() {
    return (
      <>
        <input ref={this.inputRef} onChange={this.handleFileUpload} type="file" accept="image/*;capture=camera" style={{display: 'none'}}/>
        <div className='fab' onClick={this.onClick} >
          
          <img style={{ height: '1.7em' }} src={camera} />
        </div>
      </>
    )
  }
}