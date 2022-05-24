import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";
import { editPost } from '../../../redux/postsRedux.js';
import PostForm from '../../features/PostForm/PostForm.js';
import { getSinglePostById } from '../../../redux/postsRedux.js';
import { useParams } from 'react-router';

const EditPostForm = props => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  const { id } = useParams();
  
  const post = useSelector(state => getSinglePostById(state, id));
  // console.log('post:', post);

  const handleSubmit = post => {
    dispatch(editPost({...post, id}));
    navigate(-1)
    // navigate('/')
  };

  if (!post) return <Navigate to="/" />
  else 
  return (
    <PostForm 
      action={handleSubmit} 
      actionText='Save edit post'
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default EditPostForm;