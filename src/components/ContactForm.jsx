const ContactForm = ({onSubmit}) => {
  const handle = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const data = Object.fromEntries(fd.entries())
    if (onSubmit) onSubmit(data)
    else alert('Form submitted (demo). We will wire backend later.')
    e.target.reset()
  }

  return (
    <form onSubmit={handle} className="contact-form">
      <input 
        name="name" 
        type="text"
        placeholder="Your name" 
        required 
        aria-label="Your name"
      />
      <input 
        name="email" 
        type="email"
        placeholder="Your email" 
        required 
        aria-label="Your email"
      />
      <textarea 
        name="message" 
        placeholder="Tell us about your project..." 
        rows={6} 
        required 
        aria-label="Your message"
      />
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        <button type="submit" className="btn">Send Message</button>
        <button 
          type="button" 
          className="btn secondary" 
          onClick={()=>{
            const form = document.querySelector('.contact-form');
            if (form) form.reset();
          }}
        >
          Clear
        </button>
      </div>
    </form>
  )
}

export default ContactForm
