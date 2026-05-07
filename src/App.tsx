import { useState } from 'react'
import dcAttractionImage from './assets/dc_attraction_6.jpg'
import dcAttractionImageTwo from './assets/dc_attraction_7.jpg'
import dcAttractionImageThree from './assets/dc_attraction_8.jpg'

import redCarpetImageOne from './assets/unbroken_red_carpet_1.jpg'
import redCarpetImageTwo from './assets/unbroken_red_carpet_2.jpg'
import './App.css'

const siteLinks = {
  trailer: 'https://www.youtube.com/watch?v=RdIObq2127M',
  map: 'https://maps.google.com/?q=Rayburn+House+Office+Building+45+Independence+Ave+SW+Washington+DC+20515',
}

const assets = {
  logo:
    'https://storage.readdy-site.link/project_files/dbd02c41-5493-4ff5-9f17-c4c8f4e83576/e88dc1d5-6509-4ce0-bcff-2c24186d68df_UNBROKEN-Logo.png?v=27470a4871b1c50dd5460f397ee1b580',
  trailerThumb: 'https://img.youtube.com/vi/RdIObq2127M/maxresdefault.jpg',
  washingtonMonument:
    'https://commons.wikimedia.org/wiki/Special:Redirect/file/The%20Washington%20Monument%20and%20memorial%20reflecting%20pool.jpg',
}

const awards = [
  {
    title: 'Best Documentary Feature - Oniros Film Awards New York 2026',
    image:
      'https://storage.readdy-site.link/project_files/dbd02c41-5493-4ff5-9f17-c4c8f4e83576/5f456811-c23d-401b-b046-be057ce21f47_BEST-DOCUMENTARY-FEATURE---Oniros-Film-Awards---New-York---2026.png?v=58697bcd42b535c0077ce2e0b7c221de',
  },
  {
    title: 'Best Editing Documentary Film - Sweden Film Awards 2026',
    image:
      'https://storage.readdy-site.link/project_files/dbd02c41-5493-4ff5-9f17-c4c8f4e83576/d6f691c2-77cc-412b-bcba-03740c0bc354_BEST-EDITING-DOCUMENTARY-FILM---Sweden-Film-Awards---2026.png?v=36ccb48e75258c9b98878c95be414395',
  },
  {
    title: 'Best Director Documentary Feature - Cannes World Film Festival 2026',
    image:
      'https://storage.readdy-site.link/project_files/dbd02c41-5493-4ff5-9f17-c4c8f4e83576/f4511ea8-e975-481d-ac1d-ca26d168d7b5_BEST-DIRECTOR-DOCUMENTARY-FEATURE---Cannes-World-Film-Festival---2026.png?v=78bebddbc5aed5bd1decf8c3f722fb1a',
  },
  {
    title: 'Best Dance Film - Cannes World Film Festival 2026',
    image:
      'https://storage.readdy-site.link/project_files/dbd02c41-5493-4ff5-9f17-c4c8f4e83576/84a80e1d-6192-48ba-bcac-14ad8b32bcaf_BEST-DANCE-FILM---Cannes-World-Film-Festival---2026.png?v=ec3b5e670fc09693e6c7c89fd57871a3',
  },
]

const reviews = [
  {
    quote:
      'Insightful. Timely. Part coming-of-age story and political thriller. The investigation storyline will enthrall true crime fanatics, while families will appreciate the kinship of the Browde brothers.',
    source: 'Film Threat',
  },
  {
    quote:
      'Gripping and emotionally charged... Masterfully blends personal storytelling with investigative reporting... the clearest, and most detailed, documented case of Beijing trying to take down an American institution.',
    source: 'The Hollywood Times',
  },
  {
    quote:
      'A deeply moving narrative about artistic survival and a level of dedication that is rarely seen in the modern world... A show this beautiful and a story this "unbroken" deserves a focused audience. If you are at all interested in Asian culture, history, or the power of art to defy authority, you really should check out this documentary.',
    source: 'SheScribes',
  },
]

const testimonialVideos = [
  { id: 'PP7Y2J2BVlg', title: 'Video testimonial 1' },
  { id: 'JiMXGT4WGts', title: 'Video testimonial 2' },
  { id: 'voZb6TSnM3c', title: 'Video testimonial 3' },
  { id: 'VmkmTBsf1Ro', title: 'Video testimonial 4' },
  { id: 'HSDnaxH0-nw', title: 'Video testimonial 5' },
  { id: 'gHlLUP2hZ00', title: 'Video testimonial 6' },
]

const eventCards = [
  {
    icon: 'calendar',
    label: 'Date',
    title: 'Wednesday, June 17, 2026',
    detail: 'Red Carpet begins at 6:00 PM',
  },
  {
    icon: 'clock',
    label: 'Schedule',
    title: '6PM Red Carpet · 7PM Screening',
    detail: 'Followed by Q&A with the filmmakers',
  },
  {
    icon: 'pin',
    label: 'Venue',
    title: 'Rayburn House Office Building',
    detail: '45 Independence Ave SW, Washington, DC 20515',
  },
  {
    icon: 'ticket',
    label: 'Admission',
    title: 'By Invitation Only',
    detail: 'RSVP required - limited seating',
  },
]

