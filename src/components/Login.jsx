import React from 'react' 
import {Link} from 'react-router-dom'

export default class Login extends React.Component{
    state = {
        email: '',
        password: ''
    }



handleChange = (key, val) => {
    this.setState({[key]: val})
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
                
                <Link to='/register'>Register</Link>
                
            </div>
        )
    }
}