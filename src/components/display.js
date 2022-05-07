import PropTypes from 'prop-types';

function Display(props) {
  const { total, next, operation } = props;
  return (
    <div className="display">
      <h1>
        {total}

        {operation}

        {next}
      </h1>
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
