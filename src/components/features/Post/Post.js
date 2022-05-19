import { Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Post = ({post}) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mt-2">Author: <span className="fw-normal">{post.author}</span></Card.Subtitle>
          <Card.Subtitle className="mt-1 mb-2">Published: <span className="fw-normal">{post.publishedDate}</span></Card.Subtitle>
          <Card.Text>{post.shortDescription}</Card.Text>
          <Button as={NavLink} to={"/post/" + post.id} variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;