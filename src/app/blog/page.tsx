import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TopicGenerator } from './components/topic-generator';

const mockPosts = [
  {
    slug: 'ia-en-el-desarrollo-web',
    title: 'La Revolución de la IA en el Desarrollo Web Moderno',
    description: 'Cómo la inteligencia artificial está cambiando la forma en que construimos sitios y aplicaciones web.',
    date: '2024-07-20',
  },
  {
    slug: 'primeros-pasos-con-react-native',
    title: 'Primeros Pasos con React Native para Proyectos Móviles',
    description: 'Una guía de inicio para desarrolladores que buscan entrar en el mundo del desarrollo de aplicaciones móviles.',
    date: '2024-07-15',
  },
  {
    slug: 'modelos-de-lenguaje-grandes',
    title: 'Entendiendo los Modelos de Lenguaje Grandes (LLMs)',
    description: 'Una inmersión profunda en qué son los LLMs y cómo están impulsando la nueva ola de innovación en IA.',
    date: '2024-07-10',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">Blog de Tecnología y IA</h1>
          <p className="text-lg text-muted-foreground">
            Explora artículos, tutoriales e ideas sobre el mundo de la tecnología y la inteligencia artificial.
          </p>
        </div>

        <TopicGenerator />

        <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter">Artículos Recientes</h2>
            <div className="grid gap-6">
                {mockPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                        <Card className="hover:border-primary transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="text-xl text-primary group-hover:underline">{post.title}</CardTitle>
                                <p className="text-sm text-muted-foreground pt-1">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                <CardDescription className="pt-2">{post.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
