"use client";

import { FormEvent, useState } from "react";

const services = [
  {
    number: "01",
    title: "Website Design",
    description: "Distinctive, user-centred websites that make a strong first impression and turn attention into action.",
    tags: ["UI/UX design", "Responsive layouts", "Design systems"]
  },
  {
    number: "02",
    title: "Website Development",
    description: "Fast, reliable digital experiences built around your goals, your audience and the way your business works.",
    tags: ["Business websites", "Custom development", "CMS integration"]
  },
  {
    number: "03",
    title: "E-commerce Solutions",
    description: "Thoughtful online stores that make it easier for customers to discover, trust and buy from your brand.",
    tags: ["Shopify", "Store design", "Conversion journeys"]
  },
  {
    number: "04",
    title: "Digital Positioning",
    description: "A clearer digital presence: the right message, visual direction and website experience for your market.",
    tags: ["Brand direction", "Website strategy", "Content structure"]
  },
  {
    number: "05",
    title: "Redesign & Optimization",
    description: "Make an existing website work harder with a sharper experience, clearer structure and performance improvements.",
    tags: ["Website audits", "UX improvements", "Performance"]
  },
  {
    number: "06",
    title: "Ongoing Support",
    description: "Practical website care and improvements that keep your digital presence current as your business evolves.",
    tags: ["Maintenance", "Updates", "Technical support"]
  }
];

