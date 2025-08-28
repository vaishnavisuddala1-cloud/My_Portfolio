import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Server,
  GitBranch,
  Palette
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React", level: 70 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 65 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 55 },
        { name: "REST APIs", level: 40 },
        { name: "GraphQL", level: 35 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-learn", level: 60 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Data Visualization", level: 85 }
      ]
    }
  ];

  const tools = [
    { name: "React", icon: <Code className="w-8 h-8" /> },
    { name: "Python", icon: <Brain className="w-8 h-8" /> },
    { name: "Node.js", icon: <Server className="w-8 h-8" /> },
    { name: "MongoDB", icon: <Database className="w-8 h-8" /> },
    { name: "Git", icon: <GitBranch className="w-8 h-8" /> },
    { name: "React Native", icon: <Smartphone className="w-8 h-8" /> },
    { name: "Next.js", icon: <Globe className="w-8 h-8" /> }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-background p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="tech-icon flex flex-col items-center justify-center gap-2 aspect-square"
                title={tool.name}
              >
                {tool.icon}
                <span className="text-xs font-medium text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-background p-8 rounded-xl border border-border max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced React patterns, cloud architecture, and diving deeper into 
              machine learning algorithms. I believe in learning by doing and contribute to open-source 
              projects regularly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;