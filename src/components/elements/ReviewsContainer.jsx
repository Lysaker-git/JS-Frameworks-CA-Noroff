
export default function Reviews ({ reviews }) {
    
    return <>
      {reviews.length > 0 && (
        <div>
          <h2>Reviews</h2>
          {reviews.map((review) => (
              <div key={review.id}>
              <h3>{review.username}</h3>
              <p>Rating: {review.rating}</p>
              <p>{review.description}</p>
            </div>
          ))}
        </div>
      )}
    </>
}