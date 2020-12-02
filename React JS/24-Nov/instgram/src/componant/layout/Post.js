import React, { useState } from "react"
import '../../style/post.css'

function Post(props) {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div className="card-info">
                <div className="firstPost">
                    <img key={props.key} src={props.image} alt="jenan-imge" className="user-img-Post" />
                    <h5>{props.name}</h5>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <p className="addres">{props.addres}</p>
                <img src={props.imagePost} alt="" className="img-Post" />
                <div className="section-icon">
                    <ul className="nav-links">

                        <li onClick={plus}><i class="far fa-heart heart"></i></li>
                        <li><i class="far fa-comment"></i></li>
                        <li><i class="far fa-paper-plane"></i></li>
                        <li><svg viewBox="0 0 16 16" class="bi bi-bookmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                        </svg></li>
                    </ul>
                </div>
                <div className="section-coment">
                    <p>{count} Like</p>
                    <p >{props.user1} <span className="comments">{props.coment1}</span></p>
                    <p>{props.user2} <span className="comments">{props.coment2}</span></p>
                </div>

            </div>   <div className="space"></div></div>

    );
}
export default Post;