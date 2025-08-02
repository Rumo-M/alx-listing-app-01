import React from 'react';

const ReviewSection = ({ reviews }: { reviews: any[] }) => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold text-xl">Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="mt-2 p-2 border-b">
          <p className="font-medium">{review.reviewer}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
