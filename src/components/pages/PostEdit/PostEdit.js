import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
// import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostEdit = () => {
  const { id } = useParams();
  if (!id) return <Navigate to="/NotFound" />
  return (
    <>
      <h1>Post Edit</h1>
      {/* <AddPostForm/> */}
    </>
  );
};

export default PostEdit;