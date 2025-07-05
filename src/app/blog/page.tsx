import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { posts } from '@/lib/blogPosts';
import BlogTopicGenerator from '@/components/blog-topic-generator';

export default function BlogPage() {
  return (
    <div className="bg-background">
      <BlogTopicGenerator />
      <section className="w-full pt-12 pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Artículos Recientes
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explora mis últimos artículos sobre desarrollo de software, inteligencia artificial y tecnología.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 pb-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <Card className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-2xl">
                  <div className="relative w-full overflow-hidden aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={post.aiHint}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary">{post.title}</CardTitle>
                    <CardDescription className="pt-2">{post.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <div className="flex items-center font-semibold text-primary">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aún no he publicado ningún artículo, ¡pero estoy trabajando en nuevas ideas!</p>
          </div>
        )}
      </div>
    </div>
  );
}
