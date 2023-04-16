import { Review } from '@prisma/client';
import { calculateReviewRatingAverage } from 'componemt/utils/calculateReviewRatingAverage';

const Rating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex items-end">
      <div className="rating mt-2 flex items-center">
        <p>*****</p>
        <p className="ml-3 text-base">
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="ml-4 text-base ">
          {reviews.length} Review{reviews.length === 1 ? '' : 's'}
        </p>
      </div>
    </div>
  );
};

export default Rating;
