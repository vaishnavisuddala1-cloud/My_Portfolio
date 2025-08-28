import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Spam Detection",
      description: "Spam Detection System Developed a robust spam classification system using Python and Scikit-learn. The model processes and analyzes text data through NLP pipelines—including TF-IDF vectorization—and employs a Naive Bayes classifier to distinguish between spam and legitimate messages with high precision. This project demonstrates core skills in data preprocessing, machine learning, and model evaluation.",
      tags: ["Python", "Machine-learning", "Scikit-learn", "Text-Classification", "Data-Science"],
      githubUrl: "https://github.com/vaishnavisuddala1-cloud/Spam_Detection",
      featured: true
    },
    {
      title: "AI-Career-Guidance",
      description: "AI Career Guide & Mentor Providing clear, actionable guidance for aspiring AI professionals. Offering insights on essential skills, learning pathways, and industry trends to help others navigate and launch successful careers in artificial intelligence and machine learning.",
      tags: ["Python", "TensorFlow", "Flask"],
      githubUrl: "https://github.com/vaishnavisuddala1-cloud/AI-Career-Guidance1",
    }  
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in web development, AI/ML, and mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a 
            href="https://github.com/vaishnavisuddala1-cloud" 
            className="hero-button inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;