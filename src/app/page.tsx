
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-primary">
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
          />
        </div>
      </section>

      {/* About Me Details Section */}
      <section id="about-details" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Sobre Mí</h2>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Mis Proyectos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Aquí es donde mostraré mi trabajo. ¡Vuelve pronto!
              </p>
            </div>
            <div className="py-12 text-center">
              <p className="text-muted-foreground">Aún no he publicado ningún proyecto. ¡Estoy trabajando en ello!</p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
}
