const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Scalable e-commerce solution with advanced features'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      description: 'Secure and user-friendly banking application'
    },
    {
      title: 'Cloud Migration',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      description: 'Seamless cloud infrastructure migration'
    },
    {
      title: 'Healthcare Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description: 'Intuitive healthcare management system'
    },
    {
      title: 'SaaS Platform',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Complete SaaS solution with subscription management'
    },
    {
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Real-time analytics and reporting platform'
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <h3>Our Portfolio</h3>
        <p>Explore some of our recent successful projects</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <div className="portfolio-image-container">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <span className="portfolio-category">{project.category}</span>
              </div>
            </div>
            <div className="portfolio-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

