import {useSelector} from "react-redux";
import PostedCard from "./PostedCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import Loader from "./Loader";

const Main = () => {
    const posts = useSelector(state => state.posts.posts.data)
    const loading = useSelector(state => state.posts.isLoading)

    if (loading) {
        return <Loader/>
    }

    return (<Container>
        <h2 style={{textAlign: "start", marginBottom: "20px"}}>See what's new with the other kittens!</h2>
        <Row xs={1} md={1} lg={1} className="justify-content-center gap-4">
            {posts?.map(post => <Col style={{display: "flex"}} key={post.id}>
                <PostedCard post={post}/>
            </Col>)}
        </Row>
    </Container>);
};

export default Main;