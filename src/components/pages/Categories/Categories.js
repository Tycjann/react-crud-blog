import CategoriesList from "../../features/CategoriesList/CategoriesList";
import { Row, Col } from 'react-bootstrap';

const Categories = () => {

  return (
    <>
      <Row className="mb-4 justify-content-md-center">
        <Col xs={6}><h2>All categories</h2></Col>
      </Row>
      <CategoriesList />
    </>
  );

};

export default Categories;