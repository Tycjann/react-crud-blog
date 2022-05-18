import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const PostEdit = () => {
  const { id } = useParams();
  if (!id) return <Navigate to="/NotFound" />
  return (
    <h1>Post Edit</h1>
  );
};

export default PostEdit;