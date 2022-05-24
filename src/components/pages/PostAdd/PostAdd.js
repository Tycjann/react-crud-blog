import { Col, Row } from 'react-bootstrap';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostAdd = () => {
  return (
    <Row className="mb-2 justify-content-md-center">
      <Col xs={8} md={8} lg={8}>
        <h1>Post Add</h1>
        <AddPostForm/>
      </Col>
    </Row>
  )
};

export default PostAdd;