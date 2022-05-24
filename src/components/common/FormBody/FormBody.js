import { Form, FloatingLabel } from 'react-bootstrap';

const FormBody = props => {

  return (
    <>
      <FloatingLabel
        controlId="titleInput"
        label="Title"
        className="mb-2"
      >
        <Form.Control 
          required 
          type="text" 
          placeholder="Title"
          name="title" 
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="authorInput"
        label="Author"
        className="mb-2"
      >
        <Form.Control
          required 
          type="text" 
          placeholder="Author"
          name="author" 
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="publishedInput"
        label="Published"
        className="mb-2"
      >
        <Form.Control 
          required 
          type="date" 
          placeholder="Published" 
          name="publishedDate" 
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="shortDescriptionInput"
        label="Short description"
        className="mb-2"
      >
        <Form.Control 
          required 
          type="text" 
          placeholder="Short description" 
          name="shortDescription" 
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="mainContentInput"
        label="Main content"
        className="mb-2"
      >
        <Form.Control 
          required 
          type="text" 
          placeholder="Main content" 
          name="content" 
        />
      </FloatingLabel>
    </>
  );
};

export default FormBody;
