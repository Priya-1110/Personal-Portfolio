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
                     <br/>
                     <br/>
                    <h3><Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>VINTAGE VEHICLES AUCTION PLATFORM</Text></h3>
                  </div>
                  <div className="back" style={{ background: '#9381FF' }}>
                <h5>
                  <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>
                    VINTAGE VEHICLES AUCTION PLATFORM
                  </Text>
                </h5>
                <p>
                  <Text style={{ fontSize: '16px' }}>
                    • Built a scalable vintage car auction platform on Django, integrating AWS services for secure image storage and real-time bidding.
                  </Text>
                </p>
                <p>
                  <Text style={{ fontSize: '16px' }}>
                    • Deployed with AWS Elastic Beanstalk, and automated CI/CD via GitHub Actions.
                  </Text>
                </p>
                <p>
                  <Text style={{ fontSize: '16px'}}>
                    • Tech Stack: Django, AWS (Cloud9, S3, Elastic Beanstalk, DynamoDB), GitHub Actions, Git/GitHub
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
                    <br/>
                    <br/>
                    <h3> <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>PERSONAL FINANCE TRACKER</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#c770f0' }}>
                  <h5>
                  <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>
                    PERSONAL FINANCE TRACKER
                  </Text>
                </h5>
                    <p><Text style={{ fontSize: '16px' }}>•	Developed a finance tracker in Django with CRUD functionality to manage income, expenses, and budgeting, displaying financial insights as charts and graphs using Matplotlib. </Text>
                    </p>
                    <p> <Text style={{ fontSize: '16px' }}>•	 Integrated user authentication, and utilized Pylint for static code analysis and Bandit for security checks. 
                  </Text>
                  </p>
                    <p> <Text style={{ fontSize: '16px' }}>•	 Tech Stack: Django, AWS CodePipeline, JavaScript, pylint, bandit, Git/GitHub
                  </Text>
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
                    <br/>
                    <h3><Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>BLOCKCHAIN-BASED SMART CONTRACT DEVELOPMENT AND TOKEN DEPLOYMENT</Text></h3>
                  </div>
                  <div class="back" style={{ background: '#9381FF' }}>
                  <h5>
                  <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFFFFF' }}>
                  BLOCKCHAIN-BASED SMART CONTRACT DEVELOPMENT AND TOKEN DEPLOYMENT
                  </Text>
                </h5>
                    <p><Text style={{ fontSize: '16px' }}>•	Developed and deployed ERC-20 and ERC-721 smart contracts using Remix, with ETH transaction management via MetaMask.  </Text>
                    </p>
                    <p> <Text style={{ fontSize: '16px' }}>•	 Tested functionality in a local Ethereum environment with Ganache, and integrated decentralized storage through local IPFS for token deployment. 
                  </Text>
                  </p>
                    <p> <Text style={{ fontSize: '16px' }}>•	 Tech Stack: Solidity, Remix, MetaMask, Ganache, IPFS, Ethereum
                  </Text>
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
  