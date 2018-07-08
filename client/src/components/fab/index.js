import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import camera from '../../assets/camera.svg'

const mapStateToProps = state => ({ router: state.router })

@connect(mapStateToProps, {})
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
    // do stuff with files
    console.log(files)
  }

  render() {
    const { pathname } = this.props.router.location

    return (
      <>
        {
          (
            pathname !== '/login' &&
            pathname !== '/redirect'
          ) &&
          <>
            <input
              ref={this.inputRef}
              onChange={this.handleFileUpload}
              accept="image/*;capture=camera, image/*, audio/x-wav, audio/wav, audio/wave, audio/mp3, audio/x-mp3, audio/mp4, audio/x-m4a"
              multiple
              type="file"
              style={{display: 'none'}}
            />
            <div className='fab' onClick={this.onClick} >
              <img style={{ height: '1.7em' }} src={camera} />
            </div>
          </>
        }
      </>
    )
  }
}