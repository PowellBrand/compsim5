import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import Library from '../library/library';


class Home extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (
            <div>
                {/* 56D */}
                <audio controls>
                    <source src='http://www.thesoundarchive.com/play-wav-files.asp?sound=archer-sounds/bloody-mary.mp3' type="audio/mpeg" />
                </audio>
               <a href = '/library'><button>Go to Library</button></a>

               {/*36H*/}
            <Library/>

            </div>

        )
    }
}


export default (Home)
