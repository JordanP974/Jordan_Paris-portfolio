import type { ISkills } from '../../@types/index.d';
import './Skills.css';
import { skills } from '../../data/skills';

function Skills() {
  return (
    <section className="block" id="competences">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num" aria-hidden="true">02</span>
          <h2>Compétences</h2>
        </div>
        <div className="skills-grid">
          {skills.map((c: ISkills) => (
            <div key={c.title} className="skill-col reveal">
              <h3>{c.title}</h3>
              <div className="tags">
                {c.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
