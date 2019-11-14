import React from 'react'
import {Link} from 'react-router-dom'

export default class Register extends React.Component {
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

    render() {
        return (
            <div>




                <input
                value={this.state.email}
                    placeholder='email'
                    onChange={e => this.handleChange('name', e.target.value)} type="text" />
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




                    <button>register</button>

                    <Link to='/'>
                    <h4>login</h4>
                    </Link>



            </div>
        )
    }
}