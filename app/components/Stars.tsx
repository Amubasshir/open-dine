import { Review } from '@prisma/client';
import Image from 'next/image';
import emptyStar from '../../public/icon/empty-star.png';
import fullStar from '../../public/icon/full-star.png';
import halfStar from '../../public/icon/half-star.png';
import { calculateReviewRatingAverage } from '../../utils/calculateReviewRatingAverage';

export default function Stars({
  reviews,
  rating,
}: {
  reviews: Review[];
  rating?: number;
}) {
  const reviewRating = rating || calculateReviewRatingAverage(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((reviewRating - i).toFixed(1));
      if (difference >= 1) stars.push(fullStar);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(emptyStar);
        else if (difference > 0.2 && difference <= 0.6) stars.push(halfStar);
        else stars.push(fullStar);
      } else stars.push(emptyStar);
    }

    return stars.map((star) => {
      return <Image src={star} alt="" className="mr-1 h-4 w-4" />;
    });
  };

  return <div className="flex items-center">{renderStars()}</div>;
}
