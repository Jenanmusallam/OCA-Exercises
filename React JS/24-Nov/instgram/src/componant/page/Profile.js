import React from 'react';
import jenan from '../../Images/jenan.jpg';
import '../../style/profile.css'
import Galary from "../layout/Galary"


function profile() {
    return (
        <div className="Profile">
            <div className="container">
                <div className="upper-profile">
                    <div class="row">
                        <div class="col-sm-5">
                            <img src={jenan} alt="user" className="Img-Profile" />
                        </div>
                        <div class="col-sm-7">
                            <div className="firstProfile">
                                <h3>jenanmusallam96</h3>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit Profile</button>
                                <i class="fas fa-cog"></i>
                            </div>
                            <div className="firstProfile">
                                <h5>396 <span>Posts</span> </h5>
                                <h5> 675 <span>Followers</span></h5>
                                <h5>1,486 <span>Following</span></h5>
                            </div>
                            <div className="sumProfile">
                                <h5>Jenan A Musallam.. جنان مسلم </h5>
                                <p>I'm 24 years old... 😊</p>
                                <p>   I live in Amman🇯🇴</p>
                                <p>  Studied MIS at Philadelphia UN</p>
                                <p> أبتسم فالعالم آلة تصوير 📸 😀</p>
                                <p> الحياه تعلمك كيف تتألم بصمت😷ولتصبح أقوى💪وتبتسم😊</p>
                                <a href="jenanmusallam.sarahah.com">jenanmusallam.sarahah.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secandProfile">
                    <p><svg viewBox="0 0 16 16" class="bi bi-grid-3x3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4V6h4v4H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0h4v4H6v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0H6V1h4v4z" />
                    </svg> <span> POSTS</span> </p>
                    <p><svg fill="#8e8e8e" viewBox="0 0 48 48"><path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path></svg> <span> IGTV</span></p>
                    <p><svg viewBox="0 0 16 16" class="bi bi-bookmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg> <span> SAVED</span> </p>
                    <p><svg aria-label="Tagged" class="_8-yf5 " fill="#8e8e8e" viewBox="0 0 48 48" ><path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path></svg> <span> TAGGED</span></p>
                </div>
                <Galary />

            </div>
        </div>
    )
};

export default profile;
