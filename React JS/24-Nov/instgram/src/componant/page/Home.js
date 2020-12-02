import React from 'react';
import Story from '../layout/Story'
// import StoryData from '../object/storyData'
import PostInformation from '../object/PostData'
import Post from '../layout/Post'

const InfUser = PostInformation.map(x => <Post name={x.name} image={x.image} imagePost={x.imagePost} addres={x.addres} user1={x.user1} coment1={x.coment1} user2={x.user2} coment2={x.coment2} />)


function Home() {
    return (
        <div className=" Home">
            <div className="container">
                <div className="space"></div>
                <Story />
                <div className="space"></div>
                {InfUser}
               
            </div>
        </div>
    )
};

export default Home;