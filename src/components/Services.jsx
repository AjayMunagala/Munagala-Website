import { services } from '../data/services';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="services" className="services-section-modern">
      <div className="section-header-modern">
        <div className="section-label">What We Offer</div>
        <h3 className="section-title-modern">Our Services</h3>
        <p className="section-description-modern">
          We offer comprehensive technology solutions tailored to your business needs. 
          From concept to deployment, we've got you covered.
        </p>
      </div>
      <div className="services-grid-modern">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Services
