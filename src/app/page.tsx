
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-primary font-headline">
                Desarrollador de Software y Entusiasta de la IA
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Hola, soy Jose David. Apasionado por crear soluciones innovadoras que combinan el desarrollo de software y el poder de la inteligencia artificial.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/#projects">
                  Ver Proyectos
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="/jose.jpg"
            width="1000"
            height="1000"
            alt="Foto de Jose David en un evento para desarrolladores"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            data-ai-hint="man portrait"
          />
        </div>
      </section>

      {/* About Me Details Section */}
      <section id="about-details" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-headline">Sobre Mí</h2>
                  </div>
              </div>
              <div className="mx-auto max-w-3xl py-12 text-center text-muted-foreground space-y-4">
                  <p className="text-foreground">
 ¡Hola! Soy José David Borja Vásquez, estudiante de Ingeniería en Sistemas en la Facultad Integral de Ichilo de la UAGRM. Me apasiona el mundo de la tecnología, especialmente el desarrollo web y la inteligencia artificial, áreas en las que estoy enfocado y aprendiendo constantemente.
                  </p>
                  <p>
                      Me considero una persona curiosa, autodidacta y comprometido con mi formación. A lo largo de mi carrera universitaria he participado en actividades como ferias tecnológicas, talleres y eventos de innovación. Una de las experiencias más importantes fue mi participación en el evento Build With AI realizado en la Universidad Católica Boliviana (UCB), donde tuve la oportunidad de compartir ideas y aprender junto a otros apasionados por la tecnología.
                  </p>
                  <p>
 Además de la programación, disfruto de tocar guitarra, jugar fútbol y explorar nuevas herramientas digitales. Me encanta aprender y desafiarme constantemente con nuevos proyectos y tecnologías.
                  </p>
                  <p>
 Mi objetivo es seguir creciendo como desarrollador y contribuir con soluciones tecnológicas que impacten positivamente en la sociedad.

                  </p>
              </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary font-headline">Mis Proyectos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Una selección de proyectos de código abierto y personales que he realizado a lo largo de los años.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 py-12 sm:grid-cols-2 lg:gap-6">
            <Card className="flex flex-col transition-colors duration-300 border-2 border-card hover:border-primary">
              <CardHeader className="flex-grow p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">2024</span>
                  <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" />
                    142
                  </div>
                </div>
                <CardTitle className="mb-1 text-base">
                  <Link href="#" className="font-semibold text-foreground hover:text-primary hover:underline" target="_blank">
                    Gestor de Tareas con IA
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">Aplicación web para la gestión de tareas con priorización automática.</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                        <Link href="#" target="_blank">Fuente</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                        <Link href="#" target="_blank">Demo</Link>
                    </Button>
                </div>
              </CardFooter>
            </Card>
            <Card className="flex flex-col transition-colors duration-300 border-2 border-card hover:border-primary">
              <CardHeader className="flex-grow p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">2023</span>
                  <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" />
                    230
                  </div>
                </div>
                <CardTitle className="mb-1 text-base">
                  <Link href="#" className="font-semibold text-foreground hover:text-primary hover:underline" target="_blank">
                    E-commerce con Recomendaciones
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">Plataforma de e-commerce con IA para recomendaciones de productos.</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                        <Link href="#" target="_blank">Fuente</Link>
                    </Button>
                </div>
              </CardFooter>
            </Card>
            <Card className="flex flex-col transition-colors duration-300 border-2 border-card hover:border-primary">
              <CardHeader className="flex-grow p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">2023</span>
                  <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" />
                    89
                  </div>
                </div>
                <CardTitle className="mb-1 text-base">
                  <Link href="#" className="font-semibold text-foreground hover:text-primary hover:underline" target="_blank">
                    Visualizador de Datos de Mercado
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">Herramienta interactiva para el análisis de datos de mercado.</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                        <Link href="#" target="_blank">Fuente</Link>
                    </Button>
                </div>
              </CardFooter>
            </Card>
             <Card className="flex flex-col transition-colors duration-300 border-2 border-card hover:border-primary">
              <CardHeader className="flex-grow p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">2024</span>
                  <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" />
                    315
                  </div>
                </div>
                <CardTitle className="mb-1 text-base">
                  <Link href="#" className="font-semibold text-foreground hover:text-primary hover:underline">
                    David.dev (Este Sitio)
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm">El código fuente de este portafolio y blog personal.</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                        <Link href="https://github.com/josedavid-pixel/mi-portafolio" target="_blank">Fuente</Link>
                    </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
}
