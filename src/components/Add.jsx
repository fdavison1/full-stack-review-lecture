import React from 'react'

export default class Add extends React.Component{
    state = {
        title: '',
        imgURL: '',
        content: ''

    }
    render(){
        return(
            <div>
                {/* Add.jsx */}

            

            <input placeholder='title'
             type="text"/>
            <input 
            placeholder='URL'
            type="text"/>
            <div><img src={this.state.imgURL} alt=""/></div>
            <textarea placeholder='type content here!'/>

            <button>post</button>



            </div>
        )
    }
}