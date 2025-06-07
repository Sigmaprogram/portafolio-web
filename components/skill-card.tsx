import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { SkillWithLogo } from "@/lib/data"

interface SkillCardProps {
  skill: SkillWithLogo
  className?: string
}

export default function SkillCard({ skill, className }: SkillCardProps) {
  return (
    <Card className={cn("overflow-hidden border-2 hover:border-primary/50 transition-all", className)}>
      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 relative mb-3">
          <Image
            src={skill.logo || `/placeholder.svg?text=${skill.name}`}
            alt={skill.name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="font-medium text-sm mt-2">{skill.name}</h3>
      </CardContent>
    </Card>
  )
}
