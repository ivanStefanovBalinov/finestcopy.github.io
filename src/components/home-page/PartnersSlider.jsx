import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PartnersSlider.scss";
import Phenolife from "../../assets/img/phenolife.png";
import Ekometal from "../../assets/img/ekometal.png";

const PartnersSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 950, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="partners-slider">
      <Container>
        <Row>
          <Col>
            <Carousel
              responsive={responsive}
              autoPlay={false}
              autoPlaySpeed={1000}
              transitionDuration={500}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <div className="partners-logo">
                <img
                  src="https://static.wixstatic.com/media/6f9d1e_2a815775fea14528a998f20a95dd0c9b~mv2.png/v1/fill/w_300,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo_Lifestore_final.png"
                  alt="lifestore"
                />
              </div>
              <div className="partners-logo">
                <img
                  src="https://www.herbamedica.info/public/assets/images/logo.png"
                  alt="Herbamedica"
                />
              </div>
              <div className="partners-logo">
                <img
                  src="https://partner.imupro.com/wp-content/uploads/ImuPro-logo-retina.png"
                  alt="Imupro"
                />
              </div>
              <div className="partners-logo">
                <img
                  src="https://www.flexcode.cz/wp-content/uploads/2020/06/FlexCode_Logo_500x200.png"
                  alt="Flexcode"
                />
              </div>
              <div className="partners-logo">
                <img src={Phenolife} alt="Phenolife" />
              </div>
              <div className="partners-logo">
                <img className="eko-metal" src={Ekometal} alt="EkoMetal" />
              </div>
              <div className="partners-logo">
                <img
                  src="https://cdncloudcart.com/16965/vendors/images/1/1_600x600.png?1588513069"
                  alt="Brute"
                />
              </div>
              <div className="partners-logo">
                <img
                  className="cloudcart"
                  src="https://mail.cloudcart.com/media/cc-logo-034.png"
                  alt="Cloudcart"
                />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartnersSlider;
