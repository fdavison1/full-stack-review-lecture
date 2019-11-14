import React from 'react'

export default class Post extends React.Component{
    state = {
        title: '',
        content: '',
        imgURL: '',
        // editToggle: false

    }
    render(){
        return (
            <div>Post.jsx


            <h2>{this.state.title}</h2>


            <button>edit</button>



            </div>
        )
    }
}