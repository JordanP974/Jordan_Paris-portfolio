import { profile } from '../../../data/profile';
import { FaPhoneAlt } from "react-icons/fa";


import { SiProtonmail,SiGithub } from "react-icons/si";

function Information() {
  return (
    <>
      <a href={`mailto:${profile.email}`}><SiProtonmail aria-hidden="true" /> Email</a>
      <a href={`tel:${profile.phone}`}><FaPhoneAlt aria-hidden="true" /> Téléphone</a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        <SiGithub size={16} aria-hidden="true" /> GitHub
      </a>
    </>
  );
}
export default Information;
