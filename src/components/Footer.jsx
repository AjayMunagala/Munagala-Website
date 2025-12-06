import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="enhanced-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Munagala Tech Solutions</h4>
          <p>Building reliable software that grows your business. We transform ideas into powerful digital solutions.</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn" className="social-link">LinkedIn</a>
            <a href="#" aria-label="Twitter" className="social-link">Twitter</a>
            <a href="#" aria-label="GitHub" className="social-link">GitHub</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/web-mobile-development">Web & Mobile Development</Link></li>
            <li><Link to="/services/cloud-devops">Cloud & DevOps</Link></li>
            <li><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
            <li><Link to="/services/maintenance-support">Maintenance & Support</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">📧</span>
              <a href="mailto:info@munagalatechsolutions.com">info@munagalatechsolutions.com</a>
            </li>
            <li>
              <span className="contact-icon">🌐</span>
              <span>munagalatechsolutions.com</span>
            </li>
            <li>
              <span className="contact-icon">🕒</span>
              <span>24/7 Support Available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © {currentYear} Munagala Tech Solutions. All rights reserved.
        </div>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
