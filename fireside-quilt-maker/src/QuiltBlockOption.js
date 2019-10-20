import React from 'react';

const QuiltBlockOption = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="quilt-block-option" {...rest}>
      {children}
    </div>
  );
}

export default QuiltBlockOption;
