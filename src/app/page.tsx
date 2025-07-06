'use client'

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, Atom, GitBranch, Github, Flame, Code, CodeXml, Palette, Wind, ArrowRight, Database, Server, KeyRound, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";


const technologies = {
    languages: [
      {
        name: 'TypeScript',
        icon: <span className="text-2xl font-bold">TS</span>,
        description: "Un superconjunto de JavaScript que añade tipado estático opcional. Se usa para construir aplicaciones grandes y robustas, ya que ayuda a prevenir errores comunes y mejora la legibilidad del código.",
        url: 'https://www.typescriptlang.org/'
      },
      {
        name: 'JavaScript',
        icon: <span className="text-2xl font-bold">JS</span>,
        description: "El lenguaje de programación fundamental de la web. Se utiliza para crear interactividad en las páginas web, desde animaciones simples hasta aplicaciones complejas del lado del cliente y del servidor (con Node.js).",
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        name: 'HTML5',
        icon: <CodeXml className="w-10 h-10" />,
        description: "El lenguaje de marcado estándar para crear y estructurar el contenido de las páginas web. Define elementos como párrafos, encabezados, imágenes y formularios.",
        url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        name: 'CSS3',
        icon: <Palette className="w-10 h-10" />,
        description: "El lenguaje de hojas de estilo utilizado para describir la presentación y el diseño de un documento escrito en HTML. Controla colores, fuentes, espaciado y diseño responsivo.",
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      }
    ],
    frameworks: [
      {
        name: 'Next.js',
        icon: <span className="text-3xl font-bold">N</span>,
        description: "Un framework de React para construir aplicaciones web de producción. Ofrece renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG), enrutamiento basado en archivos y optimización de rendimiento.",
        url: 'https://nextjs.org/'
      },
      {
        name: 'React',
        icon: <Atom className="w-10 h-10" />,
        description: "Una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. Permite desarrollar aplicaciones de una sola página (SPA) de manera eficiente mediante un modelo de componentes.",
        url: 'https://react.dev/'
      },
      {
        name: 'Tailwind CSS',
        icon: <Wind className="w-10 h-10" />,
        description: "Un framework de CSS 'utility-first' para crear rápidamente diseños personalizados sin salir de tu HTML. Proporciona clases de bajo nivel que se pueden combinar para construir cualquier diseño.",
        url: 'https://tailwindcss.com/'
      }
    ],
    firebase: [
        {
          name: 'Firestore',
          icon: <Database className="w-9 h-9" />,
          description: "Una base de datos NoSQL, flexible y escalable para el desarrollo móvil, web y de servidores. Permite almacenar y sincronizar datos en tiempo real entre clientes.",
          url: 'https://firebase.google.com/docs/firestore'
        },
        {
          name: 'Hosting',
          icon: <Server className="w-9 h-9" />,
          description: "Un servicio de alojamiento web rápido y seguro para aplicaciones web estáticas y dinámicas, así como para microservicios. Ofrece CDN global, SSL automático y despliegues sencillos.",
          url: 'https://firebase.google.com/docs/hosting'
        },
        {
          name: 'Authentication',
          icon: <KeyRound className="w-9 h-9" />,
          description: "Proporciona servicios de backend fáciles de usar, SDK seguros y bibliotecas de UI listas para usar para autenticar a los usuarios en tu aplicación. Admite proveedores de identidad como correo electrónico, redes sociales y más.",
          url: 'https://firebase.google.com/docs/auth'
        }
    ],
    tools: [
      {
        name: 'Firebase',
        icon: <Flame className="w-10 h-10" />,
        description: "Una plataforma de desarrollo de aplicaciones de Google que ayuda a crear, mejorar y hacer crecer apps. Ofrece una amplia gama de herramientas y servicios como bases de datos, autenticación, hosting y más.",
        url: 'https://firebase.google.com/'
      },
      {
        name: 'Git',
        icon: <GitBranch className="w-10 h-10" />,
        description: "Un sistema de control de versiones distribuido, diseñado para manejar todo, desde proyectos pequeños hasta muy grandes, con velocidad y eficiencia. Es fundamental para el desarrollo de software colaborativo.",
        url: 'https://git-scm.com/'
      },
      {
        name: 'GitHub',
        icon: <Github className="w-10 h-10" />,
        description: "Una plataforma de alojamiento para el control de versiones con Git. Se utiliza para almacenar, gestionar y colaborar en proyectos de software. Incluye herramientas para seguimiento de problemas, integración continua y más.",
        url: 'https://github.com/'
      },
      {
        name: 'VS Code',
        icon: <Code className="w-10 h-10" />,
        description: "Un editor de código fuente ligero pero potente que se ejecuta en el escritorio. Viene con soporte integrado para JavaScript, TypeScript y Node.js, y un rico ecosistema de extensiones para otros lenguajes y herramientas.",
        url: 'https://code.visualstudio.com/'
      }
    ]
  };
  
