import PostForm from '../../features/PostForm/PostForm';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux.js';
import { useNavigate } from "react-router-dom";

const AddPostForm = props => {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(addPost(post));
    // * https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
    navigate("/");
    // navigate("/", { replace: true });
    // navigate(-1)
  };

  return (
    <PostForm 
      action={handleSubmit} 
      actionText='Add post'
    />
  );
};

export default AddPostForm;