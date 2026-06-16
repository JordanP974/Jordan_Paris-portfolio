import type { IconType } from 'react-icons';
import { FaDatabase, FaDocker, FaReact } from 'react-icons/fa';
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSvelte,
  SiTypescript,
  SiPrisma,
  SiSequelize 
} from 'react-icons/si';
import type { ISkills } from '../../@types/index.d';
import { skills } from '../../data/skills';
import './Skills.css';

const techIcons: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: FaDatabase,
  React: FaReact,
  'Next.js': SiNextdotjs,
  Svelte: SiSvelte,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  GraphQL: SiGraphql,
  Docker: FaDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Prisma: SiPrisma,
  Sequelize: SiSequelize
};

function Skills() {
  return (
    <section className="block" id="competences">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="num" aria-hidden="true">
            02
          </span>
          <h2>Compétences</h2>
        </div>
        <div className="skills-grid">
          {skills.map((c: ISkills) => (
            <div key={c.title} className="skill-col reveal">
              <h3>{c.title}</h3>
              <div className="tags">
                {c.technologies.map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <span key={tech} className="tag">
                      {Icon && <Icon aria-hidden="true" />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
