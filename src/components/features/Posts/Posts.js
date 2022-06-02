import { Row, Col } from 'react-bootstrap';
import PostCard from '../PostCard/PostCard';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux.js';
import dateToStr from '../../../utils/dateToStr.js';

const Posts = () => {
  
  const posts = useSelector(getAllPosts);

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
          // publishedDate={JSON.stringify(post.publishedDate)}
          shortDescription={post.shortDescription}
        /> 
      </Col>
    )}
    </Row>
  );
};

export default Posts;