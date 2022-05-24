import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import EditPostForm from '../../features/EditPostForm/EditPostForm';

const PostEdit = () => {
  const { id } = useParams();
  if (!id) return <Navigate to="/NotFound" />
  return (
    <Row className="mb-2 justify-content-md-center">
      <Col xs={8} md={8} lg={8}>
        <h1>Post Edit</h1>
        <EditPostForm />
      </Col>
    </Row>
  );
};

export default PostEdit;