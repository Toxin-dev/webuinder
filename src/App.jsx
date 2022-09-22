import "./App.css";

function App() {
  const data_projects = ["building", "pool", "tower", "house", "construction"];
  const data_news = [
    {
      id: 1,
      image: "worker",
      heading: "The road to success is always under construction",
      author: "admin",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      created_at: new Date().toDateString(),
    },
    {
      id: 2,
      image: "construction",
      heading: "The road to success is always under construction",
      author: "admin",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      created_at: new Date().toDateString(),
    },
    {
      id: 3,
      image: "building",
      heading: "The road to success is always under construction",
      author: "admin",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      created_at: new Date().toDateString(),
    },
  ];
  const data_bred_crums = [
    "all",
    "buildings",
    "interior",
    "Design",
    "isolation",
    "plumbing",
    "tiling",
  ];
  const data_about = [
    {
      id: 1,
      heading: "pre-construction",
      caption:
        "sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto",
    },
    {
      id: 2,
      heading: "remodel & reimage",
      caption:
        "sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto",
    },
    {
      id: 3,
      heading: "location",
      caption:
        "sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto",
    },
    {
      id: 4,
      heading: "civil & architecture",
      caption:
        "sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto",
    },
    {
      id: 5,
      heading: "enginerring",
      caption:
        "sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto",
    },
  ];
  return (
    <div className='App'>
      <main>
        <header>
          <span className='logo--primery'>webuilder</span>
        </header>
        <section className='hero'>
          <figure className='hero-banner'>
            <img
              src='https://source.unsplash.com/random/?hat'
              alt='webuilder'
            />
            <figcaption className='hero-banner_caption'>
              <h2 className='hero-banner-sub_heading'>
                Looking for a quiality and affordable constructor for your next
                project?
              </h2>
              <button className='btn btn--border btn--large'>
                Get a quote
              </button>
            </figcaption>
          </figure>
        </section>
        <section id='who_we_are'>
          <header className='section-header'>
            <h2 className='section-heading'>
              who <br /> we are?
            </h2>
            <p className='section-sub_heading'>all about us</p>
          </header>
          <div className='section-body'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, veritatis distinctio consectetur ipsam incidunt dolor
              repudiandae blanditiis itaque deleniti architecto, dolore
              reiciendis necessitatibus. Laborum, ipsam sunt delectus est
              asperiores in?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              harum accusamus autem dolor iusto a repudiandae possimus ratione
              nemo praesentium et labore cum, veniam ipsum quidem obcaecati
              porro fugit enim?
            </p>
          </div>
          <figure>
            <img
              src='https://source.unsplash.com/random?workers'
              alt='team members'
            />
          </figure>
        </section>
        <section id='section-about_card'>
          {data_about.map(data => (
            <div className='about-card'>
              <h3 className='about-card_heading'>{data.heading}</h3>
              <p className='about-card_caption'>{data.caption}</p>
            </div>
          ))}
        </section>
        <section id='section-service'>
          <header className='section-header'>
            <h2 className='section-heading'>
              our <br />
              service
            </h2>
            <p className='section-sub_heading'>
              the best construction <br />
              company
            </p>
          </header>
          <article className='section-body'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
              similique fugiat perferendis laudantium eligendi, ducimus officiis
              consectetur minus accusamus aut, molestias eius praesentium
              explicabo aperiam id. Dolorem, doloremque impedit?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              aut doloremque corrupti quia aliquid illum harum ex repellat
              voluptate nesciunt, reprehenderit molestias facilis, consectetur
              atque blanditiis nihil non veniam quae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              itaque voluptatem sed ex suscipit nulla quod, hic{" "}
            </p>
          </article>
        </section>
        <section id='section-projects'>
          <header className='section-header'>
            <h2 className='section-heading'>
              our <br /> projects
            </h2>
            <p className='section-sub_heading'>great &amp; awesome works</p>
          </header>
          <div className='section-body'>
            <nav className='nav-bred_crums'>
              {[...data_bred_crums].map(navItems => (
                <span className='bred_crums'>
                  <a>{navItems}</a>
                </span>
              ))}
            </nav>
            <div className='project-imgs'>
              {data_projects.map((project, index) => (
                <img
                  key={index}
                  className='project-img'
                  src={`https://source.unsplash.com/random?${project}`}
                />
              ))}
            </div>
          </div>
        </section>
        <section id='section-client_testimonal'>
          <header className='section-header'>
            <h2 className='section-heading'>
              client
              <br /> says
            </h2>
            <p className='section-sub_heading'>golden word</p>
          </header>
          <div className='section-body' style={{ margin: "6rem 0" }}>
            <article className='testmonial'>
              <div>
                <i class='fa fa-quote-right'></i>
                <p className='testmonial-client_say'>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment.
                </p>
                <p>Eng. Abul Kalam</p>
              </div>
              <img src='http://source.unsplash.com/random?person' alt='' />
            </article>
          </div>
        </section>
        <section id='section-news'>
          <header className='section-header'>
            <h2 className='section-heading'>
              latest <br /> news
            </h2>
            <p className='section-sub_heading'>construction world</p>
          </header>
          <div className='section-body'>
            {data_news.map(news => (
              <article key={news.id} className='news-post'>
                <figure className='news-post_image'>
                  <div className='news-post_date'>
                    <span>{news.created_at.split(" ")[2]}</span>
                    <br />
                    <span>{news.created_at.split(" ")[1]}</span>
                  </div>
                  <img
                    src={`https://source.unsplash.com/random?${news.image}`}
                    alt='news'
                  />
                </figure>
                <div className='news-post_body'>
                  <h2 className='news-post_heading'>{news.heading}</h2>
                  <caption className='news-post_caption'>
                    posted by {news.author}
                  </caption>
                  <p className='news-post_description'>{news.description}</p>
                  <footer className='news-footer'>
                    <sapn>comments</sapn>
                    <nav>
                      <a>
                        <strong>Read More</strong>
                      </a>
                    </nav>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>
        <footer id='footer'>
          <div className='footer-header'>
            <figure className='logo--primery footer-logo'>webuilder</figure>
            <p className='footer-logo_caption'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              exercitationem libero, magni corporis ducimus itaque ab vero dicta
              veritatis molestias.
            </p>
            <div>
              {/* social icons */}
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <h3 className='footer-heading_secondary'>recent posts</h3>
          <div className='footer-post'>
            {data_news.map(news => (
              <div key={news.id} className='footer-post_recent'>
                <img
                  src={`https://source.unsplash.com/random?${news.image}`}
                  alt='post'
                />
                <p className='footer-post_heading'>{news.heading}</p>
              </div>
            ))}
          </div>
        </footer>
        <div id='copyright'>
          <p>
            Copyright {new Date().getFullYear()} All rights reserved. This
            template is taken from{" "}
            <a href='https://preview.colorlib.com/#webuilder'>Colorlib</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
