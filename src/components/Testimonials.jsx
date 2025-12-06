const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Munagala Tech Solutions transformed our business with their exceptional web development services. The team is professional, responsive, and delivers beyond expectations.',
      rating: 5,
      avatar: '👩‍💼',
      company: 'TechStart Inc.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Digital Innovations',
      content: 'Their cloud infrastructure expertise helped us scale seamlessly. The DevOps implementation reduced our deployment time by 80%. Highly recommended!',
      rating: 5,
      avatar: '👨‍💻',
      company: 'Digital Innovations',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, Creative Labs',
      content: 'The UI/UX design work exceeded our expectations. Our user engagement increased by 150% after the redesign. Amazing attention to detail!',
      rating: 5,
      avatar: '👩‍🎨',
      company: 'Creative Labs',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section-modern">
      <div className="section-header-modern">
        <div className="section-label">Client Success Stories</div>
        <h3 className="section-title-modern">What Our Clients Say</h3>
        <p className="section-description-modern">
          Don't just take our word for it - hear from our satisfied clients who have transformed their businesses with us
        </p>
      </div>
      
      <div className="testimonials-container-modern">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card-modern"
            style={{ '--testimonial-gradient': testimonial.gradient }}
          >
            <div className="testimonial-quote-icon">"</div>
            
            <div className="testimonial-rating-modern">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star-icon">★</span>
              ))}
            </div>
            
            <p className="testimonial-content-modern">
              {testimonial.content}
            </p>
            
            <div className="testimonial-footer-modern">
              <div className="testimonial-author-modern">
                <div 
                  className="testimonial-avatar-modern"
                  style={{ background: testimonial.gradient }}
                >
                  <span className="avatar-emoji">{testimonial.avatar}</span>
                </div>
                <div className="testimonial-info-modern">
                  <div className="testimonial-name-modern">{testimonial.name}</div>
                  <div className="testimonial-role-modern">{testimonial.role}</div>
                  <div className="testimonial-company-modern">{testimonial.company}</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card-decoration"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

