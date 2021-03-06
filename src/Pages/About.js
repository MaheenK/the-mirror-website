import React from "react";
import "../App.css";
import "./About.css";
import founders from "../images/team/Founders.jpeg";
import mahnoor from "../images/team/Mahnoor-GS.jpg";
import maham from "../images/team/Maham- AC.jpg";
import shahrukh from "../images/team/shahrukh2.jpeg";
import Header from "../components/Header_about";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      {/* <HeroSection/> */}
      {/* <div className="hero">
        <h1 className="about"> Our Mission </h1>
      </div> */}
      <Header />

      <div className="container_about">
        <p className="mission">
          Our mission is to tackle gender-based violence prevalent in society
          that impacts the lives of millions of women each year. Our primary
          channels to remedy these issues include awareness through education,
          emotional support through counselling, financial assistance through
          fundraisers, and intermediary legal aid through pro-bono lawyers.
        </p>
        <div className="value-cont">
          <h1 className="values"> equality . diversity . inclusion </h1>
        </div>
        <h1 className="about2"> The Team </h1>
        <div className="section">
          <div className="founders">
            <img src={founders} alt="Founders" />
            <div className="About-text">
              <h1 className="heading-f">Founders</h1>
              <h5 className="names">
                Faryal Ashfaq & Eisha Mehtab
              </h5>
              <p>
                The Mirror was founded by Faryal Ashfaq and Eisha Mehtab in 2017
                out of courage and a collective sense of urgency to do something
                about the plight of women in our country. Our experiences in a
                patriarchal Pakistan made us recognise the need of a platform
                that allows femmes everywhere to feel empowered, mobilised, and
                safe. The Mirror serves and will always continue to serve as a
                symbol of reflection, not only for our community but for
                ourselves, where we strive to become better versions of
                ourselves every single day.
              </p>
            </div>
          </div>
        </div>
        <h1 className="about2"> The Mirror's Hall of Fame </h1>
        <section class="bg-light mt-5" id="team">
          <div class="container_ec">
            <div class="row text-center">
              <div class="col-sm-12 col-md-12 mb-4">
                {/* <h3 class="text-center mt-4 text-secondary">
                  Tourist Opinions
                </h3> */}
              </div>
              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src={mahnoor}
                      class="rounded-circle z-depth-1 img-fluid"
                      alt="Mahnoor"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Mahnoor Sarwar
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">
                    Executive Board 2021, General Secretary{" "}
                  </h6>
                  <p
                    class="font-weight-normal dark-grey-text"
                    style={{
                      "font-size": "13px",
                      "justify-content": " space-around",
                    }}
                  >
                    {/* My name is Mahnoor and I am the General Secretary at The
                    Mirror. As a member of executive board, I am responsible to
                    build synergy between three focal departments: legal and
                    corporate affairs, finance and external relations. Working
                    at The Mirror gives me a purpose and an opportunity of
                    making a small impact and do good. The mission is something
                    very close to my heart. */}
                  </p>
                </div>
              </div>
              <div class="col-md-4" style={{ "padding-left": "20px" }}>
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src={shahrukh}
                      class="rounded-circle z-depth-1 img-fluid"
                      alt="shahrukh"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Shahrukh Khan
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">
                    Executive Board 2021, Managing Director
                  </h6>
                  <p
                    class="font-weight-normal dark-grey-text"
                    style={{
                      "font-size": "12px",
                      "justify-content": " space-around",
                    }}
                  >
                    {/* My name is Shahrukh Mujahid Khan and I am the Managing
                    Director at The Mirror. Being a member of the Executive
                    Board, it is my responsibility to ensure that the management
                    of the entire Directorate, work in a close environment with
                    the Presidents and guarantee that the operations within the
                    organization are working in a streamlined manner; to name a
                    few. It is to bridge gaps and bring about everyone in a
                    unified whole, and make certain that the ideals of the
                    organization are upheld to the highest virtue! */}
                    {/* The Mirror presents an environment and atmosphere that encourages personal change, growth and successes. While it works to fight the good fight, it actively advocates to have every individual feel as comfortable, as welcomed, and as heard as one can be. It promotes the engagement in healthy discussions, dialogues and discourse necessary to allow and help people understand, learn and unlearn any toxic behavior or attitude in their personality. */}
                  </p>

                </div>
              </div>

              <div class="col-md-4" style={{ "padding-left": "20px" }}>
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src={maham}
                      class="rounded-circle z-depth-1 img-fluid"
                      alt="Maham"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                    Maham Fazal
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">
                    Executive Board 2021, Administrative Coordinator
                  </h6>
                  {/* <p
                    class="font-weight-normal dark-grey-text"
                    style={{
                      "font-size": "13px",
                      "justify-content": " space-around",
                    }}
                  >
                    I am Maham Fazal, Administrative Coordinator at The Mirror.
                    I have been working here for a year and a half and it has
                    been a wonderful experience. I have learned so much
                    throughout my journey here. The Mirror truly groomed me both
                    professionally and personally. Currently I am looking over
                    Human Resources, Publications, Photography and Social Media.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
