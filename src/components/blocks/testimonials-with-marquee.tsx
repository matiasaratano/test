import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-4",
      "w-full max-w-3xl mx-auto",
      className
    )}>
      <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-[500px] text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[400px] font-medium text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden mt-8">
          <div className="group flex overflow-hidden [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                    className="w-[300px] flex-shrink-0"
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}