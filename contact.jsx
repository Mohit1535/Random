import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="container py-5 text-center text-light">
        <h2 style={{color:"white",fontSize:"3rem"}}>Contact Us</h2>
      </div>

      <div className="container py-3 d-flex justify-content-center">
        <div style={{ width: "100%", maxWidth: "800px", height: "450px" }}>
          <iframe
            title="Google Maps Location"
            src="https://maps.google.com/maps?q=Sundigo+Tower%2C+Viraj+Khand-3%2C+CP-36%2C+Viraj+Khand%2C+Gomti+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226010&output=embed"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          ></iframe>
        </div>
      </div>

      <div className="container py-4">
        <form className="row g-3 bg-dark text-light p-4 rounded shadow-lg">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="state" className="form-label">State</label>
            <select className="form-select" id="state" required>
              <option value="">Choose...</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="TN">Tamil Nadu</option>
              <option value="RJ">Rajasthan</option>
            </select>
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-primary px-4 py-2" type="submit">Submit</button>
          </div>
        </form>
      </div>
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