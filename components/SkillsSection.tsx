import React from "react"
import { MotionSection } from "@/components/animations/motion-section"
import { AnimatedCard } from "@/components/animations/animated-card"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { StaggeredChildren } from "@/components/animations/staggered-children"
import { AnimatedBadge } from "@/components/animations/animated-badge"
import { Layout, Server, Database, Palette, Bug, CheckCircle2 } from "lucide-react"

const SkillsSection = () => (
  <section id="skills" className="w-full py-12 section-alt">
    <div className="container px-4 md:px-6">
      <MotionSection className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="section-heading">Skills</h2>
          <p className="max-w-lg text-muted-foreground ">
            Core tools and skills I use to build and maintain reliable test automation.
          </p>
        </div>
      </MotionSection>
      {/* Bento grid: 2 left, 4 right */}
      <div className="gap-6 pt-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        {/* Left column: 2 stacked cards */}
        <div className="flex flex-col gap-6 h-full">
          {/* Programming Languages - Top left */}
          <MotionSection delay={0.2} direction="left" className="flex-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Layout className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Programming Languages</CardTitle>
                  <CardDescription>Languages I use to build and script automation</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>TypeScript</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>JavaScript</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>Python</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>Java</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.3}>C++</AnimatedBadge>
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
          {/* Test Automation - Bottom left */}
          <MotionSection delay={0.3} direction="left" className="flex-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Bug className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Test Automation</CardTitle>
                  <CardDescription>Frameworks for UI and end-to-end test automation</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>Playwright</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>Selenium WebDriver</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>Page Object Model</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>pytest</AnimatedBadge>
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
        </div>
        {/* Right column: 4-card bento grid */}
        <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-6 h-full">
          {/* API Testing - Top right, wide */}
          <MotionSection delay={0.4} direction="right" className="md:col-span-2 md:row-span-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle2 className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>API Testing & CI/CD</CardTitle>
                  <CardDescription>Validating APIs and integrating tests into pipelines</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>Postman</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>REST API Testing</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>Schema Validation</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>GitHub Actions</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.3}>Git</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.35}>GitHub</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.4}>Docker</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.45}>CI/CD</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.5}>Linux</AnimatedBadge>
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
          {/* Databases & Validation - Second row, wide */}
          <MotionSection delay={0.45} direction="right" className="md:col-span-2 md:row-span-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Database className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Databases & Data Validation</CardTitle>
                  <CardDescription>SQL and data quality checks for reliable testing</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>SQL</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>MySQL</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>PostgreSQL</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>Data Validation</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.3}>ETL Testing</AnimatedBadge>
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
          {/* Testing Methodologies - Bottom right left */}
          <MotionSection delay={0.5} direction="up" className="md:col-span-1 md:row-span-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Server className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Testing Methodologies</CardTitle>
                  <CardDescription>How I approach test design and coverage</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>Manual Testing</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>Exploratory Testing</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>Regression Testing</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>Bug Reporting</AnimatedBadge>
                </StaggeredChildren>
              </CardContent>
            </AnimatedCard>
          </MotionSection>
          {/* Other Skills - Bottom right right */}
          <MotionSection delay={0.6} direction="up" className="md:col-span-1 md:row-span-1">
            <AnimatedCard className="fancy-card rounded-sm h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Palette className="h-8 w-8 text-amber-500" />
                <div className="grid gap-1">
                  <CardTitle>Other Skills</CardTitle>
                  <CardDescription>Additional skills and expertise</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StaggeredChildren className="flex flex-wrap gap-2">
                  <AnimatedBadge className="badge" delay={0.1}>Agile</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.15}>AWS</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.2}>Excel</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.25}>Power BI</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.3}>Project Management</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.35}>Communication</AnimatedBadge>
                  <AnimatedBadge className="badge" delay={0.4}>Team Collaboration</AnimatedBadge>
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