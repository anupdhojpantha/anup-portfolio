import React from "react"
import { MotionSection } from "@/components/animations/motion-section"
import { AnimatedCard } from "@/components/animations/animated-card"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { StaggeredChildren } from "@/components/animations/staggered-children"
import { AnimatedBadge } from "@/components/animations/animated-badge"
import { Layout, Server, Database, Palette } from "lucide-react"

const SkillsSection = () => (
  <section id="skills" className="w-full py-12 section-alt">
    <div className="container px-4 md:px-6">
      <MotionSection className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="section-heading">Skills</h2>
          <p className="max-w-lg text-muted-foreground ">
            Here are some of my skills on which I have been working on for the past 2 years.
          </p>
        </div>
      </MotionSection>
      {/* Bento grid: 2 left, 3 right */}
      <div className="gap-6 pt-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        {/* Left column: 2 stacked cards */}
        <div className="flex flex-col gap-6 h-full">
          {/* Frontend - Top left */}
          <MotionSection delay={0.2} direction="left" className="flex-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Layout className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Programming Languages</CardTitle>
                  <CardDescription>Learned multiple programming languages</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>C</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>C++</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>Java</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>Python</AnimatedBadge>
                
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
          {/* Backend - Bottom left */}
          <MotionSection delay={0.3} direction="left" className="flex-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Server className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>Building responsive user interfaces</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.15}>HTML</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>CSS</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>React</AnimatedBadge>
                 <AnimatedBadge className="badge" delay={0.1}>Node.js</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.35}>REST API</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.4}>PHP</AnimatedBadge>
                              </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
        </div>
        {/* Right column: 3-card bento grid */}
        <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-6 h-full">
          {/* Tools & Technologies - Top right, wide */}
          <MotionSection delay={0.4} direction="right" className="md:col-span-2 md:row-span-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Database className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Tools & Technologies</CardTitle>
                  <CardDescription>Development tools and technologies</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>Git</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>GitHub</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>VS Code</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>Postman</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.3}>Docker</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.35}>AWS</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.4}>Vercel</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.45}>Netlify</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.5}>CI/CD</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.1}>Linux</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.1}>Excel</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.1}>Power BI</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.1}>Juypter Notebook</AnimatedBadge>
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
           {/* Tools & Technologies - Top right, wide */}
          <MotionSection delay={0.4} direction="right" className="md:col-span-2 md:row-span-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Database className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Database</CardTitle>
                  <CardDescription>Development tools and technologies</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>MySQL</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>PostgreSQL</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>MongoDB</AnimatedBadge>
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
          {/* Certifications - Bottom right left */}
          <MotionSection delay={0.5} direction="up" className="md:col-span-1 md:row-span-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Palette className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Professional certifications and achievements</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>Cyber Security: GRC 1 Governance</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>SEO</AnimatedBadge>
                                 </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
          {/* Other Skills - Bottom right right */}
          <MotionSection delay={0.6} direction="up" className="md:col-span-1 md:row-span-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Layout className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Other Skills</CardTitle>
                  <CardDescription>Additional skills and expertise</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>Figma</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>Adobe XD</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>Sketch</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>InVision</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.3}>UX/UI Design</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.35}>Project Management</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.4}>Leadership</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.45}>Communication</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.5}>Team Collaboration</AnimatedBadge>
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
        </div>
      </div>
    </div>
  </section>
)

export default SkillsSection 