const TechCard = ({ tech }: { tech: typeof technologies.languages[0] }) => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex w-full flex-col items-center justify-start gap-2 text-center group p-4 rounded-lg transition-all duration-300 hover:bg-secondary">
          <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            {tech.icon}
          </div>
          <span className="text-sm font-medium">{tech.name}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted text-primary shrink-0">
              {tech.icon}
            </div>
            {tech.name}
          </DialogTitle>
          <DialogDescription className="pt-4 text-left">
            {tech.description}
          </DialogDescription>
        </DialogHeader>
        <Button asChild>
          <Link href={tech.url} target="_blank" rel="noopener noreferrer">
            Página Oficial <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="about" className="w-full py-20 md:py-32 lg:py-40 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl xl:text-8xl/none text-primary">
                José David Borja Vasquez
              </h1>
              <h2 className="text-xl font-medium tracking-wide text-foreground/90 md:text-2xl">
                Developer with AI
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Apasionado por crear soluciones innovadoras que combinan el desarrollo de software y el poder de la inteligencia artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Details Section */}
      <section id="about-details" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-6">Sobre Mí</h2>
                  <div className="space-y-4 text-muted-foreground text-left">
                    <p>
                      ¡Hola! Soy estudiante de <strong>Ingeniería en Sistemas</strong> en la UAGRM, con una profunda pasión por el desarrollo web y la inteligencia artificial. Me considero una persona curiosa, autodidacta y comprometida con mi formación.
                    </p>
                    <p>
                      He participado activamente en <strong>ferias tecnológicas, talleres y eventos de innovación</strong>, incluyendo el evento <strong>Build With AI</strong> en la UCB, donde pude colaborar y aprender con otros apasionados del sector.
                    </p>
                    <p>
                      Fuera del código, disfruto tocar la guitarra, jugar al fútbol y explorar nuevas herramientas digitales. Mi objetivo es crecer como desarrollador y <strong>contribuir con soluciones tecnológicas que generen un impacto positivo</strong>.
                    </p>
                  </div>
              </div>
              <div className="flex justify-center">
                  <Image
                      src="https://placehold.co/450x450.png"
                      width="450"
                      height="450"
                      alt="Foto de Jose David"
                      className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                      data-ai-hint="man portrait"
                  />
              </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Herramientas y Tecnologías</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Estas son algunas de las tecnologías y herramientas que uso para dar vida a mis proyectos. Haz clic en cada una para saber más.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-center mb-6">Lenguajes</h3>
              <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 justify-items-center max-w-2xl">
                {technologies.languages.map(tech => <TechCard key={tech.name} tech={tech} />)}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-center mb-6">Frameworks y Librerías</h3>
              <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 justify-items-center max-w-lg">
                {technologies.frameworks.map(tech => <TechCard key={tech.name} tech={tech} />)}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-center mb-6">Servicios de Firebase</h3>
              <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 justify-items-center max-w-lg">
                {technologies.firebase.map(tech => <TechCard key={tech.name} tech={tech} />)}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-center mb-6">Herramientas de Desarrollo</h3>
              <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 justify-items-center max-w-2xl">
                {technologies.tools.map(tech => <TechCard key={tech.name} tech={tech} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Mis Proyectos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Aquí hay una selección de algunos de mis trabajos recientes.
              </p>
            </div>
          </div>
          <div className="text-center py-12">
            <p className="text-muted-foreground">Pronto subiré mis proyectos.</p>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
}
