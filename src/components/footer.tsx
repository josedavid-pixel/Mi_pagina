import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, GithubIcon, Twitter, Instagram, CodeXml } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">David.dev</span>
          </div>
          <div className="flex space-x-2">
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
        <div className="mt-8 text-center text-sm">
          <p>&copy; {currentYear} Jose David Borja Vasquez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
