import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 my-5">
      <a
        href="https://github.com/segevGr"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="text-3xl hover:scale-110 transition-transform duration-200"
          style={{ color: "#181717" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/segevgrotas/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-3xl hover:scale-110 transition-transform duration-200"
          style={{ color: "#0077B5" }}
        />
      </a>
      <a
        href="https://wa.me/+972547471733"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-3xl hover:scale-110 transition-transform duration-200"
          style={{ color: "#25D366" }}
        />
      </a>
      <a
        href="mailto:segev.grotas@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-3xl hover:scale-110 transition-transform duration-200"
          style={{ color: "#F4A261" }}
        />
      </a>
    </div>
  );
};

export default SocialIcons;
