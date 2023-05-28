import Card from "react-bootstrap/Card";
import avatar from "../images/juicy-yellow-cat.png"
import Comments from "./Comments";
const PostedCard = ({ post }) => {

    return (
        <Card style={{width: "100%"}}>
            <Card.Header style={{display: "flex", alignItems: "center"}}>
                <Card.Img src={avatar} style={{width: "40px", height: "40px", objectFit: "cover", marginRight: "20px"}}/>
                <Card.Title>{post.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {post.body}
                </Card.Text>
                <Comments id={post.id}/>
            </Card.Body>
            <Card.Footer>
                {Math.floor(Math.random() * 20)} days ago
            </Card.Footer>
        </Card>
    );
};

export default PostedCard;