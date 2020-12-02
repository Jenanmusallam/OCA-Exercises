import React, { Component } from 'react';
import YouTube from 'react-youtube';


//https://youtu.be/V2nh-i5lipU
//https://www.youtube.com/watch?v=V2nh-i5lipU
class ReactYouTubeExample extends Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo()
        console.log(event.target)
    }
    videoOnPlay(event) {
        // access to player in all event handlers via event.target
        const Player = event.target
        console.log(Player.getCurrentTime())
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {// https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        }
        const { videoId } = this.props
        return (
            <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} onPlay={this.videoOnPlay} className="videoYoutube" />
        )
    }
}
export default ReactYouTubeExample