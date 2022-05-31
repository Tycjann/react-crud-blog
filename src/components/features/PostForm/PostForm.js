import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "react-hook-form";

import ErrorTextValidate from '../../common/ErrorTextValidate/ErrorTextValidate.js'

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const newDate = new Date()
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || newDate);
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleSubmit = () => {
    // if (!content || content === '<p><br></p>') setContentError(true); else setContentError(false);
    // if (!publishedDate) setDateError(true); else setDateError(false);
    // setDateError(!publishedDate);
    // console.log('content:', content);
    // if (contentError === false && dateError === false) 
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

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
          {dateError && <ErrorTextValidate text={'This field is required'} />}
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
        {errors.title && <ErrorTextValidate text={'This field is required'} />}
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
        {errors.author && <ErrorTextValidate text={'This field is required'} />}
      </FloatingLabel>

      {/* <FloatingLabel
        controlId="publishedInput"
        label="Published"
        className="mb-2"
      >
        <Form.Control
          // required
          type="text"
          placeholder="Published"
          name="publishedDate"
          value={publishedDate}
          onChange={e => setPublishedDate(e.target.value)}
        />
      </FloatingLabel> */}

      <FloatingLabel
        controlId="shortDescriptionInput"
        label="Short description"
        className="mb-2"
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
        {errors.shortDescription && <ErrorTextValidate text={'This field is required'} />}
      </FloatingLabel>

      {/* Bug - duplicate toolbar: https://github.com/zenoamaro/react-quill/issues/784 */}
      {/* Temporarily solved: remove <React.StrictMode></React.StrictMode> */}
      <ReactQuill
        name="mainContentInput"
        modules={modules}
        className="mb-2"
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder=""
      />
      {contentError && <ErrorTextValidate text={'This field is required'} /> }

      {/* <FloatingLabel
        controlId="mainContentInput"
        label="Main content"
        className="mb-2"
      >
        <Form.Control
          // required
          type="text"
          placeholder="Main content"
          name="content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </FloatingLabel> */}

      <Row className="mt-2">
        <Col className='text-end'>
          <Button variant="primary" type="submit">{actionText}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PostForm;