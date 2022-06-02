import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import SinglePost from "./components/pages/SinglePost/SinglePost";
import PostAdd from "./components/pages/PostAdd/PostAdd";
import PostEdit from "./components/pages/PostEdit/PostEdit";
import Category from "./components/pages/Category/Category";
import About from "./components/pages/About/About";
import Categories from "./components/pages/Categories/Categories";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/features/Header/Header";
import Footer from "./components/features/Footer/Footer";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:id" element={<SinglePost/>}/> 
        <Route path="/post-add" element={<PostAdd/>}/>
        <Route path="/post-edit/:id" element={<PostEdit/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<Category/>}/> 
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;