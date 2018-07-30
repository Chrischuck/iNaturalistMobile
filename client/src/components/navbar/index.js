import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import UserNavbar from './components/userNavbar'


const Navbar = ({ accessToken }) => <UserNavbar />

export default Navbar