import PropTypes from 'prop-types';
import React from 'react';

function TextAreaViewItem(props) {


  return (
    <div className="">
 

      <textarea
        className="input__textarera"
        value={props.value}
        rows={12}
        name={props.name}
      />
    </div>
  );
}

TextAreaViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  prefix: PropTypes.string,
  name :PropTypes.string
};

export default TextAreaViewItem;
