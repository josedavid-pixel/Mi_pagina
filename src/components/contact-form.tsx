'use client';

import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { db } from "@/lib/firebase"; // Import db from your firebase config
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

export function ContactForm() {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Add a new document with a generated ID to the "mensajesContactos" collection.
      const docRef = await addDoc(collection(db, "mensajesContactos"), {
        nombre: formData.name,
        email: formData.email,
        celular: formData.phone, // Using 'celular' as per your Firestore collection
        mensaje: formData.message,
        estado: 'nuevo', // Initial status
        timestamp: new Date() // Optional: add a timestamp
      });
      console.log("Document written with ID: ", docRef.id);

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      alert("Message sent successfully!"); // Basic success feedback
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to send message. Please try again."); // Basic error feedback
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Contact Me</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
 <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
 <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
 <Input
              id="phone"
              type="tel"
              placeholder="e.g., +1 123 456 7890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
 <Textarea
              id="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;