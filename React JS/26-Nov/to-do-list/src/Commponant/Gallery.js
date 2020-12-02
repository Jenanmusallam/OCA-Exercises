import React, { Component } from 'react';
import ReactYouTubeExample from '../Commponant/Video'


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [{
                imgSrc: '../Images/1.jpg',
            },
            {
                imgSrc: '../Images/2.jpg',
            },
            {
                imgSrc: '../Images/3.jpg',
            },
            {
                imgSrc: '../Images/4.jpg',
            },
            {
                imgSrc: '../Images/5.jpg',
            },
            {
                imgSrc: '../Images/6.jpg',
            },
            {
                imgSrc: '../Images/7.jpg',
            },
            {
                imgSrc: '../Images/8.jpg',
            },
            {
                imgSrc: '../Images/9.jpg',
            },
            {
                imgSrc: '../Images/10.jpg',
            },
            {
                imgSrc: '../Images/11.jpg',
            },
            {
                imgSrc: '../Images/12.jpg',
            },
            {
                imgSrc: '../Images/13.jpg',
            },
            {
                imgSrc: '../Images/14.jpg',
            },

            ],
        }
    }
    render() {
        const galleryList = this.state.imgList.map(imges => {
            return (
                <button onClick="" style={{ background: 'none', border: 'none' }} key={imges.imgSrc}> <img src={imges.imgSrc} className="imgGallery " /> </button>
            );
        });
        return (
            <React.Fragment>
                <div className="container">
                    <div className="videoYoutube animate__animated animate__flipInX animate__delay-2s ">
                        <ReactYouTubeExample videoId='V2nh-i5lipU' />
                    </div>
                    <div className="item animate__animated animate__backInRight animate__delay-2s" >
                        {galleryList}
                    </div>
                </div></React.Fragment>
        );
    }
}

export default Gallery;


