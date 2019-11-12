import React from 'react';
import { Link } from "react-router-dom";
import QuiltBlock from '../QuiltBlock';

const Quilt = () => {
  const quiltBlocks = JSON.parse(localStorage.getItem('quiltBlocks'));
  return (
    <div className="quilt">
      { quiltBlocks.map(block => (
        <QuiltBlock
          firstName={block.firstName}
          lastName={block.lastName}
          color={block.color}
          picture={block.picture}
        />
      ))}
      <Link to="/">
        <div className="quilt-block">
          <div className="add">+</div>
          Add a new block
        </div>
      </Link>
    </div>
  );
}

export default Quilt;
