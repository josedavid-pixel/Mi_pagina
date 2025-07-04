import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// In a real app, you would fetch this data from a CMS or database.
const getPostData = (slug: string) => {
    const posts = [
        {
          slug: 'post-1',
          title: 'Mi Viaje con la IA Generativa',
          description: 'Una reflexión sobre cómo la IA generativa está cambiando el desarrollo de software y mi experiencia personal.',
          content: '<h3>El Amanecer de una Nueva Era</h3><p>La inteligencia artificial generativa ha dejado de ser una fantasía de ciencia ficción para convertirse en una herramienta tangible y poderosa en el arsenal de cualquier desarrollador de software. Mi primer encuentro con un modelo de lenguaje grande (LLM) fue una mezcla de asombro y escepticismo. ¿Podría una máquina realmente escribir código, componer texto coherente o incluso ayudar en el diseño creativo? La respuesta, como descubrí rápidamente, es un rotundo sí.</p><h3>Herramientas que Cambian el Juego</h3><p>Desde la finalización de código inteligente con herramientas como GitHub Copilot hasta la generación de componentes de interfaz de usuario completos a partir de un simple boceto, la IA generativa está acelerando los flujos de trabajo de desarrollo a un ritmo sin precedentes. En mis proyectos, he utilizado Genkit para crear flujos de IA complejos que automatizan tareas, personalizan las experiencias de los usuarios y extraen información valiosa de datos no estructurados. La capacidad de describir un resultado deseado en lenguaje natural y ver cómo la IA lo traduce en código funcional es nada menos que mágico.</p><h3>Más Allá del Código</h3><p>Pero el impacto no se limita a la escritura de código. La IA generativa también es una colaboradora creativa. Me ha ayudado a generar ideas para entradas de blog (¡como esta!), redactar documentación técnica clara y concisa, e incluso a crear imágenes de marcador de posición y activos de diseño. Es como tener un asistente de equipo multidisciplinar disponible 24/7.</p><h3>El Futuro es Colaborativo</h3><p>Lejos de reemplazar a los desarrolladores, veo la IA generativa como el copiloto definitivo. Nos libera de las tareas tediosas y repetitivas, permitiéndonos centrarnos en los problemas más complejos: la arquitectura del sistema, la experiencia del usuario y la innovación. El futuro del desarrollo de software no es una batalla entre humanos y máquinas, sino una sinergia colaborativa en la que nuestra creatividad se ve aumentada por la potencia computacional de la IA.</p>',
          image: 'https://placehold.co/1200x600.png',
          tags: ['IA', 'Desarrollo', 'Futuro'],
          aiHint: 'artificial intelligence abstract'
        },
        {
          slug: 'post-2',
          title: 'Firebase: El Backend que Todo Frontend Ama',
          description: 'Explorando las capacidades de Firebase y por qué se ha convertido en una herramienta esencial en mis proyectos.',
          content: '<p>Este es el contenido completo del post sobre Firebase. Hablaremos de Firestore, Authentication, Cloud Functions y mucho más. Es una plataforma increíblemente poderosa para un desarrollo rápido y escalable.</p>',
          image: 'https://placehold.co/1200x600.png',
          tags: ['Firebase', 'Backend', 'Google'],
          aiHint: 'cloud database'
        },
        {
          slug: 'post-3',
          title: 'Lecciones de una Hackathon de IA',
          description: 'Compartiendo las lecciones aprendidas durante la hackathon "Build with IA". Colaboración, presión y creatividad.',
          content: '<p>Este es el contenido completo del post sobre la Hackathon. Una experiencia intensa y gratificante que me enseñó el valor del trabajo en equipo y la creación rápida de prototipos bajo presión.</p>',
          image: 'https://placehold.co/1200x600.png',
          tags: ['Hackathon', 'Comunidad', 'IA'],
          aiHint: 'people coding collaboration'
        }
    ];
    return posts.find(p => p.slug === slug);
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostData(params.slug);

    if (!post) {
        return (
            <div className="container py-24 text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-muted-foreground">Post no encontrado.</p>
            </div>
        );
    }

    return (
        <article className="container max-w-4xl py-12 mx-auto">
            <div className="space-y-4 text-center mb-8">
                <div className="flex items-center justify-center gap-2">
                    {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{post.title}</h1>
                <p className="text-muted-foreground">Publicado el 4 de Julio, 2024</p>
            </div>
            
            <div className="relative w-full mb-8 overflow-hidden aspect-video rounded-xl">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.aiHint}
                />
            </div>

            <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }} 
            />
        </article>
    );
}

// In a real app, you would generate static params for all your blog posts.
export async function generateStaticParams() {
    const posts = [
        { slug: 'post-1' },
        { slug: 'post-2' },
        { slug: 'post-3' },
    ];
   
    return posts.map((post) => ({
      slug: post.slug,
    }));
}
