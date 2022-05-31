import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const newDate = new Date()
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || newDate);
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };
  
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
    <Form onSubmit={handleSubmit}>
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
        </Col>
      </Row>

      <FloatingLabel
        controlId="titleInput"
        label="Title"
        className="mb-2"
      >
        <Form.Control
          // required
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="authorInput"
        label="Author"
        className="mb-2"
      >
        <Form.Control
          // required
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
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
          type="text"
          placeholder="Short description"
          name="shortDescription"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
        />
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
        placeholder="Main content"
      />

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