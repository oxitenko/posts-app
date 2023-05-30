import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import {useDispatch, useSelector} from "react-redux";
import {getCommentsFetch} from "../redux-saga/commentsState";
import avatar from "../images/juicy-yellow-cat.png"


const Comments = ({id}) => {
    const [showComments, setShowComments] = useState(false);
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.comments.data)

    const FetchDataAndShowComments = () => {
        if (showComments === false) {
            dispatch(getCommentsFetch(id))
        }
        setShowComments(!showComments)
    };

    return (
        <Row>
            <Col md={6} style={{width: "100%"}} className="mb-2">
                <Button onClick={FetchDataAndShowComments} className="mb-2">
                    <span>Show Comments</span>
                </Button>
                {comments?.map(comment =>
                    <Toast className="mb-3" key={comment.id} show={showComments}>
                    <Toast.Header>
                        <img
                            src={avatar}
                            className="rounded me-2"
                            style={{width: "20px", height: "20px", objectFit: "cover"}}
                            alt="avatar"
                        />
                        <strong className="me-auto">{comment.email}</strong>
                        <small>{Math.floor(Math.random() * 10)} mins ago</small>
                    </Toast.Header>
                    <Toast.Body style={{textAlign: "start"}}>{comment.body}</Toast.Body>
                </Toast>)}
            </Col>
        </Row>);
};

export default Comments;