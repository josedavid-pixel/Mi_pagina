import Link from "next/link";
import { CodeXml } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <CodeXml className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">PersonaPulse</span>
      </Link>
      <nav className="ml-auto flex gap-2 sm:gap-4 items-center">
        <Button variant="link" asChild>
          <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre Mí
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Proyectos
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blog
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </Button>
        <ThemeToggle />
      </nav>
    </header>
  );
}
