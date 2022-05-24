import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <FloatingLabel
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
      </FloatingLabel>

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

      <FloatingLabel
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
      </FloatingLabel>
      <Row className="mt-2">
        <Col className='text-end'>
          <Button variant="primary" type="submit">{actionText}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PostForm;