import './App.css';

function App() {
  const data_projects = ['building', 'pool', 'tower', 'house', 'construction'];
  const data_bred_crums = ['all', 'buildings', 'interior', 'Design', 'isolation', 'plumbing', 'tiling']
  const data_about = [
    {
      heading: 'pre-construction',
      caption: 'sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto'
    },
    {
      heading: 'remodel & reimage',
      caption: 'sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto'
    },
    {
      heading: 'location',
      caption: 'sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto'
    },
    {
      heading: 'civil & architecture',
      caption: 'sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto'
    },
    {
      heading: 'enginerring',
      caption: 'sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto'
    }
  ]
  return (
    <div className="App">
      <main>
        <header><span className='logo'>webuilder</span></header>
        <section className="hero">
          <figure className="hero-banner">
            <img src="https://source.unsplash.com/random/?hat" alt="webuilder" />
            <figcaption className='hero-banner_caption'>
              <h2 className='hero-banner-sub_heading'>Looking for a quiality and affordable constructor for your next project?</h2>
              <button className='btn btn--border btn--large'>Get a quote</button>
            </figcaption>
          </figure>
        </section>
        <section id='who_we_are'>
          <header className='section-header'>
            <h2 className='section-heading'>who <br /> we are?</h2>
            <p className='section-sub_heading'>all about us</p>
          </header>
          <div className='section-body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, veritatis distinctio consectetur ipsam incidunt dolor repudiandae blanditiis itaque deleniti architecto, dolore reiciendis necessitatibus. Laborum, ipsam sunt delectus est asperiores in?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum accusamus autem dolor iusto a repudiandae possimus ratione nemo praesentium et labore cum, veniam ipsum quidem obcaecati porro fugit enim?</p>
          </div>
          <figure>
            <img src="https://source.unsplash.com/random?workers" alt="team members" />
          </figure>
        </section>
        <section id='section-about_card'>
          {data_about.map(data =>
            <div className='about-card'>
              <h3 className='about-card_heading'>{data.heading}</h3>
              <p className='about-card_caption'>{data.caption}</p>
            </div>
          )}
        </section>
        <section id="section-service">
          <header className='section-header'>
            <h2 className="section-heading">our <br />service</h2>
            <p className="section-sub_heading">the best construction <br />company</p>
          </header>
          <article className='section-body'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi similique fugiat perferendis laudantium eligendi, ducimus officiis consectetur minus accusamus aut, molestias eius praesentium explicabo aperiam id. Dolorem, doloremque impedit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut doloremque corrupti quia aliquid illum harum ex repellat voluptate nesciunt, reprehenderit molestias facilis, consectetur atque blanditiis nihil non veniam quae?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione itaque voluptatem sed ex suscipit nulla quod, hic </p>
          </article>
        </section>
        <section id='section-projects'>
          <header className="section-header">
            <h2 className="section-heading">our <br /> projects</h2>
            <p className="section-sub_heading">great &amp; awesome works</p>
          </header>
          <div className='section-body'>
            <nav className='nav-bred_crums'>{[...data_bred_crums].map(navItems => <span className="bred_crums"><a>{navItems}</a></span>)}</nav>
            <div className='project-imgs'>
              {data_projects.map(project => <img className='project-img' src={`https://source.unsplash.com/random?${project}`} />)}
            </div>
          </div>
        </section>
        <section id='section-client_testimonal'>
          <header className="section-header">
            <h2 className="section-heading">client<br /> says</h2>
            <p className="section-sub_heading">golden word</p>
            <div className="section-body" style={{margin: '2rem 0'}}>
              <article className='testmonial'>
                <div>
                  <i class="fa fa-quote-right"></i>
                  <p className='testmonial-client_say'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                  <p>Eng. Abul Kalam</p>
                </div>
                <img src="http://source.unsplash.com/random?person" alt="" />
              </article>
            </div>
          </header>
        </section>
      </main>
    </div>
  );
}

export default App;
