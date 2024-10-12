import React from 'react';
import { Github, Linkedin, Mail, Palette, Code, Gamepad2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-morandi-bg flex flex-col items-center justify-center p-4 font-pixel text-morandi-text">
      <div className="max-w-2xl w-full bg-morandi-primary p-8 pixel-border">
        <h1 className="text-4xl mb-6 text-morandi-text pixel-text">Pixel Art Portfolio</h1>
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
            alt="Profile Picture"
            className="w-32 h-32 rounded-full mx-auto mb-4 pixel-border"
          />
          <p className="text-center">Hello, I'm a pixel artist and web developer</p>
        </div>
        <div className="space-y-4">
          <div className="bg-morandi-secondary p-4 pixel-border">
            <h2 className="text-xl mb-2 text-morandi-text pixel-text">About Me</h2>
            <p className="text-morandi-text text-sm">I love creating pixel art and developing unique web experiences. My work blends retro style with modern technology.</p>
          </div>
          <div className="bg-morandi-accent1 p-4 pixel-border">
            <h2 className="text-xl mb-2 text-morandi-text pixel-text">Skills</h2>
            <div className="grid grid-cols-2 gap-2 text-morandi-text text-sm">
              <div className="flex items-center"><Palette size={16} className="mr-2" /> Pixel Art</div>
              <div className="flex items-center"><Code size={16} className="mr-2" /> Web Development</div>
              <div className="flex items-center"><Palette size={16} className="mr-2" /> UI/UX Design</div>
              <div className="flex items-center"><Gamepad2 size={16} className="mr-2" /> Game Development</div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-morandi-accent2 p-4 pixel-border">
            <h3 className="text-lg mb-2 text-morandi-text pixel-text">Projects</h3>
            <ul className="text-sm list-disc list-inside">
              <li>Retro Game UI</li>
              <li>Pixel Art Landscapes</li>
            </ul>
          </div>
          <div className="bg-morandi-accent3 p-4 pixel-border">
            <h3 className="text-lg mb-2 text-morandi-text pixel-text">Experience</h3>
            <ul className="text-sm list-disc list-inside">
              <li>Freelance Artist</li>
              <li>Web Developer</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-morandi-text hover:text-morandi-accent4 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-morandi-text hover:text-morandi-accent4 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-morandi-text hover:text-morandi-accent4 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;