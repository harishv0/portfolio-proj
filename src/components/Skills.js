import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap"
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import colorSharp from "../assets/img/color-sharp.png";
 
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
   
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx wow zoomIn'>
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quaerat amet earum sint tempore sed, consequuntur voluptatem ipsum fugiat? Neque nostrum atque quas ullam cum quia saepe ut perferendis veniam.</p>
                        <Carousel responsive={responsive} className='skill-slider' infinite={true}>
                            <div className='item'>
                                <img src={meter1} alt=""/>
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt=""/>
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} alt="" className='background-image-left' />
    </section>

    )
}

export default Skills
