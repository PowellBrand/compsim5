import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {createBook, getBooks} from '../../ducks/reducer';
import './archive.css'


class Archive extends Component {
   
   

    render() {
       
        return (
            <div className="archiveMain" style={{backgroundColor: this.props.bgColor}}>
               <a href = '/'><button>Go Home</button></a>
             
            </div>

        )
    }
}
function mapStateToProps(state){
    return{
        bookData: state.bookData
    }
}


export default  connect(mapStateToProps, {getBooks})(Archive)
