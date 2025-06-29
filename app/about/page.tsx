import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Award,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { certifications, education } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container container-padding">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    Sobre mi
                  </h1>
                  <p className="text-lg text-dark-900 leading-relaxed">
                    Soy un desarrollador full-stack enfocado en crear
                    aplicaciones web modernas y funcionales. Trabajo con
                    tecnologías como JavaScript, React y Node.js, y me apasiona
                    construir experiencias intuitivas y eficientes para los
                    usuarios.
                  </p>
                  <p className="text-lg text-dark-900 leading-relaxed">
                    Siempre estoy aprendiendo y mejorando mis habilidades para
                    mantenerme al día con las últimas tendencias del desarrollo
                    web. Me gusta trabajar en proyectos desafiantes que me
                    permitan crecer y aportar soluciones prácticas y bien
                    diseñadas.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-200 border border-dark-400">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-900">Email</p>
                      <p className="font-medium">
                        Kervindanielleonardo@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-200 border border-dark-400">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-900">Localización</p>
                      <p className="font-medium">
                        República Dominicana, San pedro de Macoris
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-black font-medium"
                  >
                    <Link href="/contact">
                      Ponte en contacto <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-dark-600 hover:bg-secondary"
                  >
                    <Link href="/docs/cv.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" /> Descargar CV
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                  <Image
                    src="/me.png"
                    alt="Professional photo"
                    fill
                    className="object-cover rounded-2xl border border-dark-400"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="section-padding bg-dark-200">
          <div className="container container-padding">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Education */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight">Educación</h2>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        {index < education.length - 1 && (
                          <div className="h-full w-0.5 bg-dark-400 mt-2"></div>
                        )}
                      </div>
                      <div className="space-y-2 pb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-dark-900" />
                          <span className="text-sm text-dark-900">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                        <p className="text-dark-900">{item.institution}</p>
                        <p className="text-sm text-dark-900">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Certificaciones
                </h2>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="bg-dark-300 border-dark-500">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                            <Award className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-base">
                              {cert.title}
                            </CardTitle>
                            <CardDescription className="text-dark-900">
                              {cert.issuer}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-dark-900" />
                            <span className="text-sm text-dark-900">
                              {cert.date}
                            </span>
                          </div>
                          {cert.url && (
                            <Button
                              variant="link"
                              className="p-0 h-auto text-primary hover:text-primary/80"
                              asChild
                            >
                              <Link
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Ver certificado{" "}
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
