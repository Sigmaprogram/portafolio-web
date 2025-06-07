import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Testimonial } from "@/lib/data"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-muted-foreground">&ldquo;{testimonial.text}&rdquo;</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={testimonial.avatar || "/placeholder.svg?height=40&width=40"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
