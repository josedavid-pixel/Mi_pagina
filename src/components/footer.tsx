import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, GithubIcon, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex space-x-4">
          {/* Placeholder for social media icons */}
          {/* Social media icons will be added here */}
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/jose-david-borja-vasquez-a58a17307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://github.com/josedavid-pixel" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://x.com/borja_jose52373" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter (X)</span>
            </Button>
          </Link>
          <Link href="https://www.instagram.com/josedavid102025?igsh=MWIvMmpIdnkyZWxjdw==" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;