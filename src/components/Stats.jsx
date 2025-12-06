const Stats = () => {
  const stats = [
    { number: '100+', label: 'Projects Completed', icon: '📊' },
    { number: '50+', label: 'Happy Clients', icon: '😊' },
    { number: '10+', label: 'Years Experience', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🔄' }
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

