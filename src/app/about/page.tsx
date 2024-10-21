import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Karan Guptage a <span>full stack developer</span>
                  </h2>
                  <p>                  
                    Senior Full Stack Developer who has possessed various web backend & frontend languages/frameworks and blockchain technology with over 7 years of experience in requirements gathering, analysis, design, implementation, 
                    maintenance of software applications and testing Client/Server and Web applications. 
                    Demonstrated ability to satisfy upper management through reliability, commitment, and problem resolution.

                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="education padd-15">
                    <h3 className="title">Experience</h3>
                    <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            {/* Timeline Item */}
                            <div className="timeline-item">
                              <div className="circle-dot" />
                              <h6 className="timeline-date">
                                <i className="fa fa-calendar" /> 12/2022 - 09/2024
                              </h6>
                              <h4 className="timeline-title">Full stack Developer (Remote)</h4>
                              <p className="timeline-text">
                                Developed and launched a robust website using MERN Stack
                                and TypeScript, demonstrating proficiency in full-stack
                                development. Built proprietary nodes on both Ethereum and Binance
                                blockchain networks for effective data analysis, demonstrating
                                deep understanding of blockchain technology. Successfully deployed the website on Amazon Web Services
                                (AWS), showcasing competency in cloud platforms and
                                deployment protocols. Lead the development team in establishing an infrastructure
                                that enables realtime data retrieval from proprietary nodes, showcasing leadership skills and understanding of real-time
                                data processing.
                              </p>
                            </div>
                            {/* Timeline Item end */}
                            {/* Timeline Item */}
                            <div className="timeline-item">
                              <div className="circle-dot" />
                              <h6 className="timeline-date">
                                <i className="fa fa-calendar" />05/2016 - 11/2022
                              </h6>
                              <h4 className="timeline-title">Back end Developer (Remote)</h4>
                              <p className="timeline-text">
                              Developed dynamic and interactive website that ensured high
                              traffic, page views, and User Experience, resulting in 40%
                              increase
                              in sales revenue. Oversaw full lifecycle of software
                              development for various projects. Designed processes for cleanup and performance improvement, that minimized downtime by 13%.
                              </p>
                            </div>
                            {/* Timeline Item end */}
                            {/* Timeline Item */}
                            <div className="timeline-item">
                              <div className="circle-dot" />
                              <h6 className="timeline-date">
                                <i className="fa fa-calendar" /> 09/2012 - 04/2016
                              </h6>
                              <h4 className="timeline-title">Front end Engineer (Remote)</h4>
                              <p className="timeline-text">
                                Fixed bugs from existing websites and implemented
                                enhancements that significantly improved web functionality
                                and
                                speed. Collaborate with senior level usability specialists and
                                technology/business leaders to interpret requirements into
                                interactive experiences. Conduct research and developed
                                creative processes by sharing
                                new trends and development technologies with other
                                designers.
                                
                              </p>
                            </div>
                            {/* Timeline Item end */}
                          </div>
                        </div>
                    </div>
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {/* Timeline Item */}
                          <div className="timeline-item portfolio">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> 04/2008 - 08/2012
                            </h6>
                            <div className="info-item-edu padd-15">
                                <h4 className="timeline-title">
                                  Alberta University
                                </h4>
                                <p className="timeline-text">
                                    Bachelor's degree - Information Technology
                                </p>
                            </div>
                            <div className="info-item-edu padd-15 ">
                              <div className="portfolio-item padd-15" data-category="web-design">
                                <div className="portfolio-item-inner  shadow-dark">
                                  <div className="portfolio-img">
                                    <img src="/imgs/alberta.jpg" alt="my university" />
                                  </div>
                                  <div className="portfolio-info">
                                    <h4>my university</h4>
                                    <div className="icon">
                                      <i className="fa fa-search" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Timeline Item end */}
                        
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="buttons padd-15">
                      <a                      
                        href="/assets/docs/KaranguptageResume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>                     
                    </div>
                  </div>
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>karan.Guptage@gmail.com</span>
                      </p>
                    </div>                
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Bachelor</span>
                      </p>
                    </div>                  
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Brantford, Ontario Canada</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Skills</h3>
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Next</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript/TypeScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>PHP</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Laravel</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "40%" }} />
                        <div className="skill-percent">40%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Django</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "30%" }} />
                        <div className="skill-percent">30%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>NoSQL/MongoDB</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "55%" }} />
                        <div className="skill-percent">55%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>WordPress</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Codeignither</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "20%" }} />
                        <div className="skill-percent">20%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Block Chain</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "65%" }} />
                        <div className="skill-percent">65%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
