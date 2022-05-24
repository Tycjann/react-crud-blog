import { Row, Col } from 'react-bootstrap';
import PostCard from '../PostCard/PostCard';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux.js';

const Posts = () => {
  
  const posts = useSelector(getAllPosts);
  
  return (
    <Row xs={1} md={2} lg={3} className="g-2">
    {posts.map(post => 
      <Col key={post.id}>
        <PostCard
          id={post.id}
          title={post.title}
          author={post.author}
          publishedDate={post.publishedDate}
          shortDescription={post.shortDescription}
        />
      </Col>
    )}
    </Row>
  );
};

export default Posts;