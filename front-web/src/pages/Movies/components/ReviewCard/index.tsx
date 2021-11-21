import { ReactComponent as StarImage } from 'core/assets/images/star.svg';
import { User } from 'core/types/Movie';
import './styles.scss';

type Props = {
    user: User;
    text: string;
}

const ReviewCard = ({user, text}: Props) => {
    
    return(
    <>
        <div className="user-container">
            <StarImage className="user-star"/>
            {user.name}
        </div>
        <div className="review-container">
            <div className="review-text">
                {text}
            </div>
        </div>
 
   </>
);}

export default ReviewCard;