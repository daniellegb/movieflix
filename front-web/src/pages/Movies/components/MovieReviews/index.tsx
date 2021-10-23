import { ReactComponent as StarImage } from 'core/assets/images/star.svg';
import './styles.scss';

type Props = {
    userName: string;
    review: string;
}

const MovieReviews = ({userName,review} : Props) => (
    <div className="reviews-container">
        <div className="user-container">
            <StarImage className="user-star"/>
            {userName}
        </div>
        <div className="review-container">
            <div className="review-text">
                {review}
            </div>
        </div>
    </div>
);

export default MovieReviews;