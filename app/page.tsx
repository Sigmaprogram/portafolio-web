import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
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
import SkillLogo from "@/components/skill-logo";
import { projects, skillsWithLogos } from "@/lib/data";

export default function Home() {
  // Get a subset of skills for the homepage
  const featuredSkills = [
    ...skillsWithLogos.Frontend.slice(0, 4),
    ...skillsWithLogos.Backend.slice(0, 4),
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container container-padding">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Hola, soy{" "}
                    <span className="text-gradient">Kervin Leonardo</span>
                  </h1>
                  <p className="text-xl text-dark-900 leading-relaxed max-w-2xl">
                    Desarrollador full-stack especializado en aplicaciones web
                    modernas, priorizando buenas prácticas y usabilidad.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-black font-medium"
                  >
                    <Link href="/contact">
                      Ponte en contacto <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-dark-600 hover:bg-secondary"
                  >
                    <Link href="/docs/cv.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" /> Descargar CV
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6">
                  <Link
                    href="https://github.com/Sigmaprogram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6 text-dark-900 hover:text-white transition-colors" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kervin-daniel-leonardo-francois-1528b52b0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6 text-dark-900 hover:text-white transition-colors" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="mailto:kervindanielleonardo@gmail.com">
                    <Mail className="h-6 w-6 text-dark-900 hover:text-white transition-colors" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
                  <Image
                    src="me.png"
                    alt="Foto profesional"
                    fill
                    className="object-cover rounded-2xl border border-dark-400"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding bg-dark-200">
          <div className="container container-padding">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src="sa.png"
                  alt="Entorno de trabajo"
                  fill
                  className="object-cover rounded-2xl border border-dark-400"
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                    Sobre mí
                  </h2>
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
                <Button
                  asChild
                  className="border-primary bg-primary hover:bg-primary/90"
                >
                  <Link href="/about">
                    Saber más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-padding">
          <div className="container container-padding">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Proyectos Destacados
                </h2>
                <p className="text-lg text-dark-900 max-w-2xl mx-auto">
                  Una selección de proyectos que muestran mis habilidades y
                  experiencia
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {projects.slice(0, 3).map((project) => (
                  <Card
                    key={project.id}
                    className="bg-dark-300 border-dark-500 card-hover"
                  >
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="space-y-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-dark-900">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-dark-400 text-dark-900 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex w-full justify-between">
                        {project.githubUrl && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-dark-600 hover:bg-secondary"
                          >
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-3 w-3" />
                              GitHub
                            </Link>
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-dark-600 hover:bg-secondary"
                          >
                            <Link
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-3 w-3" />
                              Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-dark-600 hover:bg-secondary"
                >
                  <Link href="/projects">
                    Ver todos los proyectos{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding bg-dark-200">
          <div className="container container-padding">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Habilidades y Tecnologías
                </h2>
                <p className="text-lg text-dark-900 max-w-2xl mx-auto">
                  Tecnologías con las que trabajo para dar vida a las ideas
                </p>
              </div>

              <div className="space-y-12">
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-center">
                    Tecnologias Frontend
                  </h3>
                  <div className="flex justify-center flex-wrap gap-16">
                    {skillsWithLogos.Frontend.slice(0, 8).map((skill) => (
                      <SkillLogo key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-center">
                    Tecnologias Backend
                  </h3>
                  <div className="flex justify-center flex-wrap gap-16">
                    {skillsWithLogos.Backend.slice(0, 8).map((skill) => (
                      <SkillLogo key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-dark-600 hover:bg-secondary"
                >
                  <Link href="/skills">
                    Ver todas las habilidades{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container container-padding">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                  Trabajemos Juntos
                </h2>
                <p className="text-lg text-dark-900">
                  Siempre estoy interesado en nuevas oportunidades y proyectos
                  emocionantes.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-medium"
              >
                <Link href="/contact">
                  Ponte en contacto <ArrowRight className="ml-2 h-4 w-4" />
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
