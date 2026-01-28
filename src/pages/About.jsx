import React from "react";


function About() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <span className="about-tag">How It Started</span>

            <h1 className="about-title">
              Our Dream is <br />
              <span>Making Every Moment Special</span>
            </h1>

            <p className="about-text">
              Clovers was created with the vision of making gift shopping
              simple, joyful, and memorable. We believe that every occasion
              deserves a thoughtful gift that creates lasting happiness.
            </p>

            <p className="about-text">
              Built as a modern e-commerce project, Clovers demonstrates
              real-world shopping flows including guest checkout, OTP-based
              login, cart management, and order tracking.
            </p>

            {/* STATS */}
            <div className="row mt-4">
              <div className="col-6 col-md-3">
                <div className="stat-card">
                  <h3>3+</h3>
                  <p>Projects Built</p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-card">
                  <h3>10+</h3>
                  <p>Features</p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-card">
                  <h3>100+</h3>
                  <p>UI Screens</p>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-card">
                  <h3>1K+</h3>
                  <p>Lines of Code</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="About Clovers"
              className="about-image"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
