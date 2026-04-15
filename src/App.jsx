import { motion, useMotionValue, useTransform, useInView, useScroll, useSpring, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/* -----------------------------------------------------------------------
   CRUNCH BOX — restaurant landing page
   3D boxy neobrutalist design • Framer Motion everywhere
   --------------------------------------------------------------------- */

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <Stats />
        <Reviews />
        <Reserve />
      </main>
      <Footer />
    </>
  )
}

/* === NAV =============================================================== */
function Nav() {
  const links = ['Menu', 'Story', 'Reviews', 'Hours']
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <motion.header
        className="nav"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container nav__inner">
          <a href="#top" className="logo" aria-label="Crunch Box — home">
            <motion.span
              className="logo__mark"
              whileHover={{ rotate: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              CB
            </motion.span>
            <span>Crunch&nbsp;Box</span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav__links">
              {links.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}>{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <motion.a
            href="#reserve"
            className="btn btn--primary nav__cta"
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ x: 4, y: 4, boxShadow: '0 0 0 0 #0a0a0a' }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Book a Table
          </motion.a>

          <button
            className="hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <line x1="2" y1="2" x2="16" y2="16" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="square" />
                <line x1="16" y1="2" x2="2" y2="16" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="square" />
              </svg>
            ) : (
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                <rect y="0" width="20" height="3" fill="#0a0a0a" />
                <rect y="6" width="20" height="3" fill="#0a0a0a" />
                <rect y="12" width="20" height="2" fill="#0a0a0a" />
              </svg>
            )}
          </button>
        </div>
      </motion.header>

      <motion.div
        className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`}
        initial={false}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <div className="mobile-nav__inner">
          <button className="mobile-nav__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="20" y2="20" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="square" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="square" />
            </svg>
          </button>
          <ul className="mobile-nav__links">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reserve"
            className="btn btn--primary"
            onClick={() => setMenuOpen(false)}
          >
            Book a Table
          </a>
        </div>
      </motion.div>
    </>
  )
}

/* === HERO ============================================================== */
function Hero() {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span className="hero__eyebrow" variants={item}>
              <span className="dot" aria-hidden="true" />
              Open daily · 11am → late
            </motion.span>

            <motion.h1 className="hero__title display" variants={item}>
              Boxed-up
              <br />
              flavor,
              <br />
              delivered
              <span className="word word--box">BOLD.</span>
            </motion.h1>

            <motion.p className="hero__sub" variants={item}>
              Stacked burgers, crate-fresh sides, and late-night crunchables — served
              in chunky boxes, made for sharing. No frills, just heat, sauce, and
              seriously good bites.
            </motion.p>

            <motion.div className="hero__actions" variants={item}>
              <motion.a
                href="#menu"
                className="btn btn--primary"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 4, y: 4, boxShadow: '0 0 0 0 #0a0a0a' }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                See the Menu
                <Arrow />
              </motion.a>
              <motion.a
                href="#reserve"
                className="btn btn--ghost"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 4, y: 4, boxShadow: '0 0 0 0 #0a0a0a' }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                Reserve a Box
              </motion.a>
            </motion.div>

            <motion.div className="hero__meta" variants={item}>
              <MetaItem num="4.9★" lbl="Google Rating" />
              <div className="hero__meta-divider" aria-hidden="true" />
              <MetaItem num="12k+" lbl="Boxes Served" />
              <div className="hero__meta-divider" aria-hidden="true" />
              <MetaItem num="#1" lbl="Best Newcomer '25" />
            </motion.div>
          </motion.div>

          <HeroStack />
        </div>
      </div>
    </section>
  )
}

function MetaItem({ num, lbl }) {
  return (
    <div className="hero__meta-item">
      <div className="hero__meta-num">{num}</div>
      <div className="hero__meta-lbl">{lbl}</div>
    </div>
  )
}

function Arrow() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path
        d="M1 7h15M10 1l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="square"
      />
    </svg>
  )
}

/* 3D floating stack in the hero ----------------------------------------- */
function HeroStack() {
  // gentle parallax driven by mouse
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useTransform(my, [-60, 60], [6, -6])
  const ry = useTransform(mx, [-60, 60], [-6, 6])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - (r.left + r.width / 2))
    my.set(e.clientY - (r.top + r.height / 2))
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      className="stack"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      aria-hidden="true"
    >
      <Floater className="stack__box stack__box--1" delay={0.0} y={10}>
        <div>
          <div className="stack__label">Crispy</div>
          <div className="stack__price">$9</div>
          <div className="stack__tag">POPULAR</div>
        </div>
      </Floater>
      <Floater className="stack__box stack__box--2" delay={0.3} y={-14}>
        <div>
          <div className="stack__label">Smash Box</div>
          <div className="stack__price">$14</div>
          <div className="stack__tag" style={{ background: '#FACC15', color: '#0a0a0a' }}>
            CHEF&apos;S PICK
          </div>
        </div>
      </Floater>
      <Floater className="stack__box stack__box--3" delay={0.6} y={12}>
        <div>
          <div className="stack__label">Green Crunch</div>
          <div className="stack__price">$7</div>
          <div className="stack__tag">VEG</div>
        </div>
      </Floater>
      <Floater className="stack__box stack__box--4" delay={0.9} y={-10}>
        <div>
          <div className="stack__label">Fizz</div>
          <div className="stack__price">$4</div>
        </div>
      </Floater>
    </motion.div>
  )
}

function Floater({ children, className, delay = 0, y = 10 }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

/* === MARQUEE =========================================================== */
function Marquee() {
  const items = [
    'Hand-Smashed Patties',
    'Scratch-Made Sauces',
    'Locally Sourced',
    '24h Hot Kitchen',
    'Dine-In · Takeout · Delivery',
  ]

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i}>
            <span className="marquee__star">✦</span>
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* === MENU ============================================================== */
const MENU = [
  {
    title: 'Classic Smash',
    desc: 'Double beef patty, American cheese, house pickles, special sauce, toasted bun.',
    price: '$14',
    variant: 'yellow',
    glyph: 'S',
    badge: 'Hot',
  },
  {
    title: 'Crunch King',
    desc: 'Buttermilk-fried chicken, slaw, hot honey, dill pickles, brioche.',
    price: '$13',
    variant: 'red',
    glyph: 'C',
    badge: 'Signature',
  },
  {
    title: 'Box of Fries',
    desc: 'Double-fried Kennebec wedges, smoked salt, three dipping sauces.',
    price: '$7',
    variant: 'cream',
    glyph: 'F',
  },
  {
    title: 'Green Crate',
    desc: 'Charred broccoli, chilli crisp, sesame, crispy shallots, lemon.',
    price: '$9',
    variant: 'mint',
    glyph: 'G',
    badge: 'Veg',
  },
  {
    title: 'Melt Stack',
    desc: 'Triple cheese, caramelised onion, mustard butter, sourdough.',
    price: '$11',
    variant: 'blue',
    glyph: 'M',
  },
  {
    title: 'Midnight Box',
    desc: 'Late-night combo: mini smash, fries, fizz, chocolate square.',
    price: '$18',
    variant: 'ink',
    glyph: '★',
    badge: 'After 10pm',
  },
]

function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <h2>
              Served in
              <br />
              a box —
              <br />
              every time.
            </h2>
            <p>
              Six signatures, scratch-made daily. Swap, stack, or combo — our boxes
              play well together.
            </p>
          </div>
        </Reveal>

        <div className="menu-grid">
          {MENU.map((m, i) => (
            <MenuCard key={m.title} item={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item, index }) {
  const ref = useRef(null)

  // 3D tilt on hover
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 260, damping: 22 })
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 260, damping: 22 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100)
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.article
      ref={ref}
      className={`card card--${item.variant}`}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 800 }}
      whileHover={{ y: -4, boxShadow: '12px 12px 0 0 #0a0a0a' }}
    >
      <div className="card__media">
        {item.badge && <span className="card__badge">{item.badge}</span>}
        <motion.span
          className="card__media-emoji"
          style={{ transform: 'translateZ(30px)' }}
          whileHover={{ scale: 1.08, rotate: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 16 }}
        >
          {item.glyph}
        </motion.span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{item.title}</h3>
        <p className="card__desc">{item.desc}</p>
        <div className="card__foot">
          <span className="card__price">{item.price}</span>
          <motion.button
            className="card__add"
            aria-label={`Add ${item.title} to order`}
            whileTap={{ scale: 0.9, rotate: 90 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          >
            +
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

/* === STATS ============================================================= */
function Stats() {
  const stats = [
    { num: 12, suffix: 'k+', lbl: 'Boxes Served' },
    { num: 4.9, lbl: 'Avg. Rating', decimals: 1 },
    { num: 24, suffix: 'h', lbl: 'Hot Kitchen' },
    { num: 6, lbl: 'Signature Boxes' },
  ]

  return (
    <section id="story" className="stats" style={{ padding: 0 }}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((s) => (
            <Stat key={s.lbl} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({ num, suffix = '', lbl, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, num, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, num])

  return (
    <div ref={ref} className="stat">
      <div className="stat__num">
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="stat__lbl">{lbl}</div>
    </div>
  )
}

/* === REVIEWS =========================================================== */
const REVIEWS = [
  {
    body: '"The Smash Box is hands-down the best burger I have eaten in this city. The boxes are chunky, the sauces slap, and the service is quick."',
    name: 'Maya R.',
    title: 'Food Editor · CrumbsMag',
    avatar: 'MR',
  },
  {
    body: '"Late-night Crunch King + Box of Fries = instant therapy. My whole crew is hooked — we are here twice a week now."',
    name: 'Deon K.',
    title: 'Regular since day 1',
    avatar: 'DK',
  },
  {
    body: '"Design is bold, food is bolder. The Green Crate converted a table of beef-lovers. Go with an empty stomach."',
    name: 'Priya S.',
    title: 'Creative Director',
    avatar: 'PS',
  },
]

function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <h2>
              Word on
              <br />
              the street.
            </h2>
            <p>
              Real boxes. Real mouths. Real reviews — from regulars, critics, and the
              people who keep coming back for seconds.
            </p>
          </div>
        </Reveal>

        <div className="reviews">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              className="review"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, rotate: 0 }}
            >
              <div className="review__stars" aria-label="5 stars">
                ★★★★★
              </div>
              <p className="review__body serif">{r.body}</p>
              <div className="review__who">
                <div className="review__avatar">{r.avatar}</div>
                <div>
                  <div className="review__name">{r.name}</div>
                  <div className="review__title">{r.title}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* === RESERVE =========================================================== */
function Reserve() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="reserve" className="reserve">
      <div className="container">
        <div className="reserve__grid">
          <Reveal>
            <div>
              <p className="eyebrow" style={{ color: '#facc15', marginBottom: 14 }}>
                Book · Walk-in · Takeout
              </p>
              <h2>
                Grab a box.
                <br />
                Take a seat.
              </h2>
              <p>
                Big groups, late nights, first dates — we have a box for that. Reserve
                in under a minute and we will hold a table with your name on it.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'grid',
                  gap: 10,
                  fontWeight: 600,
                  fontSize: '0.98rem',
                }}
              >
                <li>· 11am – 11pm (Mon–Thu)</li>
                <li>· 11am – 1am (Fri–Sun)</li>
                <li>· 42 Crate Lane, Downtown</li>
              </ul>
            </div>
          </Reveal>

          <motion.form
            className="reserve__form"
            initial={{ y: 60, opacity: 0, rotate: -1 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <h3 className="display" style={{ fontSize: '1.6rem', marginBottom: 4 }}>
              Book a Table
            </h3>

            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" required placeholder="Sam Johnson" />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" required />
              </div>
              <div className="field">
                <label htmlFor="time">Time</label>
                <select id="time" name="time" required defaultValue="">
                  <option value="" disabled>
                    Pick…
                  </option>
                  <option>12:00</option>
                  <option>13:30</option>
                  <option>18:00</option>
                  <option>19:30</option>
                  <option>21:00</option>
                </select>
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="party">Party</label>
                <select id="party" name="party" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="(+1) 555…" />
              </div>
            </div>

            <motion.button
              type="submit"
              className="btn btn--primary"
              style={{ marginTop: 6 }}
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 4, y: 4, boxShadow: '0 0 0 0 #0a0a0a' }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              {submitted ? 'Table Locked In ✓' : 'Lock In My Box'}
              {!submitted && <Arrow />}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

/* === FOOTER ============================================================ */
function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__grid">
          <div>
            <div className="logo" style={{ color: 'var(--paper)' }}>
              <span className="logo__mark">CB</span>
              <span>Crunch&nbsp;Box</span>
            </div>
            <p style={{ marginTop: 16, maxWidth: 320, lineHeight: 1.6, fontSize: '0.95rem', color: '#d4d4d4' }}>
              Boxed-up flavor, delivered bold. Since 2023 — hand-smashed, scratch-made,
              served chunky.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>42 Crate Lane</li>
              <li>Downtown, 10001</li>
              <li>(212) 555-BOXX</li>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              <li>Mon–Thu · 11–23</li>
              <li>Fri–Sun · 11–01</li>
              <li>Holidays · 13–22</li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#tiktok">TikTok</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="foot__bottom">
          <div>© 2026 Crunch Box. All boxes reserved.</div>
          <div>
            Made hot &amp; crispy with <span style={{ color: 'var(--yellow)' }}>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* === REUSABLE ========================================================== */
function Reveal({ children, y = 40, delay = 0 }) {
  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
