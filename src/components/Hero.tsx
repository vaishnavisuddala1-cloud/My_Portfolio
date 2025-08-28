import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/60"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Vaishnavi Suddala</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                B.Tech Student & <span className="text-accent">Full-Stack Developer</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate about building innovative web applications and AI/ML solutions. 
              Currently mastering Next.js, React, Python, DSA and exploring the latest in technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="hero-button text-center">
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/vaishnavisuddala1-cloud" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vaishnavi-goud-suddala-183190328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vaishnavisuddala3@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-glow"></div>
              <div className="relative bg-gradient-to-br from-secondary to-card p-8 rounded-2xl border border-border animate-float">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-primary-foreground">
                    VS
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Consistency,Confidence,Adaptability</h3>
                    <p className="text-muted-foreground">Building the future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;