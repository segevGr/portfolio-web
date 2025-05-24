import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ title, description, imgSrc, tech, link, github }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md cursor-default"
    >
      <div className="rounded-2xl shadow-md overflow-hidden bg-white">
        <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
          <p className="text-sm mb-4 leading-relaxed text-text">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full text-xs font-medium bg-secondary text-background"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-lg bg-primary text-background font-medium shadow hover:opacity-90 transition inline-block"
              >
                View Project
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex flex-row items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-medium hover:opacity-90 transition"
              >
                GitHub
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "#181717" }}
                  className="text-xl"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
