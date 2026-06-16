import './Projects.css';

function Projects() {
  return (
    <section className="block" id="projets">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num" aria-hidden="true">03</span>
          <h2>Projets</h2>
        </div>
        <div className="proj-index reveal">
          <article className="proj">
            <div className="proj-yr">2026</div>
            <div className="proj-main">
              <div className="proj-title">
                <span className="role">projet perso</span>
              </div>
              <p className="proj-desc">
                en cour de developpement 
              </p>
              <div className="proj-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>IndexedDB</span>
                <span>Vite</span>
              </div>
            </div>
            <div className="proj-links">
              <a href="#">
                Démo <span className="arr" aria-hidden="true">↗</span>
              </a>
              <a href="#">
                Code <span className="arr" aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          
        </div>
      </div>
    </section>
  );
}

export default Projects;