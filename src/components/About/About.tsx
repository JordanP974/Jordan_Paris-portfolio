import './About.css'

function About() {
  return (
    <section className="block" id="apropos">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num" aria-hidden="true">01</span>
          <h2>À propos</h2>
        </div>
        <div className="about-grid">
          <div className="reveal">
            <p>
              Après plusieurs années dans l'industrie agroalimentaire, j'ai entrepris une reconversion vers le
              développement web afin de transformer ma passion pour le numérique en métier. Aujourd'hui, je développe
              des applications Full-Stack, tout en poursuivant mon apprentissage à travers des projets concrets et de
              nouveaux défis techniques.
            </p>
            <p>
              Ce qui me motive, c'est le moment où une interface devient évidente à utiliser. Je fais attention à
              l'accessibilité, aux performances et au code lisible, parce qu'un projet vit toujours plus longtemps qu'on
              ne le pense.
            </p>
            <p>
              Je cherche un stage dans une équipe où je pourrai apprendre au contact de développeurs expérimentés,
              contribuer à du vrai code et progresser vite.
            </p>
          </div>
          <aside className="about-aside reveal">
            <h3>En bref</h3>
            <div className="fact">
              <span>focus</span>
              <span>Back-end</span>
            </div>
            <div className="fact">
              <span>langues</span>
              <span>FR · EN (B1)</span>
            </div>
            <div className="fact">
              <span>dispo</span>
              <span>22 Juin 2026</span>
            </div>
            <div className="fact">
              <span>durée</span>
              <span>7 semaines</span>
            </div>
            <div className="fact">
              <span>hors écran</span>
              <span>Jeux de Société, Impression 3D</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;