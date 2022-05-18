import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const SinglePost = () => {

  const { id } = useParams();
  if (!id) return <Navigate to="/NotFound" />
  return (
    <h1>Post</h1>
  );
};

export default SinglePost;