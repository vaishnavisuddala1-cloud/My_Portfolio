import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Vaishnavi Suddala. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#home" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Back to Top
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="mailto:vaishnavisuddala3@gmail.com" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            "Success is the sum of the small efforts,repeated day in and day out" - Steve Jobs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;