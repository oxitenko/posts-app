import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import myAvatar from "../images/marginalia-robot-cat-1.png"

const AboutMe = () => {
    return (<Container>
            <h2>About me</h2>
            <Card style={{flexDirection: "row", alignItems: "center", marginTop: "30px"}}>
                <Card.Img style={{width: "100px", height: "100px", objectFit: "contain", marginLeft: "20px"}}
                          src={myAvatar} alt="avatar"/>
                <Card.Body style={{fontSize: "18px", lineHeight: "20px", display: "flex", flexDirection: "column", gap: "20px"}}>
                    <Card.Text>
                        My name is Oksana, I am a beginner front-end developer with knowledge of React.js and a desire
                        to develop in web development of intuitive interfaces. She graduated from Yandex.Practicum, in
                        the past she was a lawyer in an IT company.
                    </Card.Text>
                    <Card.Text>
                        I have a good command of Agile practices, I was a scrum master and a retro master.
                    </Card.Text>
                    <Card.Text>
                        I'm interested in 3-D and effects, I'm currently taking a course on Three.js by Bruno Simong. I
                        am also currently taking a course in Algorithms and Data Structures, as I believe that it is
                        important for a developer of any level to have a basic knowledge of programming.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>);
};

export default AboutMe;