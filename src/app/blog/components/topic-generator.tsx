"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateBlogTopics } from "@/ai/flows/generate-blog-topics";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, List, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  trendingNews: z.string().min(10, {
    message: "Por favor, introduce al menos 10 caracteres.",
  }).max(5000, {
    message: "El texto no puede superar los 5000 caracteres."
  }),
});

export function TopicGenerator() {
  const [generatedTopics, setGeneratedTopics] = useState<string[]>([]);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      trendingNews: "",
    },
  });

  const {formState: { isSubmitting }} = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setGeneratedTopics([]); // Clear previous topics
      const result = await generateBlogTopics({ trendingNews: values.trendingNews });
      if (result && result.topics) {
        setGeneratedTopics(result.topics);
      } else {
        throw new Error("No topics were generated.");
      }
    } catch (error) {
      console.error("Error generating blog topics:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudieron generar los temas. Por favor, inténtalo de nuevo.",
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Lightbulb className="text-accent" />
            Generador de Temas para Blog
        </CardTitle>
        <CardDescription>
          Introduce noticias o tendencias sobre tecnología e IA para generar ideas de artículos para tu blog.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="trendingNews"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Noticias y Tendencias</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ej: 'El último modelo de OpenAI, GPT-5, ha sido anunciado...' o 'Tendencias en el desarrollo de frontend para 2025...'"
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generando...
                </>
              ) : "Generar Temas"}
            </Button>
          </form>
        </Form>
        {(isSubmitting || generatedTopics.length > 0) && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <List />
                Ideas de Temas
            </h3>
            <div className="space-y-4">
              {isSubmitting ? (
                <>
                  <Skeleton className="h-8 w-full rounded-md" />
                  <Skeleton className="h-8 w-5/6 rounded-md" />
                  <Skeleton className="h-8 w-full rounded-md" />
                </>
              ) : (
                <ul className="list-disc pl-5 space-y-2">
                    {generatedTopics.map((topic, index) => (
                        <li key={index} className="text-foreground/90 transition-opacity duration-300 animate-in fade-in" style={{animationDelay: `${index * 100}ms`}}>{topic}</li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
