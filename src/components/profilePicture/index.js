import React from 'react'

import './index.scss'

import pic from '../../assets/defaultpic.jpg'


const ProfilePicture = ({ src, styles = {} }) => <img className='profile-pic' src={pic} style={{...styles}}/>

export default ProfilePicture