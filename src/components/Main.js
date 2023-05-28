import {useDispatch, useSelector} from "react-redux";
import PostedCard from "./PostedCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import {useEffect} from "react";
import {getPostsFetch} from "../redux-saga/postsState";

const Main = () => {
    const posts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsFetch());
    }, [dispatch]);

    return (<Container>
            <Row xs={1} md={1} lg={1} className="justify-content-center gap-4">
                {posts?.map(post => <Col style={{display: "flex"}} key={post.id}>
                    <PostedCard post={post}/>
                </Col>)}
            </Row>
        </Container>);
};

export default Main;