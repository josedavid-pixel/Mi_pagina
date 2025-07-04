'use client';

import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { db } from "@/lib/firebase"; 
import { collection, addDoc } from 'firebase/firestore'; 
import { useToast } from "@/hooks/use-toast";

function ContactForm() {
 const { toast } = useToast();
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "mensajesContactos"), {
        nombre: formData.name,
        email: formData.email,
        celular: formData.phone,
        mensaje: formData.message,
        estado: 'nuevo', 
        timestamp: new Date()
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      toast({
        title: "Mensaje Enviado",
        description: "Gracias por contactarme. Te responderé pronto.",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <Card className="w-full max-w-2xl mx-auto shadow-none border-none">
        <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Contáctame</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
    <Input
                    id="name"
                    type="text"
                    placeholder="Tu Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
    <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="phone">Número de Teléfono (Opcional)</Label>
    <Input
                id="phone"
                type="tel"
                placeholder="Ej: +591 71234567"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="message">Mensaje</Label>
    <Textarea
                id="message"
                placeholder="Tu mensaje..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[120px]"
                disabled={isSubmitting}
                />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
            </form>
        </CardContent>
        </Card>
    </section>
  );
}

export default ContactForm;
