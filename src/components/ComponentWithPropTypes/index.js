import PropTypes from 'prop-types';

const ComponentWithPropTypes = ({ message }) => {
  return (
    <>
      <span>I am ComponentWithPropTypes</span>
      <span>{message}</span>
    </>
  );
};

ComponentWithPropTypes.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ComponentWithPropTypes;
