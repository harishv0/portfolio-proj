import { useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.jpeg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;
    const toRotate = ["Web Developer","UI designer" ];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        
        if(isDeleting){
            setDelta(prev => prev/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-item-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                                <span className='tagline'>Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Harish`}</h1>
                                <h1><span className='wrap'>{text}</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ab necessitatibus. Error a doloribus iste ad ducimus vitae maxime dolore explicabo facilis nesciunt soluta unde, illo nemo iusto dignissimos distinctio!</p>
                                <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size = {25} /></button>
                            </div> }
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
