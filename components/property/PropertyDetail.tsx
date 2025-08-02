import React from 'react';

const PropertyDetail = ({ property }: { property: any }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetail;
