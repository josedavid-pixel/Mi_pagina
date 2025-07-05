import Link from "next/link";
import { CodeXml, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-10">
              <Link
                href="/#about"
                className="text-muted-foreground hover:text-foreground"
              >
                Sobre Mí
              </Link>
              <Link
                href="/#projects"
                className="text-muted-foreground hover:text-foreground"
              >
                Proyectos
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-foreground hover:text-foreground"
              >
                Contacto
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
