import { Code, Brain, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Building responsive and interactive web applications with modern frameworks"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Projects",
      description: "Exploring machine learning algorithms and implementing intelligent solutions"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Always eager to learn new technologies and implement creative solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication and problem-solving skills"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate B.Tech student on a journey to master modern web technologies and AI/ML,with a focus on building scalable, real-world solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am currently pursuing a Bachelor of Technology degree, concentrating on modern web technologies and AI/ML.
                 My work centers on developing practical, innovative applications that address complex challenges through clean and efficient code.

              </p>
              <p className="text-muted-foreground leading-relaxed">
                I actively contribute to open-source projects and engage with emerging tools and frameworks to refine my technical expertise.
                 My approach emphasizes continuous improvement and adherence to industry best practices.

              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Currently Learning:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Advanced React and Next.js 
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Machine Learning with Python
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Cloud architecture and DevOps practices
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Mobile app development with React Native
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-background p-6 rounded-xl border border-border card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;