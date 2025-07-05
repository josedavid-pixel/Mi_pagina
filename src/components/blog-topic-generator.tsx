'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { generateBlogTopics, GenerateBlogTopicsInput } from '@/ai/flows/generate-blog-topics';
import { Sparkles } from 'lucide-react';

export default function BlogTopicGenerator() {
  const [trendingNews, setTrendingNews] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trendingNews.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Por favor, introduce un tema o noticia.',
      });
      return;
    }

    setIsLoading(true);
    setTopics([]);

    try {
      const input: GenerateBlogTopicsInput = { trendingNews };
      const result = await generateBlogTopics(input);
      setTopics(result.topics);
    } catch (error) {
      console.error('Error generating blog topics:', error);
      toast({
        variant: 'destructive',
        title: 'Error de IA',
        description: 'No se pudieron generar los temas. Inténtalo de nuevo.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl font-bold text-primary">Generador de Ideas para Blog</CardTitle>
                    </div>
                    <CardDescription>
                        ¿Sin inspiración? Introduce una noticia o tendencia de tecnología o IA y obtén ideas para tu próximo artículo.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                        placeholder="Ej: 'El lanzamiento de Gemini 2.0'"
                        value={trendingNews}
                        onChange={(e) => setTrendingNews(e.target.value)}
                        disabled={isLoading}
                        />
                        <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? 'Generando...' : 'Generar Ideas'}
                        </Button>
                    </form>
                    {topics.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Temas Sugeridos:</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                {topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
