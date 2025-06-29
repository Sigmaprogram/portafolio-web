"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ✅ Importa el Toaster
import { Toaster } from "@/components/ui/toaster";

export default function ContactPage() {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mrbkqand");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state.succeeded && !showToast) {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé lo antes posible.",
        duration: 2000,
      });
      setShowToast(true);

      const form = document.querySelector("form");
      form?.reset();
    }
  }, [state.succeeded, toast, showToast]);

  useEffect(() => {
    if (!state.submitting && !state.succeeded) {
      setShowToast(false);
    }
  }, [state.submitting, state.succeeded]);

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
                        República Dominicana, San Pedro de Macoris
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
                    >
                      <Button variant="outline" size="icon">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/kervin-daniel-leonardo-francois-1528b52b0/"
                      target="_blank"
                    >
                      <Button variant="outline" size="icon">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://x.com/Kervin_fr" target="_blank">
                      <Button variant="outline" size="icon">
                        <Twitter className="h-5 w-5" />
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
                      className="text-sm font-medium leading-none"
                    >
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                    />
                    <ValidationError
                      prefix="Nombre"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  <div className="grid gap-3">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div className="grid gap-3">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none"
                    >
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Asunto del mensaje"
                      required
                    />
                    <ValidationError
                      prefix="Asunto"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>

                  <div className="grid gap-3">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tu mensaje"
                      className="min-h-[120px]"
                      required
                    />
                    <ValidationError
                      prefix="Mensaje"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button type="submit" disabled={state.submitting}>
                    {state.submitting ? (
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

      {/* ✅ Muestra los toast aquí */}
      <Toaster />
    </div>
  );
}
