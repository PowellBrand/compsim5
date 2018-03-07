import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
import {createBook} from '../../ducks/reducer';


class Library extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData: []
        }

    }

    componentDidMount(){
        axios.get('/api/getBooks').then(res => {
            console.log(res.data, 'data')
            this.setState({
                bookData: res.data
            })
        })
    }


    render() {
        // 36F
        let bookInfo = this.state.bookData.map(book =>{
            <div>
                <h2>Title: {book.title}</h2>
                <h3>Author: {book.author}</h3>
                <p>dds: {book.dds}</p>
                <p>Availabilty: {book.availability}</p>
            </div>
        })

        return (
            <div>
                <header>
                    <h1>Welcome to the Library</h1>
                    <div>
                        {bookInfo}
                    </div>
                </header>
             
            </div>

        )
    }
}


export default (Library)
