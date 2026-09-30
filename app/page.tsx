const telegram = "https://t.me/renat_tour_manager";

const directions = [
  {
    number: "01",
    eyebrow: "MULTI-DAY / SMALL GROUP",
    title: "Три дня, чтобы перезагрузиться",
    description: "Рица, Восточная Абхазия, Новый Афон и Гагра — готовое путешествие с проживанием, дорогой и сопровождением.",
    facts: ["3 дня / 2 ночи", "до 7 человек", "33 000 ₽ / чел."],
    href: "https://www.renat-tour.ru/tour3days",
    image: "https://thb.tildacdn.com/tild6134-3138-4436-a563-643764383962/-/empty/IMG_0708.PNG",
    tone: "lime",
  },
  {
    number: "02",
    eyebrow: "FULL IMMERSION / 5 DAYS",
    title: "Пять дней настоящей Абхазии",
    description: "Горы, джиппинг, море, каньоны, Новый Афон и вечера своей компанией. Большая программа без забот о логистике.",
    facts: ["5 дней / 4 ночи", "7–14 человек", "53 000 ₽ / чел."],
    href: "https://www.renat-tour.ru/5dayapsny",
    image: "https://rutasochi.ru/upload/iblock/c19/hezue9tkcp3qx0o3qqeit40ag3mx6f4y.jpg",
    tone: "orange",
  },
];

