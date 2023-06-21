import React from "react";
import "./CommentCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const CommentCard = ({ company, rating, comment, author }) => {
  const generateRating = (commentRating) => {
    return new Array(5).fill({ filled: null }).map((star, index) => {
      return {
        filled: (star.filled = true ? index + 1 <= commentRating : false),
        id: index + 1,
      };
    });
  };

  const generatedRating = generateRating(rating).map((star) => (
    <FontAwesomeIcon
      className={star.filled ? "filled-star" : "empty-star"}
      icon={faStar}
      key={star.id}
    />
  ));
  return (
    <div className="comment-wrapper">
      <div className="title-rating-wrapper">
        <h3>{author}</h3>
        <div>{generatedRating}</div>
      </div>
      <p>
        <sup>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteRight} />
        </sup>
        {comment}
        <sup>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
        </sup>
      </p>
      <h4>{company}</h4>
    </div>
  );
};

export default CommentCard;
