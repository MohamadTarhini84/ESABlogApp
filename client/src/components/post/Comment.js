import "./comment.css";

function Comment ({item}){

    return(
        <div className="commentWrapper">
            <div className="commentTop">
            <img
                  className="commentProfileImg"
                  src=""
                  alt=""
                />
                <span className="commentUsername">
                  {item.username}
                </span>
            </div>
            <div className="commentButton">
                {item.caption}
            </div>
        </div>
    )

}

export default Comment;