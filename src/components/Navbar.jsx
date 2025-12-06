import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.site-header')) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isHomePage = location.pathname === '/';

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="brand" onClick={closeMenu}>
        <img src={Logo} alt="Munagala Tech Solutions logo" />
        {/* <span className="brand-text">Munagala Tech</span> */}
      </Link>
      <button 
        className="mobile-menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`hamburger ${menuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {isHomePage ? (
          <>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </>
        ) : (
          <>
            <Link 
              to="/" 
              onClick={(e) => {
                closeMenu();
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Services
            </Link>
            <Link 
              to="/" 
              onClick={(e) => {
                closeMenu();
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Portfolio
            </Link>
            <Link 
              to="/" 
              onClick={(e) => {
                closeMenu();
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              About
            </Link>
            <Link 
              to="/" 
              onClick={(e) => {
                closeMenu();
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById('testimonials');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Testimonials
            </Link>
            <Link 
              to="/" 
              onClick={(e) => {
                closeMenu();
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Contact
            </Link>
          </>
        )}
        <Link 
          to="/" 
          className="nav-cta" 
          onClick={(e) => {
            closeMenu();
            e.preventDefault();
            navigate('/');
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          Get Started
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
