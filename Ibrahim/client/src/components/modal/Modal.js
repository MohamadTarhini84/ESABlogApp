import "./modal.css";
import { useState } from "react";
import Comments from "../comments/Comments";

// import { Posts } from "../../dummyData";

function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);


    };

    return (
        <div>
            <button onClick={toggleModal} className="btn-modal">
                Comments
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Comments />


                        {/* <p>
                            username:
                            comments
                        </p>
                        <p className="postCommentText">{post.comment}</p> */}

                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;