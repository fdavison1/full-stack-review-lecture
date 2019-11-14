import React from 'react'
import logo from '../assets/Instamilligram.svg'
import './Header.css'
import {connect} from 'react-redux'

const Header = (props) => {
    return (
        <header>
            

            {props.profile_img && <img src={props.profile_img} alt=""/>}

            {props.name && <button>logout</button>}

            <div className="profile-pic"></div>
            
            
            
            
            <img src={logo} alt=""/>
            <div className="logout"></div>
            
            
            
            </header>
    )
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps)(Header)