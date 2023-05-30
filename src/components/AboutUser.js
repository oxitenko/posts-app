import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsersFetch} from "../redux-saga/usersState";
import Loader from "./Loader";
import Card from 'react-bootstrap/Card';
import avatar from "../images/juicy-yellow-cat.png"
import Container from "react-bootstrap/Container";
import PostedCard from "./PostedCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BiArrowBack} from "react-icons/bi"

export const AboutUser = () => {

    const dispatch = useDispatch();
    const {userId} = useParams();
    const posts = useSelector(state => state.posts.posts.data);
    const users = useSelector(state => state.users.users.data);
    const userPosts = posts?.filter(user => user.userId === Number(userId));
    const userInfo = users?.filter(user => user.id === Number(userId));
    const loading = useSelector(state => state.users.isLoading);
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUsersFetch())
    }, [dispatch]);

    if (loading) {
        return <Loader/>
    }

    return (<>
        <Container>
            <h2 style={{fontSize: "38px", lineHeight: "40px", textAlign: "start", marginBottom: "20px"}}>About
                user</h2>
            {userInfo?.map(user => <Card key={user.id} style={{width: '100%', alignItems: "center"}}>
                <Card.Img src={avatar} style={{width: "60px", height: "70px", objectFit: "contain"}}/>
                <Card.Body>
                    <Card.Title>Name: {user.name}</Card.Title>
                    <Card.Text>Nickname: {user.username}</Card.Text>
                    <Card.Text>Email: {user.email}</Card.Text>
                </Card.Body>
            </Card>)}
            <h2 style={{
                fontSize: "38px", lineHeight: "40px", textAlign: "start", marginBottom: "20px", marginTop: "20px"
            }}>User's posts: </h2>
            <Row xs={1} md={1} lg={1} className="justify-content-center gap-4">
                {userPosts?.map(post => <Col style={{display: "flex"}} key={post.id}>
                    <PostedCard post={post}/>
                </Col>)}
            </Row>
        </Container>
        <div onClick={() => navigate(-1)} style={{
            display: "flex", alignItems: "center", justifyContent: "center", height: "50px", cursor: "pointer"
        }}>
            <BiArrowBack size={30} color="#0d6efd"/>
            <p style={{margin: "0px", marginLeft: "10px", fontSize: "24px", color: "#0d6efd"}}>Back</p>
        </div>
    </>);
};

export default AboutUser;