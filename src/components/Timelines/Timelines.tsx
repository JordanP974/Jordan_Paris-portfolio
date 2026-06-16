import './Timelines.css'
function Timelines() {
  return(
    
  <section className="block" id="parcours">
    <div className="wrap">
      <div className="sec-head reveal">
        <span className="num" aria-hidden="true">04</span>
        <h2>Parcours</h2>
      </div>
      <div className="timeline">
        <div className="tl-col reveal">
          <h3>Formation</h3>
          <div className="tl-item">
            <div className="tl-when">2025 — 2026</div>
            <div className="tl-what">
              <h4>Formation Concepteur Développeur Web et Application (CDA)</h4>
              <p>Ecole O'clock — parcours développement web et d'applications.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-when">2016</div>
            <div className="tl-what">
              <h4>Baccalauréat général Science Economique & Social</h4>
              <p>Science Economique &amp; Social.</p>
            </div>
          </div>
        </div>
        <div className="tl-col reveal">
          <h3>Expérience</h3>
          <div className="tl-item">
            <div className="tl-when">2026</div>
            <div className="tl-what">
              <h4>Développeur web — en formation</h4>
              <p>Création d'un site de catalogue de café en SSR (EJS)</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-when">2026</div>
            <div className="tl-what">
              <h4>Développeur web — en formation</h4>
              <p>Création d’un logiciel chat bot (Svelte) avec integration de Mistral.ai grace a une clé API et stockage des conversation avec un BaaS (PocketBase)</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  )
}
 export default Timelines;