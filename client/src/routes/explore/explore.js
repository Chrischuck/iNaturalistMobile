import React from 'react'


class Explore extends React.Component {
  componentDidMount() {
    console.log(navigator.geolocation.getCurrentPosition((position) => console.log(position)))

  }

  render() {
    return <div>explore</div>
  }
}

export default Explore