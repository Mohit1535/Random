import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const images = [
  "/p1.jpeg", "/p2.jpeg", "/p3.jpeg", "/p4.JPG", "/p5.JPG", "/p6.JPG",
  "/p12.jpeg", "/p13.JPG", "/p14.JPG", "/p15.jpg", "/p16.jpeg", "/p17.JPG",
  "/p18.JPG", "/p19.jpeg", "/p20.jpg", "/p21.jpg", "/p22.jpg", "/p23.jpg", "/p24.jpg", "/p25.JPG"
];

Modal.setAppElement("#root");

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "black", fontFamily: "Arial, sans-serif" }}>
        <header style={{ marginBottom: "20px", color: "white" }}>
          <h2 style={{ color: "white", textAlign: "center", fontSize: "2.5rem" }}>Gallery</h2>
        </header>

        <section style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {images.map((img, index) => (
            <div 
              key={index} 
              style={{ flex: "1 1 calc(25% - 10px)", maxWidth: "calc(25% - 10px)", cursor: "pointer" }} 
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          ))}
        </section>

        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal} 
          style={{
            content: { 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              maxWidth: "80%", 
              maxHeight: "80%", 
              margin: "auto", 
              backgroundColor: "#fff", 
              border: "none", 
              borderRadius: "10px"
            }
          }}
        >
          {selectedImage && <img src={selectedImage} alt="Zoomed In" style={{ width: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "8px" }} />}
        </Modal>
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
            <span className="material-symbols-outlined">location_on</span> Sundigo tower, Gomti Nagar, Uttar Pradesh
          </li>
          <li>
            <span className="material-symbols-outlined">phone_in_talk</span> +91 8177004441
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