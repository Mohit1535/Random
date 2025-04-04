import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [count, setCount] = useState(0); // State for auto-incrementing number

  useEffect(() => {
    if (count >= 208) return; // Stop incrementing at 208

    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 208 ? prevCount + 1 : 208));
    }, 50); // Updated interval speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [count]); // Runs every time count updates

  return (
    <>
      {/* Header Section */}
      <div className="home">
        <h1 className="text-light">About The Organization</h1>
      </div>

      {/* Counter Section */}
      <div className="counter-card" style={{ width: "5000rem" }}>
        <div className="card-content">
          <p className="card-title" style={{ fontSize: "1rem" }}>
            Welcome to SUNdigo Sewa Samiti, a beacon of hope and catalyst for change in our global community. At SUNdigo Sewa Samiti, our story is one of passion, purpose, and commitment to making a difference. What began as a small venture has evolved into a company deeply rooted in the belief that business success should go hand in hand with social responsibility.
            From day one, we've been guided by a set of core values that shape everything we do. Sustainability is at the heart of our business model, and we're proud to lead by example in reducing waste, conserving resources, and embracing renewable energy. Through this, we aim to transparently communicate our CSR initiatives, achievements, and challenges.
            We acknowledge that the journey towards sustainability is ongoing, and we remain steadfast in our pursuit of continuous improvement. Join us as we continue to innovate, inspire, and make a difference – one step at a time.
          </p>
        </div>
      </div>

      {/* Board of Trusties Section */}
      <div className="card text-bg-success mb-3" style={{ fontSize: "1.5rem" }}>
        <div className="card-header" style={{ fontSize: "2.5rem", margin: "auto" }}>Board Of Trusties</div>
        <div
          className="card-body"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "nowrap", // Ensures all items stay on one line
            gap: "10px", // Adds spacing between the cards
          }}
        >
          {/* Card 1 */}
          <div className="card" style={{ width: "14rem", backgroundColor: "lightgreen" }}>
            <img src="/p9.png" alt="Archana Yadav" />
            <h5 className="card-title" style={{ textAlign: "center" }}>Archana Yadav</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: "center" }}>CMD</h6>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ width: "14rem", backgroundColor: "lightgreen" }}>
            <img src="/p10.png" alt="Brijesh Yadav" />
            <h5 className="card-title" style={{ textAlign: "center" }}>Brijesh Yadav</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: "center" }}>MD</h6>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ width: "14rem", backgroundColor: "lightgreen" }}>
            <img src="/p11.png" alt="Anant Shrivastava" />
            <h5 className="card-title" style={{ textAlign: "center" }}>Anant Shrivastava</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: "center" }}>MD-2</h6>
          </div>
        </div>
      </div>

     {/* Our Vision Section */}
<h2
  className="header"
  style={{
    backgroundColor: "#024950",
    textAlign: "center",
    fontSize: "2.5rem",
    padding: "10px",
    color: "white",
  }}
>
  Our Vision
</h2>
<div
  className="card text-bg-secondary mb-3"
  style={{
    width: "90%", // Adjust width to be responsive
    maxWidth: "1000px", // Set max width to maintain layout on larger screens
    margin: "20px auto",
    background: "linear-gradient(to right, #f7f7f7, #cce7d0)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    padding: "20px",
  }}
>
  <p
    className="card-text"
    style={{
      fontSize: "1.2rem", // Slightly smaller for responsiveness
      textAlign: "center",
      fontStyle: "italic",
      color: "#3b3b3b",
    }}
  >
    "To create a world where every business decision considers its impact on
    people and the planet, fostering a sustainable and equitable future for all."
  </p>
</div>


       {/* Our Mission Section */}
<h2
  className="header"
  style={{
    backgroundColor: "#D6536D",
    textAlign: "center",
    fontSize: "2.5rem",
    padding: "10px",
    color: "white",
  }}
>
  Our Mission
</h2>
<div
  className="card text-bg-secondary mb-3"
  style={{
    width: "90%", // Adjusted for responsiveness
    maxWidth: "1000px", // Retains layout on larger screens
    height: "auto",
    margin: "20px auto",
    backgroundColor: "#116466",
    boxShadow: "0 4px 8px rgba(255, 7, 7, 0.2)",
    borderRadius: "10px",
    padding: "20px",
    color: "white", // Fixed color property (fontColor isn't valid)
  }}
>
  <p
    className="card-text"
    style={{
      fontSize: "1.2rem", // Adjusted font size for better readability
      textAlign: "center",
      fontStyle: "italic",
      color: "white",
    }}
  >
    At SUNdigo Sewa Samiti, our mission is deeply rooted in our commitment to making a positive difference in the world.
    We aim to:
    <ul style={{ textAlign: "left", margin: "10px 0", lineHeight: "1.6", color: "white" }}>
      <li>Operate our business with integrity, transparency, and a deep respect for human rights and the environment.</li>
      <li>Engage in sustainable practices that minimize our ecological footprint and contribute to the well-being of future generations.</li>
      <li>Cultivate a diverse, inclusive, and supportive workplace where every voice is heard and valued.</li>
      <li>Strive for continuous improvement in our sustainability performance, setting measurable goals and regularly reviewing our progress to drive positive change.</li>
      <li>Inspire and empower others to join us in our journey towards a more sustainable and socially responsible future.</li>
    </ul>
  </p>
</div>


      {/* Footer Section */}
      <div className="footer">
        <h2>Quick Links</h2>
        <ul className="footer-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/service">Our Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>

      <div className="footer">
        <h2>Get Connected</h2>
        <ul className="footer-links">
          <li>
            <span className="material-symbols-outlined">location_on</span>Sundigo tower, Gomti Nagar, Uttar Pradesh
          </li>
          <li>
            <span className="material-symbols-outlined">phone_in_talk</span>+91 8177004441
          </li>
          <li>
            <span className="material-symbols-outlined">language</span>
            <a href="https://www.sundigosolar.com">www.sundigosolar.com</a>
          </li>
        </ul>
      </div>
    </>
  );
}
