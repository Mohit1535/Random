import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Service() {
  useEffect(() => {
    const images = document.querySelectorAll(".animate-image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "slideIn 1.5s ease-out forwards";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    images.forEach((image) => observer.observe(image));

    return () => {
      images.forEach((image) => observer.unobserve(image));
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-image {
            opacity: 0;
            transform: translateX(-100%);
          }
        `}
      </style>

      {/* Header Section */}
      <div
        className="home"
        style={{
          backgroundColor: "rgb(32, 32, 32)",
          textAlign: "center",
          padding: "20px",
          color: "white",
        }}
      >
        <h1>Our Services</h1>
      </div>

      {/* Service Section: Cloth Donation Camp */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            backgroundColor: "#0049B7",
            textAlign: "center",
            fontSize: "2.5rem",
            padding: "15px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Cloth Donation Camp
        </h2>
        <img
          src="/p4.jpg"
          alt="Cloth Donation Camp"
          className="animate-image"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "1200px",
            height: "400px", // Adjusted height for professional fit
            margin: "20px auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#00a0a0",
            color: "black",
            fontSize: "1.2rem",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Join us at SUNdigo Sewa Samiti's Cloth Donation Camp! Bring your
          gently used clothes to help those in need. Your donations will
          provide warmth and dignity to individuals and families facing
          hardships. Together, we can make a difference. Spread kindness and
          care, one garment at a time!
        </div>
      </section>

      {/* Service Section: Blood Donation Camp */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            backgroundColor: "#A28089",
            textAlign: "center",
            fontSize: "2.5rem",
            padding: "15px",
            color: "black",
            borderRadius: "5px",
          }}
        >
          Blood Donation Camp
        </h2>
        <img
          src="/P12.jpeg"
          alt="Blood Donation Camp"
          className="animate-image"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "1200px",
            height: "400px", // Adjusted height for professional fit
            margin: "20px auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#FF1D5B",
            color: "white",
            fontSize: "1.2rem",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Your small act of kindness can make a big difference! SUNdigo Sewa
          Samiti invites you to participate in our Blood Donation Camp and be
          the reason someone gets a second chance at life.
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            backgroundColor: "#0049B7",
            textAlign: "center",
            fontSize: "2.5rem",
            padding: "15px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Plantation
        </h2>
        <img
          src="/p13.jpg"
          alt="Cloth Donation Camp"
          className="animate-image"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "1200px",
            height: "400px", // Adjusted height for professional fit
            margin: "20px auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#00a0a0",
            color: "black",
            fontSize: "1.2rem",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Be a part of our plantation drive and help create a cleaner, healthier environment! Together, we can plant hope, fight climate change, and make a lasting impact.

          Join us today—let’s grow a greener tomorrow!
        </div>
      </section>
      {/* Footer Section */}
            <div className="footer">
              <h2>Quick Links</h2>
              <ul className="footer-links">
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/service'>Our Services</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
              </ul>
            </div>
      
            <div className="footer">
              <h2>Get Connected</h2>
              <ul className="footer-links">
                <li><span class="material-symbols-outlined">
      location_on
      </span>Sundigo tower, Gomti Nagar, Uttar Pradesh</li>
                <li><span class="material-symbols-outlined">
      phone_in_talk
      </span>+91 8177004441</li>
                <li><span class="material-symbols-outlined">
      language
      </span><a href='https://www.sundigosolar.com'>www.sundigosolar.com</a></li>
      
              </ul>
            </div>
    </>
  );
}
