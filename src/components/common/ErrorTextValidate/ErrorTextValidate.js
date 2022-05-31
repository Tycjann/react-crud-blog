const ErrorTextValidate = props => {
  return (
    <small className = "d-block form-text text-danger mt-2" > 
      {props.text}
    </small>
  );
};

export default ErrorTextValidate;