import React from 'react';
import '../styles/Destination.css'; // Importing the CSS

const Destination = () => {
  return (
    <div>
      {/* Tours Section */}
      <section id="tours" className="destinations-section">
        <h2>Our Popular Tours</h2>
        <div className="tour-box">
          <img src="images/paris.jpg" alt="Paris" />
          <h3>Tour to Paris</h3>
          <p>Experience the City of Light like never before.</p>
        </div>
        <div className="tour-box">
          <img src="images/delhi-bg.jpeg" alt="Delhi" />
          <h3>Tour to Delhi</h3>
          <p>Embrace the vibrant culture and ancient heritage of India.</p>
        </div>
        <div className="tour-box">
          <img src="images/newyork1.jpg" alt="New York" />
          <h3>Tour to New York</h3>
          <p>Explore the city that never sleeps.</p>
        </div>
        <div className="tour-box">
          <img src="images/japan.jpg" alt="Tokyo" />
          <h3>Tour to Tokyo</h3>
          <p>Discover the blend of tradition and technology.</p>
        </div>
      </section>

      </div>
  );
};

export default Destination;
