'use client';

import Link from "next/link";
import { CodeXml, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <Link
        href="/"
        className="flex items-center justify-center gap-2"
        prefetch={false}
      >
        <CodeXml className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">PersonaPulse</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-2 sm:gap-4 items-center">
        <Button variant="link" asChild>
          <Link
            href="/#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Sobre Mí
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link
            href="/#projects"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Proyectos
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link
            href="/blog"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Blog
          </Link>
        </Button>
        <Button asChild>
          <Link href="/#contact" prefetch={false}>
            Contacto
          </Link>
        </Button>
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <SheetHeader className="sr-only">
                <SheetTitle>Menú Principal</SheetTitle>
            </SheetHeader>
            <SheetClose asChild>
                <Link
                    href="/"
                    className="flex items-center gap-2 border-b p-4"
                    prefetch={false}
                  >
                    <CodeXml className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">PersonaPulse</span>
                </Link>
            </SheetClose>
            <div className="h-full">
              <nav className="grid gap-2 p-4 text-base font-medium">
                <SheetClose asChild>
                  <Link
                    href="/#about"
                    className="flex items-center rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Sobre Mí
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#projects"
                    className="flex items-center rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Proyectos
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/blog"
                    className="flex items-center rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Blog
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#contact"
                    className="flex items-center rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Contacto
                  </Link>
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