const privateTours = [
  {
    name: "Озеро Рица",
    subtitle: "Каньоны, лес и главное озеро страны",
    price: "10 000 ₽",
    meta: "за автомобиль · до 6–7 гостей",
    href: "https://www.renat-tour.ru/ozerorica",
    image: "https://thb.tildacdn.com/tild3435-3965-4239-a534-373835646365/-/empty/ChatGPT_Image_31__20.png",
  },
  {
    name: "Гагра",
    subtitle: "Море, архитектура и лучшие панорамы",
    price: "10 000 ₽",
    meta: "5–7 часов · до 6 гостей",
    href: "https://www.renat-tour.ru/gagra",
    image: "https://thb.tildacdn.com/tild6335-3464-4635-a538-316362656264/-/empty/IMG_0052.PNG",
  },
  {
    name: "Новый Афон",
    subtitle: "Пещера, монастырь, водопад и Псырцха",
    price: "12 000 ₽",
    meta: "5–7 часов · до 6 гостей",
    href: "https://www.renat-tour.ru/novyj-afon",
    image: "https://cdnn1.img.sputnik-abkhazia.info/img/07ea/01/13/1060474250_0%3A100%3A1920%3A1180_1920x0_80_0_0_e726fdc3afec1a93ff4148379be19ccc.jpg",
  },
  {
    name: "Восточная Абхазия",
    subtitle: "Джиппинг, Акармара, водопады и термы",
    price: "24 000 ₽",
    meta: "за автомобиль · до 6 гостей",
    href: "https://www.renat-tour.ru/vodopady",
    image: "https://orange-kids.ru/images/photos/travels/abkhazia-trip/day-5/20211013-KMM_9379_02.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Renat Tour — на главную">
          <span>RENAT TOUR</span><b>ABKH //</b>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#formats">Форматы</a>
          <a href="#private">Индивидуально</a>
          <a href="#day">Одним днём</a>
          <a className="nav-drive" href="https://drive.renat-tour.ru/">DRIVE ↗</a>
        </nav>
        <a className="contact-link" href={telegram}>Связаться ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span>43°N</span> ABKHAZIA / GO YOUR WAY</p>
          <h1>Абхазия.<br/><em>Выбирай свой</em><br/>маршрут.</h1>
          <p className="hero-lead">Камерные туры, дикие дороги и свобода без туристической суеты. От одного дня до полноценного путешествия.</p>
          <div className="hero-actions">
            <a className="button primary" href="#formats">Выбрать формат <span>↓</span></a>
            <a className="button ghost" href={telegram}>Подобрать тур ↗</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="coordinates">43.4181° N<br/>40.8145° E</div>
          <img src="https://rutasochi.ru/upload/iblock/c19/hezue9tkcp3qx0o3qqeit40ag3mx6f4y.jpg" alt="Озеро Рица среди гор Абхазии" />
          <div className="hero-card">
            <span>CHOOSE YOUR MODE</span>
            <strong>01—04</strong>
            <small>ТУРЫ · ЭКСКУРСИИ · DRIVE</small>
          </div>
        </div>
        <div className="hero-stats" aria-label="Преимущества">
          <div><strong>01—05</strong><span>дней<br/>путешествия</span></div>
          <div><strong>06—14</strong><span>гостей<br/>в группе</span></div>
          <div><strong>LOCAL</strong><span>маршруты<br/>изнутри</span></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><span>ГОРЫ · МОРЕ · ДОРОГА · СВОБОДА · АБХАЗИЯ · ГОРЫ · МОРЕ · ДОРОГА · СВОБОДА · АБХАЗИЯ ·</span></div>

      <section className="section formats" id="formats">
        <div className="section-head">
          <div><p className="kicker"><span>01</span> STAY A LITTLE LONGER</p><h2>Туры<br/><em>с проживанием</em></h2></div>
          <p>Всё продумано заранее: встреча, дорога, комфортное проживание, главные локации и человек, который всегда рядом.</p>
        </div>
        <div className="feature-grid">
          {directions.map((tour) => (
            <a className={`feature-card ${tour.tone}`} href={tour.href} key={tour.number}>
              <img src={tour.image} alt="" />
              <div className="card-shade" />
              <span className="card-number">{tour.number}</span>
              <div className="feature-body">
                <p>{tour.eyebrow}</p>
                <h3>{tour.title}</h3>
                <div className="facts">{tour.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
                <p className="description">{tour.description}</p>
                <span className="card-link">Смотреть программу <b>↗</b></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section private" id="private">
        <div className="section-head light">
          <div><p className="kicker"><span>02</span> ONLY YOUR PEOPLE</p><h2>Один день.<br/><em>Только ваша компания.</em></h2></div>
          <p>Комфортный автомобиль, свободный темп и маршрут, который можно подстроить под вас. Цена — за всю машину.</p>
        </div>
        <div className="private-grid">
          {privateTours.map((tour, index) => (
            <a className="private-card" href={tour.href} key={tour.name}>
              <div className="private-image"><img src={tour.image} alt={tour.name} /><span>0{index + 1}</span></div>
              <div className="private-body">
                <p>{tour.subtitle}</p><h3>{tour.name}</h3>
                <div><strong>{tour.price}</strong><span>{tour.meta}</span></div>
                <b className="round-arrow">↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="day-trip" id="day">
        <div className="day-photo" />
        <div className="day-content">
          <p className="kicker"><span>03</span> ONE DAY / TEN ROUTES</p>
          <h2>Завтра может стать<br/><em>лучшим днём отпуска.</em></h2>
          <p>Десять групповых маршрутов — от лёгких прогулок до высокогорья. Небольшие компании, живые гиды и никаких больших автобусов.</p>
          <div className="route-tags"><span>РИЦА</span><span>ГЕГСКИЙ</span><span>МАМЗЫШХА</span><span>ХАШУПСЕ</span><span>АКАРМАРА</span><span>ОЗЕРО МЗЫ</span></div>
          <div className="price-line"><strong>от 2 800 ₽</strong><span>за гостя · 5–14 часов</span></div>
          <a className="button primary" href="https://www.renat-tour.ru/one-day-tours-adaptive">Все 10 маршрутов <span>↗</span></a>
        </div>
      </section>

      <section className="drive-banner">
        <div className="drive-top"><span>04 / DRIVE MODE</span><span>OPEN TOP · OPEN ROAD</span></div>
        <div className="drive-copy">
          <h2>Абхазия<br/><em>без крыши.</em></h2>
          <p>Кабриолет, море и дорога, которую хочется запомнить. Пять автомобилей, понятный расчёт и отдельный сервис RENAT TOUR DRIVE.</p>
          <a className="button drive-button" href="https://drive.renat-tour.ru/">Выбрать кабриолет <span>↗</span></a>
        </div>
        <img src="https://drive.renat-tour.ru/assets/cars/IMG_2705.webp" alt="Жёлтый Chevrolet Camaro" />
        <div className="drive-word" aria-hidden="true">DRIVE</div>
      </section>

      <section className="manifesto">
        <p className="kicker"><span>05</span> WHY RENAT TOUR</p>
        <h2>Не показать Абхазию.<br/><em>Дать её прожить.</em></h2>
        <div className="manifesto-grid">
          <article><span>01</span><h3>Камерно</h3><p>Небольшие группы, где не теряешься среди десятков людей.</p></article>
          <article><span>02</span><h3>По-настоящему</h3><p>Показываем места, которые знаем сами, и рассказываем живые истории.</p></article>
          <article><span>03</span><h3>Без суеты</h3><p>Берём на себя дорогу и организацию, оставляя вам свободу впечатлений.</p></article>
        </div>
      </section>

      <section className="final-cta">
        <p>НЕ ЗНАЕТЕ, ЧТО ВЫБРАТЬ?</p>
        <h2>Расскажите, когда приезжаете.<br/><em>Маршрут подберём мы.</em></h2>
        <a className="button primary" href={telegram}>Написать Ренату <span>↗</span></a>
      </section>

      <footer>
        <a className="brand" href="#top"><span>RENAT TOUR</span><b>ABKH //</b></a>
        <p>Авторские путешествия по Абхазии</p>
        <div><a href={telegram}>Telegram ↗</a><a href="tel:+79882518877">+7 988 251-88-77</a></div>
        <small>© 2026 RENAT TOUR ABKH.</small>
      </footer>
    </main>
  );
}
