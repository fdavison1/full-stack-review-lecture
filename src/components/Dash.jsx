import React from 'react'
import Post from './Post'
import Add from './Add'

export default class Dash extends React.Component {
    state = {
        posts: [],
        toggleAdd: false, 
    }



    toggle = () => {
        this.setState((prev)=> {
            return {
                toggleAdd: !prev.toggleAdd
            }
        })
    }

    render() {
        return (
            <div>


                <Post />

                {/* {this.state.posts.map((post => {
                    <Post />

                }))} */}



                <button
                onClick={()=> this.toggle()}
                >create a post</button>

                {this.state.toggleAdd && <Add/>}
                




            </div>
        )
    }
}