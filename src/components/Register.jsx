import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
import axios from 'axios'
import {updateUserInfo} from '../ducks/reducer'
import {connect} from 'react-redux'

class Register extends React.Component {
    state = {
        email: '',
        name: '',
        password1: '',
        password2: ''
    }


    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    register = () => {
        // if (this.state.password1 === this.state.password2)
        const {name, email, password1:password} = this.state
        axios.post('auth/register', {name, email, password} )
        .then(res => {
            this.props.updateUserInfo(res.data.user)
        })
    }


    render() {
        return (
            <div className='register'>




                <input
                value={this.state.email}
                    placeholder='email'
                    onChange={e => this.handleChange('email', e.target.value)} type="text" />
                <input
                value={this.state.name}
                    onChange={e => this.handleChange('name', e.target.value)}
                    placeholder='name'
                    type="text" />
                <input
                value={this.state.password1}
                    onChange={e => this.handleChange('password1', e.target.value)}
                    placeholder='password'
                    type="password" />
                <input
                value={this.state.password2}
                    onChange={e => this.handleChange('password2', e.target.value)}
                    placeholder='retype password'
                    type="password" />




                    <button
                    onClick={this.register}
                    >register</button>

                    <Link to='/'>
                    <h4>login</h4>
                    </Link>



            </div>
        )
    }
}


function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, {updateUserInfo})(Register)