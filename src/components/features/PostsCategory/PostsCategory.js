import RowPostCard from '../RowPostCard/RowPostCard';
import RowNoCategoryHeader from '../RowNoCategoryHeader/RowNoCategoryHeader';
import { useSelector } from 'react-redux';
import { getAllPostByCategoryId } from '../../../redux/postsRedux.js';
import { getSingleCategoryByName } from '../../../redux/categoriesRedux.js';
import ConditionRenderer from '../../common/ConditionRenderer/ConditionRenderer.js'

const PostsCategory = props => {

  const category = useSelector(state => getSingleCategoryByName(state, props.categoryName));
  const posts = useSelector(state => getAllPostByCategoryId(state, category));

 return (
   <>
    {/* option no 1 */}
    {/* {!category && <RowNoCategoryHeader />} */}

    {/* option no 2 */}
    <ConditionRenderer condition={!category}>
      <RowNoCategoryHeader/>
    </ConditionRenderer>
    
    <RowPostCard posts={posts}/>
   </>
 )
};

export default PostsCategory;