import React from 'react'
import logo from '../assets/Instamilligram.svg'
import './Header.css'
import {connect} from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import {updateUserInfo} from '../ducks/reducer'

const Header = (props) => {
    const logout = () => {
        axios.delete('/auth/logout').then(res => {
            Swal.fire('logged out!')
            props.updateUserInfo({  
            email: '', 
            name: '', 
            user_id: '', 
            profile_img: ''})
        })
    }
    return (
        <header>
            

            {props.profile_img && <img src={props.profile_img} alt=""/>}

            {props.name && <button
            onClick={()=> logout()}
            >logout</button>}

            <div className="profile-pic"></div>
            
            
            
            
            <img src={logo} alt=""/>
            <div className="logout"></div>
            
            
            
            </header>
    )
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {updateUserInfo})(Header)