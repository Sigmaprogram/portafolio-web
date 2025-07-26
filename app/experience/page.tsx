import Link from "next/link";
import { ArrowLeft, Briefcase, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-background py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Experiencia Profesional
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Mi trayectoria profesional y los roles que he desempeñado a lo
                  largo de mi carrera.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12 space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    {index < experience.length - 1 && (
                      <div className="h-full w-0.5 bg-border"></div>
                    )}
                  </div>
                  <div className="space-y-2 pb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{job.position}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                    <p className="text-sm">{job.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {job.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="rounded-full bg-muted px-3 py-1 text-xs"
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
