import React from 'react'

import './index.scss'

const ProfilePicture = ({ src, styles = {} }) => <img className='profile-pic' src={src} style={{...styles}}/>

export default ProfilePicture