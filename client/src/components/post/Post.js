import "./post.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MoreVert } from "@mui/icons-material";
import Comment from "./Comment";

function PostItem({ item }) {

    const [like, setLike] = useState(item.usersWhoLiked.length)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (

        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img
            className="postProfileImg"
            src={Users.profilePicture}
            alt=""
          /> */}
                        <span className="postUsername">
                            {item.username}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{item.caption}</span>
                    <img className="postImg" src={item.mediaPath} alt="" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{item.usersWhoLiked.length} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        {/* <span className="postCommentText">{post.comment} comments</span> */}
                        {/* <span className="postCommentText"><Modal /></span> */}
                        <div>
                            {comment.map((item) => (
                                <Comment key={item.id} item={item} />
                            ))}
                        </div>
                        <div className="comment-flexbox">
                            <h3 className="comment-text">Comment</h3>
                            <textarea
                                // value={text}
                                // onChange={onChangeHandler}
                                className="input-box"
                            />
                            <button
                                // onClick={onClickHandler}
                                className="comment-button">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}


function Post() {
    const [feed, setFeed] = useState([]);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/api/posts/${item.userId}`);
            const data = response.data;
            setFeed(data);
        }

        async function fetchComment() {
            const response = await axios.get(`/api/comments/${item.postId}`);
            const data = response.data;
            setComment(data);

        }
        fetchData();
        fetchComment();
    }, []);

    return (
        <div>
            {feed.map((item) => (
                <PostItem key={item.id} item={item} />
            ))}

        </div>
    );
}

export default Post;
