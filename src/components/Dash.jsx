import React from 'react'
import Post from './Post'

export default class Dash extends React.Component {
    state = {
        posts: []
    }
    render(){
        return(
            <div>
                <Post />
            </div>
        )
    }
}