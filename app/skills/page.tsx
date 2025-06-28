import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SkillLogo from "@/components/skill-logo";
import { skillsWithLogos } from "@/lib/data";

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="section-padding">
          <div className="container container-padding">
            <div className="space-y-20">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                  Skills & Technologies
                </h1>
                <p className="text-lg text-dark-900 max-w-2xl mx-auto">
                  A comprehensive overview of the technologies and tools I use
                  to build exceptional digital experiences.
                </p>
              </div>

              {/* Frontend */}
              <div className="space-y-10 ">
                <h2 className="text-2xl font-bold tracking-tight text-center">
                  Frontend Development
                </h2>
                <div className="flex justify-center flex-wrap gap-16">
                  {skillsWithLogos.Frontend.map((skill) => (
                    <SkillLogo key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-10">
                <h2 className="text-2xl font-bold tracking-tight text-center">
                  Backend Development
                </h2>
                <div className="flex justify-center flex-wrap gap-16">
                  {skillsWithLogos.Backend.map((skill) => (
                    <SkillLogo key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="space-y-10">
                <h2 className="text-2xl font-bold tracking-tight text-center">
                  Tools
                </h2>
                <div className="flex justify-center flex-wrap gap-16">
                  {skillsWithLogos.Tools.map((skill) => (
                    <SkillLogo key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Soft Skills
              <div className="space-y-10">
                <h2 className="text-2xl font-bold tracking-tight text-center">Professional Skills</h2>
                <div className="flex justify-center flex-wrap gap-16">
                  {skillsWithLogos.Soft.map((skill) => (
                    <SkillLogo key={skill.name} skill={skill} />
                  ))}
                </div>
              </div> */}

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
