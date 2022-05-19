import Posts from "../../features/Posts/Posts";
import { Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Home = () => {

  return (
    <>
      <Row className="mb-4">
        <Col><h2>All post</h2></Col>
        <Col className='text-end'>
          <Button as={NavLink} to="/post-add" variant="outline-info">Add post</Button>
        </Col>
      </Row>
      <Posts/>
    </>
  );

};

export default Home;