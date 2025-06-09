"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
        variant: "default",
      });
      // Reset form
      e.currentTarget.reset();
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-dark py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Contacto
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 mt-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">
                    Información de contacto
                  </h2>
                  <p className="text-muted-foreground">
                    Estoy disponible para proyectos freelance, oportunidades
                    laborales o simplemente para charlar sobre tecnología.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        Kervindanielleonardo@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Ubicación</h3>
                      <p className="text-sm text-muted-foreground">
                        Dominican Republic, San Pedro de Macoris
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Sígueme en</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="https://github.com/Sigmaprogram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/kervin-daniel-leonardo-francois-1528b52b0/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://x.com/Kervin_fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Envíame un mensaje</h2>
                  <p className="text-muted-foreground">
                    Completa el formulario a continuación y me pondré en
                    contacto contigo lo antes posible.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-3">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" required />
                  </div>
                  <div className="grid gap-3">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Example@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      placeholder="Asunto de tu mensaje"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tu mensaje"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        Enviar mensaje <Check className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
