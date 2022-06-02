import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSingleCategoryById } from '../../../redux/categoriesRedux.js';

const Post = ({ id, title, author, categoryId, publishedDate, shortDescription}) => {
  
  const categoryName = useSelector(state => getSingleCategoryById(state, categoryId));
  
  return (
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mt-2">Author: <span className="fw-normal">{author}</span></Card.Subtitle>
          <Card.Subtitle className="mt-1 mb-2">Published: <span className="fw-normal">{publishedDate}</span></Card.Subtitle>
        <Card.Subtitle className="mt-1 mb-2">Category: <span className="fw-normal">{categoryName.category}</span></Card.Subtitle>
          <Card.Text>{shortDescription}</Card.Text>
          <Button as={NavLink} to={"/post/" + id} variant="primary">Read more</Button>
        </Card.Body>
      </Card>
  );
};

export default Post;