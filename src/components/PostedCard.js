import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import avatar from "../images/juicy-yellow-cat.png"
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
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
                2 days ago
            </Card.Footer>
        </Card>
    );
};

export default PostedCard;