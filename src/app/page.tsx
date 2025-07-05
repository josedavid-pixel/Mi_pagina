import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            src="https://placehold.co/1000x1000.png"
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
                      Me considero una persona curiosa, autodidacta y comprometida con mi formación. A lo largo de mi carrera universitaria he participado en actividades como ferias tecnológicas, talleres y eventos de innovación. Una de las experiencias más importantes fue mi participación en el evento Build With AI realizado en la Universidad Católica Boliviana (UCB), donde tuve la oportunidad de compartir ideas y aprender junto a otros apasionados por la tecnología.
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
                Una selección de proyectos que demuestran mi pasión por el desarrollo y la innovación.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Proyecto Uno</CardTitle>
                <CardDescription className="text-muted-foreground">Una aplicación web para la gestión de tareas.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Project One"
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                  data-ai-hint="abstract technology"
                />
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">AI</Badge>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Proyecto Dos</CardTitle>
                <CardDescription className="text-muted-foreground">Plataforma de e-commerce con IA para recomendaciones.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Project Two"
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                  data-ai-hint="ecommerce shopping"
                />
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">ML</Badge>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Proyecto Tres</CardTitle>
                <CardDescription className="text-muted-foreground">Visualizador de datos interactivo para análisis de mercado.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Project Three"
                  width={600}
                  height={400}
                  className="rounded-md object-cover"
                  data-ai-hint="data charts"
                />
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Badge variant="secondary">D3.js</Badge>
                <Badge variant="secondary">Firebase</Badge>
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
