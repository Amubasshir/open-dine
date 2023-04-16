import { Review } from '@prisma/client';
import Stars from 'componemt/app/components/Stars';
import { calculateReviewRatingAverage } from 'componemt/utils/calculateReviewRatingAverage';

const Rating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex items-end">
      <div className="rating mt-2 flex items-center">
        <Stars reviews={reviews} />
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
