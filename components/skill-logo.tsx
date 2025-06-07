import Image from "next/image"
import { cn } from "@/lib/utils"
import type { SkillWithLogo } from "@/lib/data"

interface SkillLogoProps {
  skill: SkillWithLogo
  className?: string
}

export default function SkillLogo({ skill, className }: SkillLogoProps) {
  return (
    <div className={cn("flex flex-col items-center text-center group cursor-default", className)}>
      <div className="w-12 h-12 relative mb-3 transition-all duration-300 group-hover:scale-110">
        <Image
          src={skill.logo || `/placeholder.svg?text=${skill.name}`}
          alt={skill.name}
          fill
          className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
        />
      </div>
      <span className="text-sm font-medium text-dark-900 group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  )
}
