
import useReviews from '../../hook/useReviews';
import AllReview from '../AllReview/AllReview';

const Reviews = () => {

  const [reviews, setReviews] = useReviews([]);


  return (
    <div className='review-container'>
      {
        reviews.map(review => <AllReview
          key={review.name}
          reviewe={review}
        >

        </AllReview>)
      }

    </div>
  );
};

export default Reviews;



