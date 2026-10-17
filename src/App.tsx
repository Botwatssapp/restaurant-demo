
import { useState } from "react";
import "./App.css";

type Language = "ar" | "fr";

function App() {
  const [language, setLanguage] = useState<Language>("ar");
  const isArabic = language === "ar";

  const content = {
    ar: {
      home: "الرئيسية",
      menu: "قائمة الطعام",
      about: "عن المطعم",
      contact: "اتصل بنا",
      reservation: "احجز طاولتك",
      eyebrow: "أصالة المطبخ المغربي",
      title1: "مذاق يحكي",
      title2: "حكاية المغرب",
      description:
        "اكتشف نكهات مغربية أصيلة، محضّرة بحب ومكونات طازجة، في أجواء تجمع بين الأصالة والضيافة.",
      discover: "اكتشف قائمتنا",
      ourStory: "اكتشف قصتنا",
      heroNote: "نكهة أصيلة، وتجربة لا تُنسى",
      menuEyebrow: "من مطبخنا إلى مائدتكم",
      menuTitle: "أطباق تستحق التجربة",
      dish1: "طاجين اللحم بالبرقوق",
      dish1Desc: "لحم طري، برقوق معسل، ولوز محمص.",
      dish2: "كسكس بالخضر",
      dish2Desc: "كسكس مغربي تقليدي بخضر موسمية.",
      dish3: "أتاي بالنعناع",
      dish3Desc: "شاي مغربي منعش، يقدم على الطريقة الأصيلة.",
      price: "ابتداءً من",
      currency: "درهم",
      order: "اطلب عبر واتساب",
      galleryEyebrow: "اكتشف أجواءنا",
      galleryTitle: "من قلب المطبخ المغربي",
      contactTitle: "مرحبا بكم عندنا",
      contactDesc: "تواصلوا معنا لاكتشاف الأطباق أو طلب حجز.",
      contactButton: "تواصل عبر WhatsApp",
      location: "موقع المطعم",
      address: "أضف عنوان المطعم هنا",
      hours: "أوقات العمل",
      schedule: "يومياً — أضف أوقات العمل",
      footerDesc: "نكهات مغربية أصيلة، بلمسة من الحب.",
      disclaimer:
        "نموذج تجريبي. يجب تأكيد الأثمنة والعنوان ومعلومات المطعم قبل النشر النهائي.",
    },
    fr: {
      home: "Accueil",
      menu: "Notre menu",
      about: "À propos",
      contact: "Contact",
      reservation: "Réserver une table",
      eyebrow: "L’authenticité de la cuisine marocaine",
      title1: "Une saveur qui raconte",
      title2: "l’histoire du Maroc",
      description:
        "Découvrez des saveurs marocaines authentiques, préparées avec amour et des ingrédients frais, dans une ambiance chaleureuse.",
      discover: "Découvrir le menu",
      ourStory: "Notre histoire",
      heroNote: "Une saveur authentique, une expérience inoubliable",
      menuEyebrow: "De notre cuisine à votre table",
      menuTitle: "Des plats à découvrir",
      dish1: "Tajine de viande aux pruneaux",
      dish1Desc: "Viande tendre, pruneaux confits et amandes grillées.",
      dish2: "Couscous aux légumes",
      dish2Desc: "Couscous marocain traditionnel aux légumes de saison.",
      dish3: "Thé à la menthe",
      dish3Desc: "Thé marocain rafraîchissant, préparé à la traditionnelle.",
      price: "À partir de",
      currency: "DH",
      order: "Commander sur WhatsApp",
      galleryEyebrow: "Découvrez notre univers",
      galleryTitle: "Au cœur de la cuisine marocaine",
      contactTitle: "Bienvenue chez nous",
      contactDesc:
        "Contactez-nous pour découvrir nos plats ou réserver une table.",
      contactButton: "Contacter sur WhatsApp",
      location: "Emplacement",
      address: "Ajoutez ici l’adresse du restaurant",
      hours: "Horaires",
      schedule: "Tous les jours — ajoutez les horaires",
      footerDesc:
        "Des saveurs marocaines authentiques, préparées avec amour.",
      disclaimer:
        "Démo : confirmez les prix, l’adresse et les informations avant publication.",
    },
  };

  const t = content[language];

  const dishes = [
    {
      id: 1,
      name: t.dish1,
      description: t.dish1Desc,
      price: 85,
      image: "/images/tagine.jpg",
      alt: isArabic ? "طاجين مغربي باللحم والبرقوق" : "Tajine marocain",
    },
    {
      id: 2,
      name: t.dish2,
      description: t.dish2Desc,
      price: 65,
      image: "/images/couscous.jpg",
      alt: isArabic ? "كسكس مغربي بالخضر" : "Couscous marocain",
    },
    {
      id: 3,
      name: t.dish3,
      description: t.dish3Desc,
      price: 15,
      image: "/images/mint-tea.jpg",
      alt: isArabic ? "شاي مغربي بالنعناع" : "Thé marocain à la menthe",
    },
  ];

  const whatsappNumber = "212624315177";

  function getWhatsAppUrl(message: string) {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  const whatsappMessage = isArabic
    ? "السلام عليكم، أريد الاستفسار عن قائمة الطعام والحجز."
    : "Bonjour, je souhaite connaître votre menu et réserver une table.";

  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <main
      className="restaurant"
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
    >
      <nav className="navbar">
        <a className="logo" href="#home">
          دار النكهة<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">{t.home}</a>
          <a href="#menu">{t.menu}</a>
          <a href="#about">{t.about}</a>
          <a href="#contact">{t.contact}</a>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage(isArabic ? "fr" : "ar")}
            aria-label={
              isArabic ? "Passer au français" : "التبديل إلى العربية"
            }
          >
            {isArabic ? "FR" : "عربي"}
          </button>

          <a className="nav-button" href="#contact">
            {t.reservation}
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>

          <h1>
            {t.title1}
            <br />
            <span>{t.title2}</span>
          </h1>

          <p className="description">{t.description}</p>

          <div className="hero-actions">
            <a className="primary-button" href="#menu">
              {t.discover} ↙
            </a>

            <a className="secondary-button" href="#about">
              {t.ourStory}
            </a>
          </div>

          <div className="hero-note">
            <span>✦</span> {t.heroNote}
          </div>
        </div>

        <div className="hero-decoration">
          <img
            className="hero-image"
            src="/images/moroccan-food.jpg"
            alt={isArabic ? "طبق مغربي تقليدي" : "Plat marocain traditionnel"}
          />
        </div>
      </section>

      <section className="menu-section" id="menu">
        <p className="eyebrow">{t.menuEyebrow}</p>
        <h2>{t.menuTitle}</h2>

        <div className="menu-grid">
          {dishes.map((dish) => (
            <article className="menu-card" key={dish.id}>
              <img
                className="dish-image"
                src={dish.image}
                alt={dish.alt}
                loading="lazy"
              />

              <div className="dish-content">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>

                <strong className="dish-price">
                  {t.price} {dish.price} {t.currency}
                </strong>

                <a
                  className="dish-order"
                  href={getWhatsAppUrl(
                    isArabic
                      ? `السلام عليكم، أريد الاستفسار عن: ${dish.name}`
                      : `Bonjour, je souhaite commander : ${dish.name}`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.order}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="about">
        <p className="eyebrow">{t.galleryEyebrow}</p>
        <h2>{t.galleryTitle}</h2>

        <div className="gallery-grid">
          <img
            src="/images/moroccan-food.jpg"
            alt={isArabic ? "أطباق مغربية تقليدية" : "Cuisine marocaine"}
            loading="lazy"
          />
          <img
            src="/images/tagine.jpg"
            alt={isArabic ? "طاجين مغربي" : "Tajine marocain"}
            loading="lazy"
          />
          <img
            src="/images/couscous.jpg"
            alt={isArabic ? "كسكس مغربي" : "Couscous marocain"}
            loading="lazy"
          />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">{t.contact}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactDesc}</p>

        <a
          className="primary-button"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.contactButton}
        </a>

        <div className="contact-details">
          <div>
            <h3>{t.location}</h3>
            <p>{t.address}</p>
          </div>

          <div>
            <h3>{t.hours}</h3>
            <p>{t.schedule}</p>
          </div>
        </div>

        <p className="disclaimer">{t.disclaimer}</p>
      </section>

      <footer>
        <a className="logo" href="#home">
          دار النكهة<span>.</span>
        </a>

        <p>{t.footerDesc}</p>
        <p>© 2026 دار النكهة</p>
      </footer>
    </main>
  );
}

export default App;
