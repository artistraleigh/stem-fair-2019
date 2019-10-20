import React from 'react';

const QuiltBlock = (props) => {
  const { firstName, lastName, color, picture } = props;
  return (
    <div
      className="quilt-block"
      style={{ background: color }}
    >
      <h4>{`${firstName} ${lastName}`}</h4>
      {picture && <img src={`${process.env.PUBLIC_URL}/img/${picture}.png`} alt={picture} />}
    </div>
  );
}

export default QuiltBlock;
