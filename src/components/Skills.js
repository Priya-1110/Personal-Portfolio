import {Container,Col,Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/s_html.png";
import meter2 from "../assets/img/s_css.png";
import meter3 from "../assets/img/s_js.png";
import meter4 from "../assets/img/s_react.png";
import meter5 from "../assets/img/aws1.png";
import meter6 from "../assets/img/python.png";
import meter7 from "../assets/img/c.png";
import meter8 from "../assets/img/sql.png";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {
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
      return(
        <section className ="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className = "skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <br></br>
                      
                        <Carousel responsive = {responsive} infinite = {true} className="skill-slider">
                            <div className ="item">
                                <img src ={meter1} alt ="Image"/>
                                <h5>HTML</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter2} alt ="Image"/>
                                <h5>CSS</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter3} alt ="Image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter4} alt ="Image"/>
                                <h5>React JS</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter5} alt ="Image" style={{ height: "160px", width: "200px" }}/>
                                <h5>AWS fundamentals</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter6} alt ="Image"/>
                                <h5>Python Programming</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter7} alt ="Image"/>
                                <h5>C Programming</h5>
                            </div>
                            <div className ="item">
                                <img src ={meter8} alt ="Image"/>
                                <h5>SQL Server</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className = "background-image-left" src={colorSharp}/>
        </section>
      )
}