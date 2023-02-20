import "./comment.css";

function Comment (){

    return(
        <div className="commentWrapper">
            <div className="commentTop">
            <img
                  className="commentProfileImg"
                  src=""
                  alt=""
                />
                <span className="commentUsername">
                  {/* {cooment.username} */}
                  username
                </span>
            </div>
            <div className="commentButton">
                {/* {comment.body} */}
            </div>
        </div>
    )

}

export default Comment;