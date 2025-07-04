import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { posts } from "@/lib/blogPosts";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// In a real app, you would fetch this data from a CMS or database.
const getPostData = (slug: string) => {
    return posts.find(p => p.slug === slug);
}


export default function BlogPostPage({ params }: { params: { slug:string } }) {
    const post = getPostData(params.slug);

    if (!post) {
        return (
            <div className="container py-24 text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-muted-foreground">Post no encontrado.</p>
            </div>
        );
    }
    
    const postDate = new Date(post.date);
    const formattedDate = format(postDate, "d 'de' MMMM, yyyy", { locale: es });

    return (
        <article className="container max-w-3xl py-12 mx-auto">
            <div className="mb-8">
                <Link href="/blog">
                    <Button variant="ghost" className="mb-4">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Volver al blog
                    </Button>
                </Link>
            </div>

            <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                    {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{post.title}</h1>
                <p className="text-muted-foreground">Publicado el {formattedDate}</p>
            </div>
            
            <div className="relative w-full mb-12 overflow-hidden aspect-video rounded-xl">
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
    return posts.map((post) => ({
      slug: post.slug,
    }));
}