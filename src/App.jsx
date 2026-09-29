import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Mail,
  ChevronDown,
} from "lucide-react";

import logo from "./assets/builtbynix-logo.png";
import "./App.css";
import RequestForm from "./components/RequestForm";
import Reveal from "./components/Reveal";

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

const faqs = [
  {
    question: "How do I Request My Website?",
    answer:
      "Use the REQUEST MY WEBSITE button and submit your requirements. We will review the request and contact you to discuss the project.",
  },
  {
    question: "Can I request something outside the listed plans?",
    answer:
      "Yes. The Custom option exists for projects with requirements that do not fit the standard plans.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. Websites are designed to work across desktop, tablet and mobile screen sizes.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Existing websites can be discussed as part of a custom project request.",
  },
  {
    question: "What happens after I submit a request?",
    answer:
      "We review the information you provide, contact you to discuss the requirements, and then determine the appropriate scope and pricing.",
  },
];

function App() {
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY <= 700) {
        setHeroOffset(scrollY * 0.12);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    closeMenu();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const requestService = (service) => {
    const requestSection = document.getElementById("request");

    if (requestSection) {
      requestSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    window.dispatchEvent(
      new CustomEvent("select-project-type", {
        detail: service,
      })
    );
  };

  return (
    <div className="site-shell">
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="BuiltByNix&Co home"
        >
          <img src={logo} alt="BuiltByNix&Co" />
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <button onClick={() => scrollToSection("work")}>Work</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("plans")}>Plans</button>
          <button onClick={() => scrollToSection("process")}>Process</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button
            className="nav-project-button"
            onClick={() => {
              document.getElementById("request")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            REQUEST MY WEBSITE
            <ArrowUpRight size={15} />
          </button>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-background-number">01</div>

          <div className="hero-topline">
            <span>WEBSITE DEVELOPMENT SERVICES</span>
            <span>EST. 2026</span>
          </div>

          <div
            className="hero-content"
            style={{
              transform: `translateY(-${heroOffset}px)`,
            }}
          >
            <p className="eyebrow reveal">BUILT BY NIX & CO.</p>

            <h1 className="hero-title">
              <span>YOUR IDEA.</span>
              <span className="hero-title-accent">OUR CRAFT.</span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-description">
                Premium websites built with purpose, precision and a clear
                understanding of the people behind the business.
              </p>

              <button
                className="primary-button"
                onClick={() => {
                  document.getElementById("request")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span>REQUEST MY WEBSITE</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          <div className="hero-footer">
            <span>DESIGN</span>
            <span>DEVELOPMENT</span>
            <span>RESPONSIVE</span>
            <span>DETAIL</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro section">
          <div className="section-label">
            <span>02</span>
            <span>THE STUDIO</span>
          </div>

          <div className="intro-grid">
            <h2>
              A website should feel like
              <em> your business.</em>
            </h2>

            <div className="intro-copy">
              <p>
                BuiltByNix&Co creates websites for businesses, creators and
                people with ideas worth presenting properly.
              </p>

              <p>
                We combine thoughtful design with practical development to
                create digital experiences that look professional and work
                beautifully across devices.
              </p>

              <button
                className="text-button"
                onClick={() => scrollToSection("about")}
              >
                More about us
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-section" id="services">
          <div className="services-header">
            <Reveal>
              <div>
                <span className="eyebrow">WHAT WE DO</span>

                <h2>
                  Built for
                  <br />
                  <em>your next move.</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p>
                From a first idea to a polished digital presence,
                we create websites designed around your business,
                your audience and your goals.
              </p>
            </Reveal>
          </div>

          <div className="services-list">
            <Reveal delay={0.05}>
              <article className="service-item">
              <div className="service-number">01</div>

              <div className="service-main">
                <h3>Business Websites</h3>
                <p>
                  Professional websites that establish credibility,
                  communicate what you do and turn visitors into
                  potential customers.
                </p>
              </div>

              <button
                type="button"
                className="service-arrow"
                aria-label="Request a Business Website"
                onClick={() => requestService("Business Website")}
              >
                <ArrowUpRight size={22} />
              </button>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="service-item">
              <div className="service-number">02</div>

              <div className="service-main">
                <h3>Landing Pages</h3>
                <p>
                  Focused, high-impact pages built around a specific
                  product, service, campaign or goal.
                </p>
              </div>

              <button
                type="button"
                className="service-arrow"
                aria-label="Request a Landing Page"
                onClick={() => requestService("Landing Page")}
              >
                <ArrowUpRight size={22} />
              </button>
              </article>
            </Reveal>

            <Reveal delay={0.19}>
              <article className="service-item">
              <div className="service-number">03</div>

              <div className="service-main">
                <h3>Portfolio Websites</h3>
                <p>
                  Distinctive personal websites that present your
                  work, skills and identity with clarity.
                </p>
              </div>

              <button
                type="button"
                className="service-arrow"
                aria-label="Request a Portfolio Website"
                onClick={() => requestService("Portfolio")}
              >
                <ArrowUpRight size={22} />
              </button>
              </article>
            </Reveal>

            <Reveal delay={0.26}>
              <article className="service-item">
              <div className="service-number">04</div>

              <div className="service-main">
                <h3>E-commerce</h3>
                <p>
                  Product-focused online experiences designed to
                  showcase your products and support your sales.
                </p>
              </div>

              <button
                type="button"
                className="service-arrow"
                aria-label="Request an E-commerce Website"
                onClick={() => requestService("E-commerce")}
              >
                <ArrowUpRight size={22} />
              </button>
              </article>
            </Reveal>

            <Reveal delay={0.33}>
              <article className="service-item">
              <div className="service-number">05</div>

              <div className="service-main">
                <h3>Custom Web Solutions</h3>
                <p>
                  Have something different in mind? Tell us what
                  you need and we'll shape the experience around it.
                </p>
              </div>

              <button
                type="button"
                className="service-arrow"
                aria-label="Request a Custom Web Solution"
                onClick={() => requestService("Other")}
              >
                <ArrowUpRight size={22} />
              </button>
              </article>
            </Reveal>
          </div>

          <div className="services-bottom">
            <span>DESIGNED AROUND YOUR NEEDS</span>

            <button
              onClick={() => {
                document.getElementById("request")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              REQUEST YOUR WEBSITE
              <ArrowRight size={17} />
            </button>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="work section">
          <div className="section-label">
            <span>04</span>
            <span>SELECTED WORK</span>
          </div>

          <div className="work-heading">
            <div>
              <p className="eyebrow">THE PORTFOLIO</p>
              <h2>
                Work that speaks
                <br />
                <em>before we do.</em>
              </h2>
            </div>

            <p>
              Every project is an opportunity to make a business look as
              serious online as it is in real life.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-card project-large">
              <div className="project-visual project-visual-one">
                <span>PROJECT 01</span>
                <strong>YOUR<br />NEXT<br />WEBSITE</strong>
              </div>

              <div className="project-meta">
                <div>
                  <span>BUSINESS WEBSITE</span>
                  <h3>Project Showcase</h3>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </article>

            <article className="project-card">
              <div className="project-visual project-visual-two">
                <span>PROJECT 02</span>
                <strong>CRAFT<br />YOUR<br />PRESENCE</strong>
              </div>

              <div className="project-meta">
                <div>
                  <span>CREATIVE / BRAND</span>
                  <h3>Digital Presence</h3>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </article>

            <article className="project-card">
              <div className="project-visual project-visual-three">
                <span>PROJECT 03</span>
                <strong>BUILT<br />TO<br />GROW</strong>
              </div>

              <div className="project-meta">
                <div>
                  <span>BUSINESS / WEB</span>
                  <h3>Growth Platform</h3>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </article>
          </div>

          <p className="portfolio-note">
            More work will appear here as projects are completed.
          </p>
        </section>

        {/* PLANS */}
        <section className="plans-section" id="plans">
          <div className="plans-header">
            <Reveal>
              <div>
                <span className="eyebrow">
                  SIMPLE, CLEAR, BUILT FOR YOU
                </span>

                <h2>
                  Choose the
                  <br />
                  <em>right starting point.</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                No confusing packages. Pick the starting point that
                matches what you're trying to build.
              </p>
            </Reveal>
          </div>

          <div className="plans-list">
            <Reveal delay={0.05}>
              <article className="plan-card">
              <div className="plan-top">
                <span className="plan-index">01</span>
                <span className="plan-label">DEMO / PROJECT</span>
              </div>

              <div className="plan-price">
                <span>₹</span>500
              </div>

              <p>
                A focused website project for testing an idea,
                presenting a concept or getting your first
                digital presence online.
              </p>

              <ul>
                <li>Custom website design</li>
                <li>Responsive layout</li>
                <li>Professional visual direction</li>
                <li>Deployment assistance</li>
              </ul>

              <button
                onClick={() => {
                  document.getElementById("request")?.scrollIntoView({
                    behavior: "smooth",
                  });

                  window.dispatchEvent(
                    new CustomEvent("select-plan", {
                      detail: "Demo / Project",
                    })
                  );
                }}
              >
                REQUEST THIS PLAN
                <ArrowUpRight size={18} />
              </button>
              </article>
            </Reveal>

            <Reveal delay={0.15}>
              <article className="plan-card plan-featured">
              <div className="plan-top">
                <span className="plan-index">02</span>
                <span className="plan-label">PROTOTYPE</span>
              </div>

              <div className="plan-price">
                <span>₹</span>1,000
              </div>

              <p>
                A more refined web experience for businesses,
                creators and ideas that need a stronger
                digital identity.
              </p>

              <ul>
                <li>Everything in Demo / Project</li>
                <li>More refined interactions</li>
                <li>Custom sections and layouts</li>
                <li>Polished responsive experience</li>
              </ul>

              <button
                onClick={() => {
                  document.getElementById("request")?.scrollIntoView({
                    behavior: "smooth",
                  });

                  window.dispatchEvent(
                    new CustomEvent("select-plan", {
                      detail: "Prototype",
                    })
                  );
                }}
              >
                REQUEST THIS PLAN
                <ArrowUpRight size={18} />
              </button>
              </article>
            </Reveal>

            <Reveal delay={0.25}>
              <article className="plan-card">
              <div className="plan-top">
                <span className="plan-index">03</span>
                <span className="plan-label">BUSINESS</span>
              </div>

              <div className="plan-price">
                <span>₹</span>5,000
              </div>

              <p>
                A complete professional web presence designed
                for businesses that want a stronger and more
                established online identity.
              </p>

              <ul>
                <li>Complete custom experience</li>
                <li>Advanced interactions</li>
                <li>Business-focused structure</li>
                <li>Deployment assistance</li>
              </ul>

              <button
                onClick={() => {
                  document.getElementById("request")?.scrollIntoView({
                    behavior: "smooth",
                  });

                  window.dispatchEvent(
                    new CustomEvent("select-plan", {
                      detail: "Business",
                    })
                  );
                }}
              >
                REQUEST THIS PLAN
                <ArrowUpRight size={18} />
              </button>
              </article>
            </Reveal>
          </div>

          <div className="plans-note">
            <span>NEED SOMETHING DIFFERENT?</span>

            <button
              onClick={() => {
                document.getElementById("request")?.scrollIntoView({
                  behavior: "smooth",
                });

                window.dispatchEvent(
                  new CustomEvent("select-plan", {
                    detail: "Custom",
                  })
                );
              }}
            >
              TALK TO US ABOUT A CUSTOM PROJECT
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section" id="process">
          <div className="process-header">
            <Reveal>
              <span className="eyebrow">HOW IT WORKS</span>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="process-header-row">
                <h2>
                  From idea
                  <br />
                  <em>to online.</em>
                </h2>

                <p>
                  A straightforward process designed to turn your
                  idea into a polished website without unnecessary
                  complexity.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="process-list">
            <Reveal delay={0.05}>
              <article className="process-item">
              <div className="process-number">01</div>

              <div className="process-content">
                <span>START WITH THE IDEA</span>
                <h3>Tell us what you need.</h3>
                <p>
                  Share your idea, business, goals and the kind of
                  website you're looking for. You don't need to have
                  everything figured out before reaching out.
                </p>
              </div>

              <div className="process-mark">↗</div>
              </article>
            </Reveal>

            <Reveal delay={0.14}>
              <article className="process-item">
              <div className="process-number">02</div>

              <div className="process-content">
                <span>DEFINE THE DIRECTION</span>
                <h3>We shape the experience.</h3>
                <p>
                  We turn your requirements into a clear visual
                  direction, structure and experience that fits
                  what you're trying to achieve.
                </p>
              </div>

              <div className="process-mark">↗</div>
              </article>
            </Reveal>

            <Reveal delay={0.23}>
              <article className="process-item">
              <div className="process-number">03</div>

              <div className="process-content">
                <span>BUILD THE WEBSITE</span>
                <h3>We bring it to life.</h3>
                <p>
                  Design, development, responsive layouts and
                  interactions come together into a website built
                  around your project.
                </p>
              </div>

              <div className="process-mark">↗</div>
              </article>
            </Reveal>

            <Reveal delay={0.32}>
              <article className="process-item">
              <div className="process-number">04</div>

              <div className="process-content">
                <span>READY TO LAUNCH</span>
                <h3>Put it in front of people.</h3>
                <p>
                  Once everything is ready, we help you get the
                  website deployed and ready to be shared with
                  your audience.
                </p>
              </div>

              <div className="process-mark">↗</div>
              </article>
            </Reveal>
          </div>

          <div className="process-footer">
            <span>BUILT WITH INTENTION</span>

            <button
              type="button"
              onClick={() => {
                document.getElementById("request")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              START YOUR PROJECT
              <ArrowUpRight size={17} />
            </button>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-top">
            <span className="eyebrow">THE STUDIO</span>
            <span className="about-location">BUILT WITH PURPOSE · 2026</span>
          </div>

          <div className="about-main">
            <Reveal>
              <h2>
                We don't just
                <br />
                <em>make websites.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="about-statement">
                <p className="about-lead">
                  We build digital experiences that give ideas
                  somewhere to live.
                </p>

                <p>
                  BuiltByNix&Co is a web studio focused on creating
                  thoughtful, modern websites for businesses,
                  creators and people building something of their own.
                </p>

                <p>
                  From the first idea to the final deployment, every
                  project is shaped around clarity, visual quality and
                  a useful experience for the people who will actually
                  use it.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="about-divider" />

          <div className="about-values">
            <Reveal delay={0.05}>
              <div className="about-value">
              <span>01</span>
              <h3>Intentional</h3>
              <p>
                Every section has a reason to exist. We avoid
                unnecessary complexity and design around the goal.
              </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="about-value">
              <span>02</span>
              <h3>Distinct</h3>
              <p>
                Your website should feel like your brand, not
                another copy of something already online.
              </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="about-value">
              <span>03</span>
              <h3>Built to last</h3>
              <p>
                Clean structure, responsive layouts and practical
                development come together behind the visuals.
              </p>
              </div>
            </Reveal>
          </div>

          <div className="about-bottom">
            <span>BUILTBYNIX&CO</span>

            <button
              type="button"
              onClick={() => {
                document.getElementById("request")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              WORK WITH US
              <ArrowUpRight size={17} />
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq section">
          <div className="section-label">
            <span>08</span>
            <span>QUESTIONS</span>
          </div>

          <div className="faq-grid">
            <div>
              <p className="eyebrow">GOOD TO KNOW</p>
              <h2>
                Before you
                <br />
                <em>reach out.</em>
              </h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <article
                    className={`faq-item ${isOpen ? "faq-open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={20} />
                    </button>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact section dark-section">
          <div className="section-label light-label">
            <span>09</span>
            <span>REQUEST MY WEBSITE</span>
          </div>

          <div className="contact-heading">
            <p className="eyebrow">HAVE AN IDEA?</p>

            <h2>
              Let's build
              <br />
              <em>something meaningful.</em>
            </h2>

            <p>
              Tell us about your project. We'll review your request and get
              back to you to discuss the details.
            </p>
          </div>

          <div className="contact-actions">
            <button
              className="contact-main-button"
              onClick={() => {
                document.getElementById("request")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <span>REQUEST MY WEBSITE</span>
              <ArrowUpRight size={22} />
            </button>

            <a
              href="mailto:nihxl09@gmail.com"
              className="contact-secondary-button"
            >
              <Mail size={18} />
              nihxl09@gmail.com
            </a>
          </div>

          <div className="contact-bottom">
            <a
              href="https://instagram.com/BuiltByNix.Co"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={18} />
              @BuiltByNix.Co
            </a>

            <span>RESPONSES VIA EMAIL</span>
          </div>
        </section>
      </main>

      {/* Request */}
      <RequestForm />

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-cta">
          <span className="eyebrow">HAVE AN IDEA?</span>

          <h2>
            Let's build
            <br />
            <em>something good.</em>
          </h2>

          <button
            type="button"
            onClick={() => {
              document.getElementById("request")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            REQUEST YOUR WEBSITE
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              BuiltByNix<span>&</span>Co
            </div>

            <p>
              Websites built around ideas,
              <br />
              businesses and people.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <span>EXPLORE</span>

              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#plans">Plans</a>
              <a href="#process">Process</a>
              <a href="#about">About</a>
            </div>

            <div className="footer-column">
              <span>START</span>

              <button
                type="button"
                onClick={() => {
                  document.getElementById("request")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Request a website
              </button>

              <a href="mailto:nihxl09@gmail.com">
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BUILTBYNIX&CO</span>

          <span>WEB DESIGN · DEVELOPMENT · DIGITAL</span>

          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;