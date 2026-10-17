
import './App.css'

function App() {
  return (
    <main className="restaurant">
      <nav className="navbar">
        <a className="logo" href="#">
          دار النكهة<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">الرئيسية</a>
          <a href="#menu">قائمة الطعام</a>
          <a href="#about">عن المطعم</a>
        </div>

        <a className="nav-button" href="#contact">
          احجز طاولتك
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">أصالة المطبخ المغربي</p>

          <h1>
            مذاق يحكي
            <br />
            <span>حكاية المغرب</span>
          </h1>

          <p className="description">
            اكتشف نكهات مغربية أصيلة، محضّرة بحب
            ومكونات طازجة، في أجواء تجمع بين
            الأصالة والضيافة.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#menu">
              اكتشف قائمتنا ↙
            </a>
            <a className="secondary-button" href="#about">
              اكتشف قصتنا
            </a>
          </div>

          <div className="hero-note">
            <span>✦</span> نكهة أصيلة، وتجربة لا تُنسى
          </div>
        </div>

        <div className="hero-decoration">
          <img
            className="hero-image"
            src="/images/moroccan-food.jpg"
            alt="طبق مغربي تقليدي"
          />
      </div>
      </section>

      <section className="menu-section" id="menu">
        <p className="eyebrow">من مطبخنا إلى مائدتكم</p>
        <h2>أطباق تستحق التجربة</h2>

        
      <div className="menu-grid">
        <article className="menu-card">
          <img
            className="dish-image"
            src="/images/tagine.jpg"
            alt="طاجين مغربي باللحم والبرقوق"
          />
          <h3>طاجين اللحم بالبرقوق</h3>
          <p>لحم طري، برقوق معسل، ولوز محمص.</p>
          <strong>ابتداءً من 85 درهم</strong>
        </article>

        <article className="menu-card">
          <img
            className="dish-image"
            src="/images/couscous.jpg"
            alt="كسكس مغربي بالخضر"
          />
          <h3>كسكس بالخضر</h3>
          <p>كسكس مغربي تقليدي بخضر موسمية.</p>
          <strong>ابتداءً من 65 درهم</strong>
        </article>

        <article className="menu-card">
          <img
            className="dish-image"
            src="/images/mint-tea.jpg"
            alt="أتاي مغربي بالنعناع"
          />
          <h3>أتاي بالنعناع</h3>
          <p>شاي مغربي منعش، يقدم على الطريقة الأصيلة.</p>
          <strong>ابتداءً من 15 درهم</strong>
        </article>
      </div>

      </section>

      <section className="contact-section" id="contact">
        <h2>مرحبا بكم عندنا</h2>
        <p>تواصلوا معنا لاكتشاف الأطباق أو طلب حجز.</p>
        <a
          className="primary-button"
          href="https://wa.me/212624315177"
          target="_blank"
          rel="noreferrer"
        >
          تواصل عبر WhatsApp
        </a>
        <small>ملاحظة: هذا نموذج تجريبي، ورقم الهاتف والأسعار افتراضية.</small>
      </section>

      <footer id="about">
        <a className="logo" href="#home">دار النكهة<span>.</span></a>
        <p>نكهات مغربية أصيلة، بلمسة من الحب.</p>
        <p>© 2026 دار النكهة — نموذج تجريبي</p>
      </footer>
    </main>
  )
}

export default App
