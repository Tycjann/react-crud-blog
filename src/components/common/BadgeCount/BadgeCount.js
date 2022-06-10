import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPostByCategoryId } from '../../../redux/postsRedux.js';

const BadgeCount = props => {
  const posts = useSelector(state => getAllPostByCategoryId(state, props));
  return (
    <>
      <Badge bg="primary" pill>
        {Object.keys(posts).length}
      </Badge>
    </>
  );

};

export default BadgeCount;