import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="wrap">
          <div className="logo">THE KING'S ROOM</div>
          <div className="navlinks">
            <a href="#invitation">Blueprint</a>
            <a href="#paths">Enter</a>
            <a href="#proof">Proof</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Men's Wellness • Brotherhood • Legacy</div>
          <h1>Restoring the Blueprint of Man</h1>
          <p className="sub">Presence • Purity • Peace • Power</p>
          <a href="#paths" className="cta">
            ↓ Enter The King's Room ↓
          </a>
        </div>
      </header>

      <section id="invitation">
        <div className="wrap center">
          <h2>The Invitation</h2>
          <p className="sub">
            The King's Room is more than wellness. It's where men reset,
            reclaim, and restore what has been lost. This is the space to anchor
            presence, build brotherhood, and live with legacy.
          </p>
        </div>
      </section>

      <section id="paths">
        <div className="wrap">
          <h2 className="center">Choose Your Path</h2>
          <div className="grid cols-3" style={{ marginTop: "20px" }}>
            <div className="card">
              <h3>The King's Room Experience</h3>
              <p className="small">
                Join the next men's immersion — breath, sauna, ice, and ritual.
                A reset for body, mind, and spirit.
              </p>
              <a
                className="btn gold"
                href="https://forms.gle/YB5kkwBDkPEm5Z8H7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve Your Place
              </a>
            </div>
            <div className="card">
              <h3>The Men's Wellness Pack</h3>
              <p className="small">
                An 8-day digital reset. Daily practices to restore clarity,
                discipline, and vitality.
              </p>
              <a
                className="btn gold"
                href="https://drive.google.com/drive/folders/1-1dSgXnpjAVctazMK4ZoNq_LMTuUMAbY?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Instant Access
              </a>
            </div>
            <div className="card">
              <h3>The Round Table</h3>
              <p className="small">
                An annual brotherhood circle. A seat at the table of men
                committed to legacy.
              </p>
              <a
                className="btn gold"
                href="https://forms.gle/YB5kkwBDkPEm5Z8H7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="proof">
        <div className="wrap">
          <h2 className="center">Proof & Vision</h2>
          <p className="center kicker">
            "This is how men are choosing to live again."
          </p>
          <div className="gallery" style={{ marginTop: "18px" }}>
            <img src="/icebath.jpg" alt="Ice Bath" className="gallery-image" />
            <img
              src="/barbershop.JPG"
              alt="Barber Chair"
              className="gallery-image"
            />
            <img src="/fire.jpg" alt="Ritual" className="gallery-image" />
            <img src="/sauna.JPG" alt="Sauna" className="gallery-image" />
          </div>
        </div>
      </section>

      <section className="footer-cta">
        <div className="wrap">
          <h2 className="center">
            Legacy Before Clout. Presence Before Noise.
          </h2>
          <p className="center sub">
            Enter The King's Room. Restore the blueprint of man.
          </p>
          <a href="#paths" className="cta">
            ↓ Begin Here ↓
          </a>
        </div>
      </section>

      <footer>
        <div
          className="wrap small"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            borderTop: "1px solid #141414",
            paddingTop: "18px",
          }}
        >
          <div>
            © <span className="brand">The King's Room</span>
          </div>
          <div>Presence • Purity • Peace • Power</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
