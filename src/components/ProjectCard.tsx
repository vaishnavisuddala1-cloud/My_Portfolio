import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, tags, image, githubUrl, liveUrl, featured = false }: ProjectCardProps) => {
  return (
    <div className={`bg-card border border-border rounded-xl overflow-hidden card-hover ${featured ? 'md:col-span-2' : ''}`}>
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-bold text-primary/30">{title.charAt(0)}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              <span className="text-sm"></span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              <span className="text-sm"></span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;