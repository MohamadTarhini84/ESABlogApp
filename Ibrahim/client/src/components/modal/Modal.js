import "./modal.css";
import { useState } from "react";

// import { Posts } from "../../dummyData";

function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);


    };

    return (
        <div>
            <button onClick={toggleModal} className="btn-modal">
                comments
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <p>
                            username:
                            comments
                        </p>
                        {/* <p className="postCommentText">{post.comment}</p> */}
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;