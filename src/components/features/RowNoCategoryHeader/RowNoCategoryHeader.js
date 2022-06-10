import { Row, Col } from 'react-bootstrap';

const RowNoCategoryHeader = ({posts}) => {
  return (
    <Row>
      <Col xs={12}>
        <p>No post in this category...</p>
        <h6 className="mb-3">Check out the rest of the articles:</h6>
      </Col>
    </Row >
  )
}

export default RowNoCategoryHeader;