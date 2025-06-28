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
import { projects, skillsWithLogos } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-dark py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Mis Proyectos
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Una colección completa de mis trabajos y proyectos más
                  destacados.
                </p>
              </div>
            </div>
            <div className="container section-padding">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto flex flex-col">
                {projects.map((project) => (
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
                        {project.technologies.map((tech) => (
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
                              Code
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
              <div className="flex justify-center mt-12">
                <Button asChild variant="outline">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
