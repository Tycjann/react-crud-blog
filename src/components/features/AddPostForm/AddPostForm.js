import { Form, Button, Row, Col } from 'react-bootstrap';
import FormBody from '../../common/FormBody/FormBody';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux.js';
import { useNavigate } from "react-router-dom";

const AddPostForm = props => {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ 
      title: e.target[0].value, 
      author: e.target[1].value,
      publishedDate: e.target[2].value,
      shortDescription: e.target[3].value,
      content: e.target[4].value
    }));
    // * https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
    navigate("/");
    // navigate("/", { replace: true });
    // navigate(-1)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormBody/>
      <Row className="mt-2">
        <Col className='text-end'>
          <Button variant="primary" type="submit">Add post</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddPostForm;