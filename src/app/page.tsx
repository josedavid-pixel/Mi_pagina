import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Hola, soy Jose David
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
 Apasionado por la Inteligencia Artificial y el desarrollo de software, mi viaje en el mundo de la tecnología se impulsa por la constante búsqueda de soluciones innovadoras. Cuento con un sólido dominio de las herramientas de Google, destacando mi experiencia con Firebase, plataforma que utilizo activamente en mis proyectos.

 Una de mis experiencias más enriquecedoras fue participar en la hackathon "Build with IA", organizada por GDG Santa Cruz. Fue una oportunidad increíble para poner a prueba mis habilidades, colaborar en un entorno desafiante y explorar el potencial de la inteligencia artificial en aplicaciones prácticas.

 Actualmente, además de mis proyectos personales, colaboro en iniciativas de software en la Universidad Autónoma Gabriel René Moreno (UAGRM) y he estado involucrado en el desarrollo de soluciones tecnológicas para el sector agroindustrial. Estas experiencias me han permitido aplicar mis conocimientos en contextos reales y comprender las necesidades específicas de diferentes industrias.

 Mi objetivo es seguir aprendiendo, creando y contribuyendo al desarrollo de software que genere un impacto positivo, siempre explorando las fronteras de la inteligencia artificial y las tecnologías emergentes.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <Avatar className="h-48 w-48">
                    <AvatarImage src="/profile.png" alt="Jose David" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Mis Proyectos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Una selección de proyectos que demuestran mi pasión por el desarrollo y la innovación.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Proyecto Uno</CardTitle>
                <CardDescription>Una aplicación web para la gestión de tareas.</CardDescription>
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
                <CardDescription>Plataforma de e-commerce con IA para recomendaciones.</CardDescription>
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
                <CardDescription>Visualizador de datos interactivo para análisis de mercado.</CardDescription>
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
