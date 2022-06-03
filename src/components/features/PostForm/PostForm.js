import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import ErrorTextValidate from '../../common/ErrorTextValidate/ErrorTextValidate.js'
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux.js';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const newDate = new Date()
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || newDate);
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [categoryId, setCategoryId] = useState(props.categoryId || '');
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  
  const errorsMessages = {
    thisFieldRequired: 'This field is required',
    minLength03: 'Minimum 3 characters',
    minLength20: 'Minimum 20 characters',
  };
  
  const handleSubmit = () => {
    // ! bug: https://github.com/zenoamaro/react-quill/issues/675
    // if (!content || content === '<p><br></p>') setContentError(true); else setContentError(false);
    // if (!publishedDate) setDateError(true); else setDateError(false);
    // setDateError(!publishedDate);
    // console.log('content:', content);
    // if (contentError === false && dateError === false) 
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate) {
      action({ title, author, categoryId, publishedDate, shortDescription, content });
    }
  };

  // ! Bug - duplicate toolbar: https://github.com/zenoamaro/react-quill/issues/784
  // ! Temporarily solved: remove <React.StrictMode></React.StrictMode>
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    }
  };

  const categories = useSelector(getAllCategories);

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row>
        <Col md={1}><Form.Label className="pt-2 align-baseline">Published</Form.Label></Col>
        <Col sm={11}>
          <DatePicker
            placeholder="Title"
            selected={publishedDate}
            value={publishedDate}
            onChange={setPublishedDate}
            className="mb-2 form-control"
            dateFormat="dd/MM/yyyy"
          />
          {dateError && <ErrorTextValidate text={errorsMessages.thisFieldRequired} />}
        </Col>
      </Row>

      <FloatingLabel
        controlId="titleInput"
        label="Title"
        className="mb-2"
      >
        <Form.Control
          // required
          {...register("title", {
            required: true,
            minLength: 3,
          })}
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        {errors.title 
          && errors.title.type === "required" 
          && <ErrorTextValidate text={errorsMessages.thisFieldRequired} />}
        {errors.title 
          && errors.title.type === "minLength" 
          && <ErrorTextValidate text={errorsMessages.minLength03} />}
      </FloatingLabel>

      <FloatingLabel
        controlId="authorInput"
        label="Author"
        className="mb-2"
      >
        <Form.Control
          // required
          {...register("author", {
            required: true,
            minLength: 3,
          })}
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        {errors.author 
          && errors.author.type === "required" 
          && <ErrorTextValidate text={errorsMessages.thisFieldRequired} />}
        {errors.author 
          && errors.author.type === "minLength" 
          && <ErrorTextValidate text={errorsMessages.minLength03} />}
      </FloatingLabel>

      <Form.Select
        {...register("categoryId", {
          required: true,
        })}
        aria-label="Select category..."
        name="categoryId"
        value={categoryId}
        onChange={e => setCategoryId(e.target.value)}
      >
        <option value="">Select category...</option>
        {categories.map(category =>
          <option key={"" + category.id + ""} value={""+ category.id + ""}>{category.category}</option>
        )}
      </Form.Select>
      
      {errors.categoryId  && <ErrorTextValidate text={errorsMessages.thisFieldRequired} />}

      <FloatingLabel
        controlId="shortDescriptionInput"
        label="Short description"
        className="mb-2 mt-2"
      >
        <Form.Control
          // required
          {...register("shortDescription", {
            required: true,
            minLength: 20,
          })}
          type="text"
          placeholder="Short description"
          name="shortDescription"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
        />
        {errors.shortDescription 
          && errors.shortDescription.type === "required" 
          && <ErrorTextValidate text={errorsMessages.thisFieldRequired} />}
        {errors.shortDescription 
          && errors.shortDescription.type === "minLength" 
          && <ErrorTextValidate text={errorsMessages.minLength20} />}
      </FloatingLabel>

      <ReactQuill
        name="mainContentInput"
        modules={modules}
        className="mb-2"
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder=""
      />
      {contentError && <ErrorTextValidate text={errorsMessages.thisFieldRequired} /> }

      <Row className="mt-2">
        <Col className='text-end'>
          <Button variant="primary" type="submit">{actionText}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PostForm;