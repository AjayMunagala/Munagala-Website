import { Link } from 'react-router-dom';
import { useState } from 'react';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/services/${service.id}`} 
      className="service-card-link-modern"
      style={{ textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="service-card-modern"
        style={{ 
          '--service-gradient': service.gradient,
          '--animation-delay': `${index * 0.1}s`
        }}
      >
        <div className="service-card-background" style={{ background: service.gradient }}></div>
        
        <div className="service-image-wrapper">
          <img 
            src={service.image} 
            alt={service.title}
            className="service-image-modern"
            loading="lazy"
          />
          <div className="service-image-overlay"></div>
          <div className="service-card-header-overlay">
            <div className="service-icon-modern" style={{ background: service.gradient }}>
              <span className="service-icon-emoji">{service.icon}</span>
            </div>
            <div className="service-number">0{index + 1}</div>
          </div>
        </div>

        <div className="service-card-body">
          <h4 className="service-title-modern">{service.title}</h4>
          <p className="service-description-modern">{service.shortDescription}</p>
          
          <div className="service-features-preview">
            <span className="feature-tag">Modern Tech</span>
            <span className="feature-tag">Scalable</span>
          </div>
        </div>

        <div className="service-card-footer">
          <div className="service-link-modern">
            <span>Learn More</span>
            <div className="link-arrow">
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;


