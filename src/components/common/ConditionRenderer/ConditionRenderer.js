const ConditionRenderer = (props) => {
  if (props.condition) {
    return props.children;
  }
  return null;
};

export default ConditionRenderer;