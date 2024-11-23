import React from "react";
import "./Flipcard.css";
import projImg1 from "../assets/img/project-img1.png";

import Text from "./Text";
function Flipcard() {
    return (
      
      <section className ="flipcard" id="flipcard">
        <br></br>
        <div class="container our-services">
<h2>Projects</h2>
<br></br>
          <div class="row">
            <div class="col-sm-4">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#c770f0 ' }}>
                    {/* <h3>Hostel Management System</h3> */}
                    <img
                      class="lazyload"
                      src={projImg1 }
                      alt=""
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3><Text>HOSTEL MANAGEMENT SYSTEM</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#9381FF ' }}>
                    <h5> <Text>HOSTEL MANAGEMENT SYSTEM</Text></h5>
                    <p><Text>This is a Web Application for online Hostel Room Booking System.This is done to minimize the work of people going in person and booking the hostel room This project reduces the time of the individuals spent on offline to book their rooms at their colleges and universities
                    </Text>
                    </p>
                    <p> <Text> Users can book the rooms and booking details are sent to admins immediately after user books. Users can send emails to admin seeking their queries to change the room. Users can check the availability of the booked rooms and choose their room accordingly.
</Text>
                    </p>
                    <a href="https://github.com/Suryaa2004/Hostel-Room-Booking"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#9381FF' }}>
                    <img
                      class="lazyload"
                      src={projImg1 }
                      alt=""
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3> <Text>SWOT ANALYSIS PLATFORM</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#c770f0' }}>
                    <h5>SWOT ANALYSIS PLATFORM</h5>
                    <p>
                    The platform encompasses a secured login system, a
user-friendly home page, and an interactive SWOT analysis module. User authentication and company
details are securely stored in databases, ensuring data confidentiality. 

                    </p>
                    <p>
                    The SWOT analysis process involves a series of tailored questions aimed at extracting relevant
information from users. Based on their responses, the platform generates a detailed report that quantifies
the company's strengths, weaknesses, opportunities, and threats as percentages.
                    </p>
                    <a href="https://github.com/Suryaa2004/swot-analysis"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#c770f0' }}>
                    <img
                      class="lazyload"
                      src={projImg1 }
                      alt="Avatar"
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3><Text>PERSONAL PORTFOLIO</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#9381FF' }}>
                    <h5>PERSONAL PORTFOLIO</h5>
                    <p>
                    The site features an 'About Me' section offering a succinct introduction to my background, values, and aspirations. In addition, it encompasses detailed segments on my education, highlighting academic achievements, skills section showcasing my proficiency in relevant technologies, a comprehensive list of publications, and certifications earned.
                    </p>
                    <p>
                    This portfolio serves as a dynamic snapshot of my professional journey, providing visitors with a holistic view of my skills, accomplishments, and commitment to continuous learning
                    </p>
                    <a href="https://github.com/Suryaa2004/Portfolio"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#9381FF ' }}>
                    <img
                      class="lazyload"
                      src={projImg1 }
                      alt="Avatar"
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3><Text>TINDOG</Text></h3>
                  </div>
                  <div class="back" style={{ background:'#c770f0' }}>
                    <h5>TINDOG</h5>
                    <p>
                    An engaging e-commerce website dedicated to the sale of dogs and their diverse breeds. 
                    </p>
                    <p>
                    Tindog offers a user-friendly platform for enthusiasts and prospective pet owners, featuring a wide array of dog breeds with detailed descriptions, pricing, and seamless transaction capabilities. This website combines a visually appealing design with practical functionality, creating an enjoyable and efficient experience for users interested in finding their ideal canine companion

                    </p>
                    <a href="https://github.com/Suryaa2004/Tindog"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front" style={{ background: '#c770f0 ' }}>
                    <img
                      class="lazyload"
                      src={projImg1 }
                      alt="Avatar"
                      style={{ width: '300px', height: '250px' }}
                    />
                    <h3><Text>IEEE CONSORTIUM</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#9381FF ' }}>
                    <h5>IEEE CONSORTIUM</h5>
                    <p>
                    the IEEE (Institute of Electrical and Electronics Engineers), encompassing a comprehensive 'About' section providing insights into the organization's mission, values, and history. The website dynamically showcases upcoming events organized by IEEE, providing users with event details, schedules, and registration options.
                    </p>
                    <p>
                    Additionally, it features dedicated sections highlighting various IEEE societies, fostering a sense of community and facilitating engagement among members interested in specific technical domains.

                    </p>
                    <a href="https://github.com/Suryaa2004/rec-ieee"><button class='btn btn-primary'>Know more</button></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      
      </section>
    );
  }
  
  export default Flipcard;
  