import React, { Component } from "react";
import '../../style/story.css';
import jenan from '../../Images/jenan.jpg';

function Story(props) {
    return (
        <div className="section-story">
            <div class="row">
                <div class="col-sm">
                    <img src={jenan} alt="jenan-imge" className="user-img blake" />
                    <h2 className="name-user">Jenan</h2>
                </div>
                <div class="col-sm">
                    <img src='/Images/khadeja.jpg' alt="khadeejah-imge" className="user-img" />
                    <h2 className="name-user">Khadeejah</h2>
                </div>
                <div class="col-sm">
                    <img src='/Images/ashraf.jpg' alt="jenan-imge" className="user-img" />
                    <h2 className="name-user">Ashraf</h2>
                </div>
                <div class="col-sm">
                    <img src='/Images/angam.jpeg' alt="angam-imge" className="user-img blake" />
                    <h2 className="name-user">Angam</h2>
                </div>
                <div class="col-sm">
                    <img src='/Images/razan.png' alt="jenan-imge" className="user-img" />
                    <h2 className="name-user">Razan</h2>
                </div>
                <div class="col-sm">
                    <img src='/Images/0.jpg' alt="jenan-imge" className="user-img blake" />
                    <h2 className="name-user">Amal</h2>
                </div>

                <div class="col-sm">
                    <img src='/Images/moh1.jpg' alt="jenan-imge" className="user-img" />
                    <h2 className="name-user">Jasem</h2>
                </div>
                <div class="col-sm">
                    <img src='/Images/moh2.jpg' alt="jenan-imge" className="user-img" />
                    <h2 className="name-user">AlShwaiki</h2>
                </div>

            </div>

        </div>
    )
};

export default Story;
