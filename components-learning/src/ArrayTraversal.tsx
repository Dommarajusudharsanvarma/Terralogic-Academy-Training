import React from 'react'

const ArrayTraversal = () => {
 //   const item: undefined | any [] = [];
    const item: undefined | any [] = ['a','b','c']; 

    return (
      <div>
        <ol>
            {item?.map((val) => (
                <li>{val}</li>
            ))}
        </ol>
      </div>
  );
};

export default ArrayTraversal