import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Services from "../components/Services.jsx";
import Stats from "../components/Stats.jsx";
import Features from "../components/Features.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Portfolio from "../components/Portfolio.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <Stats />

      <Services />

      <Features />

      <Portfolio />

      <section id="about" className="about-section">
        <div className="section-header-modern">
          <div className="section-label">Who We Are</div>
          <h3 className="section-title-modern">About Us</h3>
          <p className="section-description-modern">
            Transforming businesses through innovative technology solutions
          </p>
        </div>
        <div className="about-content-wrapper">
          <div className="about-main-content">
            <div className="about-text-block">
              <div className="about-intro">
                <h4>Our Story</h4>
                <p>
                  Munagala Tech Solutions delivers tailored software solutions for
                  businesses. We focus on quality, scalability, and user experience to
                  help you achieve measurable results. Our team combines technical expertise
                  with creative problem-solving to transform your ideas into powerful digital
                  solutions that drive growth and innovation.
                </p>
              </div>
              <div className="about-experience">
                <h4>Our Experience</h4>
                <p>
                  With over a decade of experience in the industry, we've helped numerous
                  companies transform their digital presence. From startups to enterprises,
                  we provide end-to-end solutions that align with your business goals.
                </p>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-stats-mini">
                <div className="mini-stat">
                  <div className="mini-stat-number">10+</div>
                  <div className="mini-stat-label">Years</div>
                </div>
                <div className="mini-stat">
                  <div className="mini-stat-number">100+</div>
                  <div className="mini-stat-label">Projects</div>
                </div>
                <div className="mini-stat">
                  <div className="mini-stat-number">50+</div>
                  <div className="mini-stat-label">Clients</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-highlights">
            <div className="about-highlight-card">
              <div className="highlight-icon-wrapper">
                <span className="highlight-icon">🎯</span>
              </div>
              <div className="highlight-content">
                <strong>Mission-Driven</strong>
                <p>Delivering solutions that make a real impact on your business growth</p>
              </div>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-icon-wrapper">
                <span className="highlight-icon">🌟</span>
              </div>
              <div className="highlight-content">
                <strong>Quality First</strong>
                <p>Excellence in every line of code and attention to detail</p>
              </div>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-icon-wrapper">
                <span className="highlight-icon">🤝</span>
              </div>
              <div className="highlight-content">
                <strong>Client-Focused</strong>
                <p>Your success is our success - we're committed to your goals</p>
              </div>
            </div>
            <div className="about-highlight-card">
              <div className="highlight-icon-wrapper">
                <span className="highlight-icon">⚡</span>
              </div>
              <div className="highlight-content">
                <strong>Innovation</strong>
                <p>Staying ahead with cutting-edge technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="contact" className="contact-section">
        <div className="section-header">
          <h3>Get In Touch</h3>
          <p>Ready to start your project? Let's talk!</p>
        </div>
        <div className="contact-content">
          <div className="contact-meta">
            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <h4>Email Us</h4>
              <a href="mailto:info@munagalatechsolutions.com">info@munagalatechsolutions.com</a>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">💬</div>
              <h4>Quick Response</h4>
              <p>We typically respond within 24 hours</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">🌍</div>
              <h4>Global Reach</h4>
              <p>Serving clients worldwide</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
