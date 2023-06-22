import React from "react";
import "./ClientComments.scss";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import CommentCard from "../commentCard/CommentCard";
import COMMENTS from "../../utils/comments";

const ClientComments = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 950, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="comment-section">
      <h2 className="client-comments-header">Отзиви от нашите клиенти </h2>
      <Container>
        <Row>
          <Col>
            <Carousel responsive={responsive}>
              {COMMENTS.map((comment, index) => (
                <CommentCard
                  company={comment.company}
                  rating={comment.rating}
                  comment={comment.comment}
                  author={comment.author}
                  key={index + 1}
                />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientComments;
