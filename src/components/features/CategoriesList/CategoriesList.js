import { Row, Col, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux.js';
import BadgeCount from '../../common/BadgeCount/BadgeCount'

const CategoriesList = () => {

  const categories = useSelector(getAllCategories);

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <ListGroup variant="flush">
            {categories.map(category =>
              <ListGroup.Item 
                key={category.id} 
                className="d-flex justify-content-between align-items-start"
              >
                <NavLink to={"/category/" + category.category.toLowerCase()} variant="outline-info">{category.category}</NavLink>
                {/* <BadgeCount {...category} /> */}
                <BadgeCount id={category.id} />
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default CategoriesList;