import PostsCategory from "../../features/PostsCategory/PostsCategory";
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter.js';

const Category = () => {

  const { id } = useParams();
  const categoryName = capitalizeFirstLetter(id);

  return (
    <>
      <Row className="mb-4">
        <Col><h2>Category: {categoryName}</h2></Col>
      </Row>
      <PostsCategory categoryName={categoryName} />
    </>
  );

};

export default Category;