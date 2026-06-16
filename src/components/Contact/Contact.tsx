
import './Contact.css';
import Information from './Information/Information';

function Contact(){
 return (
  <section className="contact" id="contact">
      <div className="wrap">
        <h2 className="reveal">Une équipe à compléter pour ce stage&nbsp;?</h2>
        <p className="reveal">
          Je serais ravi d'échanger sur vos projets et de vous montrer ce que je peux apporter. La réponse est rapide.
        </p>
        
        <div className="contact-links reveal">
          <Information/>
        </div>
      </div>
    </section>
 )
}

export default Contact;