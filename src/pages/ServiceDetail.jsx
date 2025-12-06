import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { services } from '../data/services';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div>
        <Navbar />
        <div className="service-not-found">
          <h2>Service Not Found</h2>
          <Link to="/" className="btn">Go Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="service-detail-hero" style={{ background: service.gradient }}>
        <div className="service-detail-hero-content">
          <div className="service-detail-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <span style={{ fontSize: '4rem' }}>{service.icon}</span>
          </div>
          <h1>{service.title}</h1>
          <p>{service.details.description}</p>
          <Link to="/#contact" className="btn">Get Started</Link>
        </div>
      </div>

      <div className="service-detail-content">
        <section className="service-detail-section">
          <div className="service-detail-image">
            <img src={service.image} alt={service.title} />
          </div>
        </section>

        <section className="service-detail-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {service.details.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">✓</div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-detail-section">
          <h2>Technologies We Use</h2>
          <div className="technologies-grid">
            {service.details.technologies.map((tech, index) => (
              <div key={index} className="tech-badge">
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section className="service-detail-section">
          <h2>Benefits</h2>
          <div className="benefits-grid">
            {service.details.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">★</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-detail-cta">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help transform your business with our {service.title.toLowerCase()} services.</p>
          <div className="cta-buttons">
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const contact = document.getElementById('contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="btn"
            >
              Contact Us
            </Link>
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const services = document.getElementById('services');
                  if (services) services.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="btn secondary"
            >
              View All Services
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;