function Icon({ name }: { name: string }) {
  if (name === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="6.5" width="15" height="13" rx="2" />
        <path d="M8 4.5v4M16 4.5v4M4.5 10.5h15" />
      </svg>
    )
  }

  if (name === 'clock') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 8v4.5l3 1.5" />
      </svg>
    )
  }

  if (name === 'pin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 20s5-5.2 5-9a5 5 0 1 0-10 0c0 3.8 5 9 5 9Z" />
        <circle cx="12" cy="11" r="1.8" />
      </svg>
    )
  }

  if (name === 'ticket') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7h12v3a2 2 0 0 0 0 4v3H6v-3a2 2 0 0 0 0-4V7Z" />
        <path d="M12 7v10" />
      </svg>
    )
  }

  if (name === 'sparkles') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 4 1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5M12 16h.01" />
    </svg>
  )
}

function App() {
  const [message, setMessage] = useState('')

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container site-header-inner">
          <a href="#top" className="brand-mark" aria-label="Unbroken home">
            <img src={assets.logo} alt="Unbroken" />
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#trailer">Trailer</a>
            <a href="#reviews">Reviews</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#event">Event</a>
            <a href="#rsvp" className="button-nav">
              RSVP Now
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-backdrop" aria-hidden="true" />

          <div className="container hero-content">
            <div className="hero-intro">
              <p className="hero-location">Washington, District of Columbia</p>
              <span className="eyebrow-pill">Capitol Hill Premiere</span>
            </div>

            <img
              className="hero-title-image"
              src={assets.logo}
              alt="UNBROKEN - The Untold Story of Shen Yun"
            />

            <p className="hero-kicker">
              The Untold Story of <span>Shen Yun</span>
            </p>

            <p className="hero-copy">
              What happens when a foreign power reaches into Washington, D.C.,
              and the only defense is a stage? This emotionally powerful film
              follows young artists who set out to preserve their culture, only
              to find themselves at the center of a battle over truth, faith,
              and freedom.
            </p>

            <div className="awards-grid" aria-label="Festival awards">
              {awards.map((award) => (
                <img key={award.title} src={award.image} alt={award.title} />
              ))}
            </div>

            <div className="hero-actions">
              <a href="#rsvp" className="button button-primary hero-button-primary">
                Reserve Your Seat
              </a>
              <a
                href={siteLinks.trailer}
                className="button button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <span className="play-dot" aria-hidden="true">
                  ▶
                </span>
                Watch Trailer
              </a>
            </div>

            <div className="hero-scroll-indicator" aria-hidden="true">
              <span>Scroll</span>
              <span className="scroll-arrow">↓</span>
            </div>
          </div>
        </section>

        <section id="trailer" className="trailer-section">
          <div className="container">
            <a
              className="trailer-card"
              href={siteLinks.trailer}
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.trailerThumb} alt="Unbroken trailer thumbnail" />
              <div className="trailer-card-overlay" aria-hidden="true">
                <span className="play-chip">▶</span>
                <span className="trailer-cta">Play Trailer</span>
                <span className="trailer-duration">2:47</span>
              </div>
            </a>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div
            className="reviews-backdrop"
            style={{ backgroundImage: `url(${dcAttractionImage})` }}
            aria-hidden="true"
          />
          <div className="container">
            <div className="reviews-heading">
              <p className="section-eyebrow purple">Reviews and Reactions</p>
              <h2 className="section-title reviews-title">( What Critics Are Saying )</h2>
            </div>

            <div className="review-grid">
              {reviews.map((review) => (
                <article key={review.source} className="review-card">
                  <span className="quote-mark" aria-hidden="true">
                    "
                  </span>
                  <p>{review.quote}</p>
                  <footer>{review.source}</footer>
                </article>
              ))}
            </div>

            <div className="review-pagination" aria-label="Review pagination">
              <span>Page 1 of 2</span>
              <div className="review-dots" aria-hidden="true">
                <span className="dot active" />
                <span className="dot" />
              </div>
              <div className="review-buttons">
                <button type="button" className="page-button muted" aria-label="Previous page">
                  ←
                </button>
                <button type="button" className="page-button" aria-label="Next page">
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="testimonials-header">
              <div>
                <p className="section-eyebrow gold">Video Testimonials</p>
                <h2 className="section-title testimonial-title">
                  Hear It From
                  <span>Those Who Saw It</span>
                </h2>
              </div>

              <p className="testimonial-intro">
                Voices from critics, advocates, and scholars who saw the film
                as it entered the Washington conversation on faith, freedom,
                and cultural power.
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonialVideos.map((video) => (
                <a
                  key={video.id}
                  className="testimonial-card"
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                  />
                  <span className="video-play" aria-hidden="true">
                    ▶
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="rsvp" className="rsvp-section">
          <div
            className="rsvp-backdrop"
            style={{ backgroundImage: `url(${dcAttractionImageTwo})` }}
            aria-hidden="true"
          />
          <div className="container rsvp-layout">
            <aside className="rsvp-promo">
              <div className="rsvp-promo-image-stack" aria-hidden="true">
                <div
                  className="rsvp-promo-image rsvp-promo-image-top"
                  style={{ backgroundImage: `url(${redCarpetImageOne})` }}
                />
                <div
                  className="rsvp-promo-image rsvp-promo-image-bottom"
                  style={{ backgroundImage: `url(${redCarpetImageTwo})` }}
                />
              </div>
              <div className="rsvp-promo-overlay" aria-hidden="true" />
              <div className="rsvp-promo-copy">
                <p className="section-eyebrow gold">One Night Only</p>
                <h3>
                  Be There To Witness
                  <br />
                  Brave Artists
                  <br />
                  Defy Tyranny.
                </h3>
              </div>
            </aside>

            <div className="rsvp-form-wrap">
              <p className="section-eyebrow purple">Reserve Your Seat</p>
              <h2 className="section-title rsvp-title">
                RSVP for the
                <br />
                Premiere
              </h2>
              <p className="rsvp-copy">
                Seats are extremely limited. Secure your place at the most
                anticipated documentary premiere of the year.
              </p>

              <form className="rsvp-form" onSubmit={(event) => event.preventDefault()}>
                <div className="form-grid">
                  <label>
                    <span>First Name *</span>
                    <input type="text" placeholder="Jane" />
                  </label>
                  <label>
                    <span>Last Name *</span>
                    <input type="text" placeholder="Doe" />
                  </label>
                </div>

                <label>
                  <span>Email Address *</span>
                  <input type="email" placeholder="jane@example.com" />
                </label>

                <label>
                  <span>Number of Guests</span>
                  <select defaultValue="1">
                    <option value="1">1 Guest (Just me)</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </label>

                <label>
                  <span>
                    Message <em>(optional)</em>
                  </span>
                  <textarea
                    maxLength={500}
                    placeholder="Any accessibility needs or special requests..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </label>

                <p className="character-count">{message.length}/500</p>

                <button type="submit" className="button button-primary form-submit">
                  Confirm My RSVP
                  <span aria-hidden="true">→</span>
                </button>

                <p className="privacy-note">
                  Your information is kept private and will only be used for
                  event coordination.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section id="event" className="event-section">
          <div
            className="event-backdrop"
            style={{ backgroundImage: `url(${dcAttractionImageThree})` }}
            aria-hidden="true"
          />
          <div className="container">
            <div className="event-intro">
              <div>
                <p className="section-eyebrow purple">Event Details</p>
                <h2 className="section-title">
                  The Night of
                  <br />
                  the Premiere
                </h2>
              </div>

              <p>
                Join us for an exclusive one-night-only screening of the
                documentary that has already moved audiences to tears and
                sparked conversations around the world. This is your chance to
                be among the first.
              </p>
            </div>

            <div className="event-card-grid">
              {eventCards.map((card) => (
                <article key={card.label} className="event-card">
                  <span className="event-card-icon" aria-hidden="true">
                    <Icon name={card.icon} />
                  </span>
                  <p className="event-label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p className="event-detail">{card.detail}</p>
                </article>
              ))}
            </div>

            <div className="event-bottom-grid">
              <div className="map-frame-wrap">
                <a
                  className="map-link"
                  href={siteLinks.map}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps ↗
                </a>
                <iframe
                  title="Rayburn House Office Building map"
                  src="https://www.google.com/maps?q=Rayburn%20House%20Office%20Building%2045%20Independence%20Ave%20SW%20Washington%20DC%2020515&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="notes-stack">
                <article className="note-card note-card-dark">
                  <span className="event-card-icon" aria-hidden="true">
                    <Icon name="sparkles" />
                  </span>
                  <p className="event-label">Dress Code</p>
                  <h3>Formal Attire</h3>
                  <p>
                    We encourage guests to dress thoughtfully for this special
                    evening.
                  </p>
                </article>

                <article className="note-card">
                  <span className="event-card-icon" aria-hidden="true">
                    <Icon name="info" />
                  </span>
                  <p className="event-label">Please Note</p>
                  <p>
                    Photography is permitted before the screening. Recording
                    during the film is strictly prohibited. Arrive by 6:45 PM
                    to ensure entry.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={assets.logo} alt="Unbroken" />
            <p>The untold story of Shen Yun. One night. One theatre. One truth.</p>
          </div>

          <div>
            <p className="footer-heading">Navigate</p>
            <ul>
              <li>
                <a href="#trailer">Watch Trailer</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#testimonials">Video Testimonials</a>
              </li>
              <li>
                <a href="#event">Event Details</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Event</p>
            <ul>
              <li>June 17, 2026</li>
              <li>6PM Red Carpet · 7PM Screening</li>
              <li>Rayburn House Office Building, Washington, D.C.</li>
              <li>
                <a href="#rsvp">RSVP Now →</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">
          © 2026 Unbroken Documentary Premiere. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