const projects = [
  { category: "Brand & business", title: "A clearer digital first impression", detail: "Corporate website concept", tone: "project-one" },
  { category: "E-commerce", title: "A smoother path to purchase", detail: "Online store experience", tone: "project-two" },
  { category: "Professional services", title: "Turning expertise into trust", detail: "Service-led website concept", tone: "project-three" }
];

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your message.");
      setStatus("Thanks for reaching out. Your message has been received.");
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus(message);
    } finally {
      setSending(false);
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="header">
        <a className="brand" href="#home" aria-label="Elites Global home" onClick={closeMenu}>
          <span className="brand-mark">E<span>.</span></span>
          <span className="brand-name">ELITES <b>GLOBAL</b><small>DIGITAL EXPERIENCES</small></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Our approach</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Let&apos;s talk <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> DIGITAL DESIGN & DEVELOPMENT STUDIO</div>
          <h1>Make your digital<br />presence <em>matter.</em></h1>
          <p className="hero-copy">We design and build purposeful websites that help ambitious businesses earn trust, communicate clearly and move forward.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contact">Start a project <span>↗</span></a>
            <a className="text-link" href="#services">Explore what we do <span>↓</span></a>
          </div>
          <div className="hero-footnote"><span className="pulse" /> STRATEGY-LED. DESIGN-FOCUSED. BUILT FOR GROWTH.</div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="art-core"><span>E</span><i /></div>
          <div className="art-label label-top">IDEAS INTO<br />EXPERIENCES</div>
          <div className="art-label label-bottom">DESIGN / BUILD / EVOLVE</div>
          <div className="art-cross cross-one" /><div className="art-cross cross-two" />
        </div>
        <div className="hero-index"><span>01</span> / 04</div>
      </section>

      <section className="trust-strip">
        <span>GOOD DIGITAL WORK STARTS WITH CLARITY</span>
        <div className="strip-line" />
        <span>THOUGHTFUL BY DESIGN <b>✳</b> BUILT WITH PURPOSE</span>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-kicker">01 / WHO WE ARE</div>
        <div className="intro-main">
          <h2>Not just a website.<br /><span>A better way to</span> show up.</h2>
          <div className="intro-text">
            <p>Elites Global is a website design and digital positioning studio. We bring strategy, design and technology together to create online experiences that feel considered and work hard for your business.</p>
            <p>From a first-time website to a complete digital refresh, we focus on what matters: your message, your customers and the experience between the two.</p>
            <a className="under-link" href="#contact">Tell us what you&apos;re building <span>↗</span></a>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>01<span>—</span></strong><small>One clear direction</small></div>
          <div><strong>360<span>°</span></strong><small>Thoughtful digital view</small></div>
          <div><strong>∞</strong><small>Room to keep evolving</small></div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div><div className="section-kicker">02 / WHAT WE DO</div><h2>Digital, made<br /><em>purposeful.</em></h2></div>
          <p>Everything your business needs to create a stronger, more effective presence online — thoughtfully planned and carefully delivered.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><span className="service-arrow">↗</span></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-inner">
          <div className="section-kicker">THE ELITES APPROACH</div>
          <p>Clarity first.<br /><span>Purpose in every pixel.</span><br />Progress in every detail.</p>
          <a className="button button-outline" href="#contact">Let&apos;s create something meaningful <span>↗</span></a>
        </div>
        <div className="manifesto-decoration" aria-hidden="true">E</div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading work-heading">
          <div><div className="section-kicker">03 / HOW WE THINK</div><h2>Good work has<br /><em>a reason.</em></h2></div>
          <p>We don&apos;t start with decoration. We start by understanding what your business needs to say, who it needs to reach and what a successful experience should make possible.</p>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => (
            <article className="work-card" key={project.title}>
              <div className={`project-visual ${project.tone}`}>
                <div className="visual-window"><div className="window-bar"><i /><i /><i /></div><div className="window-content"><span>{index === 0 ? "A BRAND WITH" : index === 1 ? "SHOP WITH" : "BUILT ON"}</span><b>{index === 0 ? "A point of view." : index === 1 ? "Confidence." : "Experience."}</b><i /></div></div>
                <span className="visual-number">0{index + 1}</span>
              </div>
              <div className="work-meta"><span>{project.category}</span><span>{project.detail}</span></div>
              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
        <p className="work-note">Illustrative concepts showing the kinds of digital experiences we create. Project case studies can be added as client work is approved for publication.</p>
      </section>

      <section className="process section-pad">
        <div className="section-kicker">04 / THE PROCESS</div>
        <div className="process-head"><h2>Simple steps.<br /><em>Considered results.</em></h2><p>A collaborative process keeps the work focused, transparent and moving in the right direction.</p></div>
        <div className="process-list">
          {[
            ["01", "Discover", "We learn about your business, audience, goals and the opportunity in front of you."],
            ["02", "Define", "We shape the direction, priorities, content structure and scope before design begins."],
            ["03", "Design & build", "We turn the agreed direction into a responsive website, refining the details as we go."],
            ["04", "Launch & evolve", "We prepare your website for launch and help you plan the next improvements."]
          ].map(step => <div className="process-item" key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p><b>↗</b></div>)}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-left">
          <div className="section-kicker">05 / START A CONVERSATION</div>
          <h2>Have a good<br />thing <em>in mind?</em></h2>
          <p>Tell us a little about it. Whether you&apos;re starting from scratch or ready for a better website, we&apos;d be glad to hear from you.</p>
          <div className="contact-detail"><span>EMAIL</span><a href="mailto:hello@elites-global.org">hello@elites-global.org ↗</a></div>
          <div className="contact-detail"><span>PRINCIPAL CONTACT</span><b>Jackson Ethan</b></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your name<input name="name" placeholder="How should we address you?" required minLength={2} /></label>
          <label>Email address<input name="email" type="email" placeholder="you@company.com" required /></label>
          <label>What do you need?
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>Website design</option><option>Website development</option><option>E-commerce website</option><option>Digital positioning</option><option>Redesign and optimization</option><option>Ongoing support</option><option>Something else</option>
            </select>
          </label>
          <label>Tell us about your project<textarea name="message" placeholder="A little context helps us understand what you have in mind..." rows={4} required minLength={10} /></label>
          <button className="button button-light submit-button" type="submit" disabled={sending}>{sending ? "Sending..." : "Send enquiry"} <span>↗</span></button>
          {status && <p className="form-status" role="status">{status}</p>}
          <p className="form-privacy">Your details will only be used to respond to your enquiry.</p>
        </form>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">E<span>.</span></span><span className="brand-name">ELITES <b>GLOBAL</b><small>DIGITAL EXPERIENCES</small></span></a>
        <span className="footer-tagline">Make your digital presence matter.</span>
        <div className="footer-right"><a href="mailto:hello@elites-global.org">hello@elites-global.org</a><span>© {new Date().getFullYear()} Elites Global. All rights reserved.</span></div>
      </footer>
    </main>
  );
}