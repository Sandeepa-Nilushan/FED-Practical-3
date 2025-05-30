import React from 'react';
import './News.css';
import { FaUser, FaComment } from 'react-icons/fa';
import image1 from '../../assets/images/krakenimages-376KN_ISplE-unsplash 1.webp';
import image2 from '../../assets/images/paul-skorupskas-7KLa-xLbSXA-unsplash.webp';
import image3 from '../../assets/images/austin-distel-rxpThOwuVgE-unsplash.webp';
import image4 from '../../assets/images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.webp';

const News = () => {
  return (
    <section id="news" className="news-section">
      <div className="container">
        <div className="latest-news-header">
          <h3>
            LATEST NEWS
            <div className="header-bottom-line">
              <div className="indicator"></div>
              <span>INTEGER CONGUE ELIT</span>
            </div>
          </h3>
        </div>
        <div className="news-cards-container">
          {/* Placeholder for a single news card */}
          <div className="news-card">
            <div className="date-overlay">
              <span className="day">26</span>
              <span className="month">MAY</span>
            </div>
            <div className="card-image-wrapper">
              <img src={image1} alt="News thumbnail" />
            </div>
            <div className="card-text-content">
              <h4>SUSTAINABLE SHIPPING INITIATIVES</h4>
              <div className="meta">
                <span>Admin</span>
                <span><FaComment /> 15</span>
              </div>
              <p>TransMax launches eco-friendly shipping routes with carbon-neutral vessels. Our commitment includes advanced fuel optimization and emission reduction technologies...</p>
            </div>
          </div>
          
          <div className="news-card">
            <div className="date-overlay">
              <span className="day">22</span>
              <span className="month">MAY</span>
            </div>
            <div className="card-image-wrapper">
              <img src={image2} alt="News thumbnail" />
            </div>
            <div className="card-text-content">
              <h4>DIGITAL TRANSFORMATION IN LOGISTICS</h4>
              <div className="meta">
                <span>Admin</span>
                <span><FaComment /> 15</span>
              </div>
              <p>TransMax implements AI-powered tracking systems for real-time monitoring. The new technology enhances delivery accuracy and provides better supply chain visibility...</p>
            </div>
          </div>

          <div className="news-card">
            <div className="date-overlay">
              <span className="day">20</span>
              <span className="month">MAY</span>
            </div>
            <div className="card-image-wrapper">
              <img src={image3} alt="News thumbnail" />
            </div>
            <div className="card-text-content">
              <h4>GLOBAL EXPANSION ANNOUNCEMENT</h4>
              <div className="meta">
                <span>Admin</span>
                <span><FaComment /> 15</span>
              </div>
              <p>TransMax expands to 10 new countries, strengthening our global network. New warehouses and distribution centers enhance our international shipping capabilities...</p>
            </div>
          </div>

          <div className="news-card">
            <div className="date-overlay">
              <span className="day">15</span>
              <span className="month">MAY</span>
            </div>
            <div className="card-image-wrapper">
              <img src={image4} alt="News thumbnail" />
            </div>
            <div className="card-text-content">
              <h4>INNOVATIVE WAREHOUSING SOLUTIONS</h4>
              <div className="meta">
                <span>Admin</span>
                <span><FaComment /> 15</span>
              </div>
              <p>TransMax introduces automated warehouse systems with robotic assistance. The new technology streamlines inventory management and reduces processing times...</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default News;
