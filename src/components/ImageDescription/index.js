import React from 'react';

const ImageDescription = ({ items, imgUrl, entity }) => {
  const { name, ...otherItems } = items;

  return (
    <div>
      <img src={imgUrl} alt={entity}/>
      ImageDescription
    </div>
  );
};

export default ImageDescription;
