import React from 'react'
import ReactDOM from 'react-dom';

import BookItFormWrapper from '../styles/BookItForm/BookItFormWrapper.js'



const BookItForm = (props) => (
        <BookItFormWrapper>
            <p>dates</p>
            <input style = {{display: 'inline'}} ></input>
            <div style = {{display: 'inline'}}>hello world</div>
            <input style = {{display: 'inline'}} ></input>
        </BookItFormWrapper>
    )

export default BookItForm