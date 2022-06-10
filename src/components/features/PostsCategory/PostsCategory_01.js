import { Row, Col } from 'react-bootstrap';
import PostCard from '../PostCard/PostCard';
import { useSelector } from 'react-redux';
import dateToStr from '../../../utils/dateToStr.js';
import { getAllPostByCategoryId } from '../../../redux/postsRedux.js';
import { getSingleCategoryByName } from '../../../redux/categoriesRedux.js';

const PostsCategory = props => {

  const category = useSelector(state => getSingleCategoryByName(state, props.categoryName));
  const posts = useSelector(state => getAllPostByCategoryId(state, category));
  
  return (
    <>
      {!category ? <Row>
        <Col xs={12}>
          <p>No post in this category...</p>
          <h6 className="mb-3">Check out the rest of the articles:</h6>
        </Col>
      </Row > : null }
      
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
    </>
  )
};

export default PostsCategory;