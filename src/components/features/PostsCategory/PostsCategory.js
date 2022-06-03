import { Row, Col } from 'react-bootstrap';
import PostCard from '../PostCard/PostCard';
import { useSelector } from 'react-redux';
import dateToStr from '../../../utils/dateToStr.js';
import { getAllPostByCategoryId } from '../../../redux/postsRedux.js';
import { getSingleCategoryByName } from '../../../redux/categoriesRedux.js';

const PostsCategory = props => {

  let categoryId = useSelector(state => getSingleCategoryByName(state, props.categoryName));

  // ? Grzechu: To jest sensowne zabezpieczenie przed wpisaniem w adresie nieistniejącej kategorii?
  // ? bez tego mam error z const posts... linia #16 
  if (!categoryId) categoryId = {id: 0, category: ''};

  const posts = useSelector(state => getAllPostByCategoryId(state, categoryId.id));

  if (posts.length === 0) return (
    <Row>
      <Col xs={12} md={6} lg={4}>
        <p>No post in this category...</p>
      </Col>
    </Row >
  )
  else 
  return (
    <Row className="g-2">
      {posts.map(post =>
        <Col key={post.id} xs={12} md={6} lg={4}>
          <PostCard
            id={post.id}
            title={post.title}
            author={post.author}
            categoryId={post.categoryId}
            publishedDate={dateToStr(post.publishedDate)}
            shortDescription={post.shortDescription}
          />
        </Col>
      )}
    </Row>
  );
};

export default PostsCategory;