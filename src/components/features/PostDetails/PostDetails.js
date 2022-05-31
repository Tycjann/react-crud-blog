import { Col, Row, Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePostById } from '../../../redux/postsRedux.js';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { removePost } from '../../../redux/postsRedux.js';
import dateToStr from '../../../utils/dateToStr.js';

const PostDetails = ({id}) => {

  const post = useSelector(state => getSinglePostById(state, id));

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleDelete = () => {
    setShow(false);
    dispatch(removePost(post.id));
    // console.log('Delete');
  };
  const handleShow = () => {
    setShow(true);
    // console.log('Open');
  };
  const handleClose = () => {
    setShow(false);
    // console.log('Close');
  };

  if (!post) return <Navigate to="/" />
  else 
  return (
    <>
      <Row className="mb-2 justify-content-md-center">
        <Col xs={3} md={3} lg={3}>
          <h1 className="display-6">{post.title}</h1>
        </Col>
        <Col xs={3} md={3} lg={3} className='text-end'>
          <Button as={NavLink} to={"/post-edit/" + id} variant="outline-info">Edit</Button>
          {/* <Button as={NavLink} to="/post-add" variant="outline-danger" className="ms-2">Delete</Button> */}
          <Button variant="outline-danger" className="ms-2" onClick={handleShow}>Delete</Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Delete this post: {post.title}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
          </Modal>

        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={6} md={6} lg={6}>
          <p className="mb-0"><span className="fw-bold">Author:</span> {post.author}</p>
          <p><span className="fw-bold">Published:</span> {dateToStr(post.publishedDate)}</p>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
          <hr/>
        </Col>
      </Row>
    </>
  );
};

export default PostDetails;