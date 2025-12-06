const Hero = () => {
  return (
    <section className="hero-modern">
      <div className="hero-background-elements">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
        <div className="hero-gradient-orb orb-3"></div>
        <div className="hero-grid-pattern"></div>
      </div>
      
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>Trusted by 50+ Companies Worldwide</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line-1">Building Reliable Software</span>
            <span className="title-line-2">That Grows Your Business</span>
          </h1>
          
          <p className="hero-description">
            We design and build web and mobile applications, cloud infrastructure, 
            and delightful user experiences for startups and enterprises. Transform 
            your vision into reality with cutting-edge technology solutions.
          </p>
          
          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="hero-stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="hero-stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years</div>
            </div>
          </div>
          
          <div className="cta">
            <a href="#contact">
              <button className="btn btn-primary">
                <span>Get Started</span>
                <span className="btn-arrow">→</span>
              </button>
            </a>
            <a href="#services">
              <button className="btn btn-secondary">
                <span>Explore Services</span>
              </button>
            </a>
          </div>
        </div>

        <div className="hero-visual-content" aria-hidden="true">
          <div className="hero-visual-wrapper">
            <div className="floating-card card-1">
              <div className="card-icon">🌐</div>
              <div className="card-text">Web Development</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">📱</div>
              <div className="card-text">Mobile Apps</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">☁️</div>
              <div className="card-text">Cloud Solutions</div>
            </div>
            <div className="hero-center-glow"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
