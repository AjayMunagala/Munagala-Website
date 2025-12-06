const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'We deliver projects on time without compromising quality'
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and creative problem-solving'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Perfect experience across all devices and screen sizes'
    },
    {
      icon: '⚡',
      title: 'Performance Optimized',
      description: 'Lightning-fast applications with optimized performance'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: '24/7 support and maintenance for all your needs'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="section-header">
        <h3>Why Choose Us</h3>
        <p>We combine expertise, innovation, and dedication to deliver exceptional results</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon-wrapper">
              <span className="feature-icon-large">{feature.icon}</span>
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

