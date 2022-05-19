import { Row } from 'react-bootstrap';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux.js';

const Posts = () => {
  
  const posts = useSelector(getAllPosts);
  
  return (
    <Row xs={1} md={2} lg={3} className="g-2">
    {posts.map(post => 
      <Post key={post.id} post={post} />
      
    )}
    </Row>
  );
};

export default Posts;