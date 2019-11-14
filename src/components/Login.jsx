import React from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'
import {updateUserInfo} from '../ducks/reducer'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'

class Login extends React.Component{
    state = {
        email: '',
        password: ''
    }



handleChange = (key, val) => {
    this.setState({[key]: val})
}

login = () => {
    const {email, password} = this.state
    axios.post('/auth/login', {email, password})
    .then(res => {
        this.props.updateUserInfo(res.data.user)
        Swal.fire(res.data.message)
    })
}

    render(){
        return(
            <div>
                
                
                
               <input 
               onChange={e => this.handleChange('email', e.target.value)}
               placeholder='email' value={this.state.email} type="text"/>
               
               
               <input 
               onChange={e => this.handleChange('password', e.target.value)}
               placeholder='password' value={this.state.password} type="password"/> 
                

                <button
                onClick={()=> this.login()}
                >login</button>

                <Link to='/register'>Register</Link>
                


            </div>
        )
    }
}

export default connect(null, {updateUserInfo})(Login)