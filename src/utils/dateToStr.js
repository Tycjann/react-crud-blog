const dateToStr = (date) => {
  // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const options = { day: 'numeric', year: 'numeric', month: 'numeric' };
  return date.toLocaleDateString('pl-PL', options);
};

export default dateToStr;