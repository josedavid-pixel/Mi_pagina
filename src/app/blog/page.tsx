import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const posts = [
  {
    slug: 'post-1',
    title: 'Mi Viaje con la IA Generativa',
    description: 'Una reflexión sobre cómo la IA generativa está cambiando el desarrollo de software y mi experiencia personal.',
    image: 'https://placehold.co/600x400.png',
    tags: ['IA', 'Desarrollo', 'Futuro'],
    aiHint: 'artificial intelligence abstract'
  },
  {
    slug: 'post-2',
    title: 'Firebase: El Backend que Todo Frontend Ama',
    description: 'Explorando las capacidades de Firebase y por qué se ha convertido en una herramienta esencial en mis proyectos.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Firebase', 'Backend', 'Google'],
    aiHint: 'cloud database'
  },
  {
    slug: 'post-3',
    title: 'Lecciones de una Hackathon de IA',
    description: 'Compartiendo las lecciones aprendidas durante la hackathon "Build with IA". Colaboración, presión y creatividad.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Hackathon', 'Comunidad', 'IA'],
    aiHint: 'people coding collaboration'
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Mi Blog</h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Aquí comparto mis pensamientos, experiencias y aprendizajes sobre tecnología, inteligencia artificial y desarrollo de software.
        </p>
      </div>

      <div className="grid gap-8 pt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
            <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                      <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={post.aiHint}
                      />
                  </div>
              </CardContent>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2 mt-auto">
                {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
