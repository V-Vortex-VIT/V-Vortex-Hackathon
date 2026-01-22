import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import ParticleBackground from "../components/ParticleBackground";
import {
  VortexIcon, AIIcon, ShieldIcon, HeartPulseIcon,
  CoinIcon, ChipIcon, CalendarIcon, MapPinIcon,
  TrophyIcon, SparkleIcon, LightningIcon, ArrowRightIcon
} from "../components/icons/index.jsx";
import "../styles/home.css";

export default function Home({ setTransition }) {
  const router = useNavigate();
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const goTo = (path) => {
    if (setTransition) setTransition(null);
    router(path);
    window.scrollTo(0, 0);
  };

  // Parallax effect for hero
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rounds = [
    {
      number: "01",
      title: "IDEATION",
      subtitle: "CONCEPTUALIZATION",
      date: "07th - 08th Jan",
      mode: "Online",
      desc: "Teams submitted their innovative ideas through our dedicated platform. Problem statements were revealed on January 7, 2026.",
      highlights: ["10-15 slides max", "Online submission", "48-hour window"]
    },
    {
      number: "02",
      title: "HACKATHON",
      subtitle: "CONSTRUCTION",
      date: "09th - 10th Jan",
      mode: "Offline",
      desc: "24-hour intensive hackathon at VIT Chennai. Teams built working prototypes with mentor guidance.",
      highlights: ["No pre-written code", "Any tech stack", "Mentors available"]
    },
    {
      number: "03",
      title: "PITCH",
      subtitle: "VALIDATION",
      date: "10th Jan",
      mode: "Live",
      desc: "Teams presented to industry experts and investors. Top teams received mentorship and opportunities.",
      highlights: ["10 min pitch", "Q&A session", "Expert feedback"]
    }
  ];

  const domains = [
    { name: "AI/ML", icon: AIIcon, color: "#8B5CF6", desc: "Machine Learning & Intelligence" },
    { name: "Cybersecurity", icon: ShieldIcon, color: "#06B6D4", desc: "Digital Defense & Privacy" },
    { name: "Healthcare", icon: HeartPulseIcon, color: "#EC4899", desc: "Medical Innovation" },
    { name: "Fintech", icon: CoinIcon, color: "#F59E0B", desc: "Financial Technology" },
    { name: "IoT & Robotics", icon: ChipIcon, color: "#10B981", desc: "Connected Systems" }
  ];

  const prizes = [
    { place: "1st", amount: "₹15,000", label: "Winner" },
    { place: "2nd", amount: "₹7,000", label: "Runner Up" },
    { place: "3rd", amount: "₹5,000", label: "2nd Runner Up" },
    { place: "★", amount: "₹3,000", label: "Special Mentions" }
  ];

  const DRIVE_LINK = 'https://drive.google.com/drive/folders/1_8MIetG3u4Y-5st4FfFWtrbDbe6VEPFd?usp=sharing';

  return (
    <div className="vv-home">
      <ParticleBackground />

      {/* Animated gradient orbs */}
      <div className="gradient-orbs">
        <div className="orb orb-1" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
        <div className="orb orb-2" style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />
        <div className="orb orb-3" style={{ transform: `translate(${mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }} />
      </div>

      {/* Navigation */}
      <nav className="vv-nav glass-nav">
        <div className="nav-content">
          <div className="logo" data-cursor="hover">
            <img src="/logo.jpg" alt="V-Vortex Logo" className="logo-image" />
            <h1 className="gradient-text">V-VORTEX</h1>
          </div>

          <div className="nav-links">
            <a href="#domains" className="nav-link">Domains</a>
            <a href="#rounds" className="nav-link">Rounds</a>
            <a href="#prizes" className="nav-link">Prizes</a>
            <a href="#team" className="nav-link">Team</a>
          </div>

          <div className="nav-buttons">
            {/* Registration closed - event completed */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-grid" />
        </div>

        <AnimatedSection className="hero-content" animation="reveal-up">
          <div className="hero-badge">
            <SparkleIcon size={16} />
            <span>VIT Chennai Presents</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">V-VORTEX</span>
            <span className="title-line gradient-text">2026</span>
          </h1>

          <p className="hero-subtitle animate-text-glow">
            INNOVATION UNLEASHED
          </p>

          <p className="hero-desc">
            The ultimate national-level hackathon where champions were forged,
            ideas became reality, and innovation knew no bounds.
          </p>

          <div className="hero-cta">
            <a href={DRIVE_LINK} target="_blank" rel="noopener noreferrer" className="cta-primary">
              <span>View Problem Statements</span>
              <ArrowRightIcon size={20} />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card glass-card">
              <CalendarIcon size={24} />
              <div className="stat-info">
                <span className="stat-value">07-10 Jan 2026</span>
                <span className="stat-label">Event Held</span>
              </div>
            </div>
            <div className="stat-card glass-card">
              <MapPinIcon size={24} />
              <div className="stat-info">
                <span className="stat-value">VIT Chennai</span>
                <span className="stat-label">Venue</span>
              </div>
            </div>
            <div className="stat-card glass-card">
              <TrophyIcon size={24} />
              <div className="stat-info">
                <span className="stat-value">₹30,000+</span>
                <span className="stat-label">Prize Pool</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </header>

      {/* Domains Section */}
      <section id="domains" className="section domains-section">
        <AnimatedSection className="section-header" animation="reveal-up">
          <span className="section-tag">CHALLENGE AREAS</span>
          <h2 className="section-title">Battle Domains</h2>
          <p className="section-desc">Choose your arena and demonstrate your expertise</p>
        </AnimatedSection>

        <div className="domains-grid">
          {domains.map((domain, idx) => (
            <AnimatedSection
              key={domain.name}
              className="domain-card tilt-3d"
              animation="scale-in"
              delay={idx * 100}
              onClick={() => window.open(DRIVE_LINK, '_blank')}
            >
              <div className="domain-glow" style={{ background: domain.color }} />
              <div className="domain-icon" style={{ color: domain.color }}>
                <domain.icon size={48} />
              </div>
              <h3 className="domain-name">{domain.name}</h3>
              <p className="domain-desc">{domain.desc}</p>
              <div className="domain-arrow">
                <ArrowRightIcon size={20} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Rounds Section */}
      <section id="rounds" className="section rounds-section">
        <AnimatedSection className="section-header" animation="reveal-up">
          <span className="section-tag">THE JOURNEY</span>
          <h2 className="section-title">The Path Taken</h2>
          <p className="section-desc">Three intense rounds of innovation</p>
        </AnimatedSection>

        <div className="timeline">
          {rounds.map((round, idx) => (
            <AnimatedSection
              key={round.number}
              className="timeline-item"
              animation={idx % 2 === 0 ? "slide-left" : "slide-right"}
              delay={idx * 150}
            >
              <div className="timeline-connector">
                <div className="timeline-dot">
                  <span>{round.number}</span>
                </div>
                <div className="timeline-line" />
              </div>

              <div className="round-card glass-card">
                <div className="round-header">
                  <div className="round-badges">
                    <span className="round-date">{round.date}</span>
                    <span className="round-mode">{round.mode}</span>
                  </div>
                  <h3 className="round-title">{round.title}</h3>
                  <span className="round-subtitle">{round.subtitle}</span>
                </div>

                <p className="round-desc">{round.desc}</p>

                <ul className="round-highlights">
                  {round.highlights.map((h, i) => (
                    <li key={i}>
                      <SparkleIcon size={14} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="section prizes-section">
        <AnimatedSection className="section-header" animation="reveal-up">
          <span className="section-tag">REWARDS</span>
          <h2 className="section-title">Winners Awarded</h2>
          <p className="section-desc">Winners received amazing prizes and recognition</p>
        </AnimatedSection>

        <div className="prizes-grid">
          {prizes.map((prize, idx) => (
            <AnimatedSection
              key={prize.place}
              className={`prize-card ${idx === 0 ? 'prize-winner' : ''}`}
              animation="scale-in"
              delay={idx * 100}
            >
              <div className="prize-place">{prize.place}</div>
              <div className="prize-amount gradient-text">{prize.amount}</div>
              <div className="prize-label">{prize.label}</div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="bonus-prizes" animation="fade-in" delay={400}>
          <div className="bonus-item">
            <TrophyIcon size={24} />
            <span>Certificates for all Finalists</span>
          </div>
          <div className="bonus-item">
            <SparkleIcon size={24} />
            <span>Internship Opportunities</span>
          </div>
          <div className="bonus-item">
            <LightningIcon size={24} />
            <span>Mentorship Sessions</span>
          </div>
        </AnimatedSection>
      </section>

      {/* Team Section */}
      <section id="team" className="section team-section">
        <AnimatedSection className="section-header" animation="reveal-up">
          <span className="section-tag">THE ARCHITECTS</span>
          <h2 className="section-title">Our Team</h2>
        </AnimatedSection>

        {/* Faculty Coordinators */}
        <AnimatedSection className="team-group" animation="fade-in">
          <h3 className="group-title">Faculty Coordinators</h3>
          <div className="team-grid coordinators">
            <div className="team-card glass-card">
              <div className="member-avatar">DP</div>
              <h4>Dr. Pavithra Sekar</h4>
              <span>Faculty Coordinator</span>
            </div>
            <div className="team-card glass-card">
              <div className="member-avatar">RP</div>
              <h4>Dr. Rama Parvathy</h4>
              <span>Faculty Coordinator</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Student Coordinators */}
        <AnimatedSection className="team-group" animation="fade-in" delay={100}>
          <h3 className="group-title">Student Coordinators</h3>
          <div className="team-grid coordinators">
            <div className="team-card glass-card">
              <div className="member-avatar gradient-avatar">SJ</div>
              <h4>Sugeeth Jayaraj S.A.</h4>
              <span>Student Coordinator</span>
              <a href="tel:+918122654796" className="contact-link">+91 81226 54796</a>
            </div>
            <div className="team-card glass-card">
              <div className="member-avatar gradient-avatar">PM</div>
              <h4>Prasanna M</h4>
              <span>Student Coordinator</span>
              <a href="tel:+919790970726" className="contact-link">+91 97909 70726</a>
            </div>
          </div>
        </AnimatedSection>

        {/* Team Leads */}
        <AnimatedSection className="team-group" animation="fade-in" delay={200}>
          <h3 className="group-title">Team Leads</h3>
          <div className="team-grid leads">
            {[
              { initials: "MS", name: "M. Shree", role: "Sponsorship & Awards" },
              { initials: "YG", name: "Yashwant Gokul", role: "Technical Support" },
              { initials: "KD", name: "L. Kevin Daniel", role: "Web Development" },
              { initials: "SJ", name: "Sanjay", role: "Security" },
              { initials: "JK", name: "Jaidev Karthikeyan", role: "Registration & Marketing" },
              { initials: "SV", name: "Suprajha V M", role: "Design & Social Media" },
              { initials: "SN", name: "Sanjana", role: "Design & Social Media" }
            ].map((member, idx) => (
              <div key={idx} className="team-card-mini glass-card">
                <div className="member-avatar-mini">{member.initials}</div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Dev Team */}
        <AnimatedSection className="team-group dev-team" animation="fade-in" delay={300}>
          <h3 className="group-title gradient-text">Dev Team</h3>
          <div className="team-grid dev">
            {[
              { initials: "IM", name: "Ibhan Mukherjee", role: "Frontend Developer" },
              { initials: "DP", name: "Devangshu Pandey", role: "Frontend Developer" },
              { initials: "SG", name: "Srijan Guchhait", role: "System Architect" }
            ].map((member, idx) => (
              <div key={idx} className="team-card glass-card dev-card">
                <div className="member-avatar gradient-avatar">{member.initials}</div>
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="vv-footer">
        <div className="footer-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H0Z" fill="url(#footerGrad)" />
            <defs>
              <linearGradient id="footerGrad" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="footer-content">
          <div className="footer-sponsors">
            <h3>Supported By</h3>
            <div className="sponsor-logos">
              <a href="https://vit.ac.in" target="_blank" rel="noopener noreferrer">
                <img src="/sponsors/vit-logo.png" alt="VIT Chennai" />
              </a>
              <a href="https://180degreesconsulting.com" target="_blank" rel="noopener noreferrer">
                <img src="/sponsors/180degrees.png" alt="180 Degrees Consulting" />
              </a>
              <a href="https://www.canarabank.com" target="_blank" rel="noopener noreferrer">
                <img src="/sponsors/Canara-Bank.jpg" alt="Canara Bank" />
              </a>
              <a href="https://unstop.com/" target="_blank" rel="noopener noreferrer">
                <img src="/sponsors/unstop.png" alt="Unstop" />
              </a>
              <a href="https://www.shnorh.com/" target="_blank" rel="noopener noreferrer">
                <img src="/sponsors/shnorh.jpg" alt="Shnorh" />
              </a>
              <a href="https://www.bhaveshassociates.com/" target="_blank" rel="noopener noreferrer">
                <img src="/sponsors/BaveshA.png" alt="Bavesh Associates" />
              </a>
              <a href="https://nvskzen.in/index.html" target="_blank" rel="noopener noreferrer">
                <img src="/sponsors/image.png" alt="NVSK Zen" />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-brand">
              <VortexIcon size={32} />
              <span className="gradient-text">V-VORTEX 2026</span>
            </div>
            <p className="footer-tagline">Where Legends Are Born</p>
            <p className="footer-copy">VIT Chennai • National Level Hackathon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
