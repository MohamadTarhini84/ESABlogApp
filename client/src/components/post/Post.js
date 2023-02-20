import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./postItem";
import "./post.css";
import { useParams} from "react-router-dom";

function Post() {
    const [feed, setFeed] = useState(null);
    const [comment, setComment] = useState([]);
    let {postId}=useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/posts/post/'+postId);
            const data = response.data;
            setFeed(data);
        }

        // async function fetchComment() {
        //     const response = await axios.get('/api/comments/');
        //     const data = response.data;
        //     setComment(data);
        // }
        fetchData();
        // fetchComment();
    }, []);

    return (
        <div className="mt-16 w-1/2 ml-56">
            {feed && <PostItem post={feed} comments={comment}/>}
            {!feed && <h1>THIS POST DOES NOT EXIST!!!</h1>}
        </div>
    );
}

export default Post;
