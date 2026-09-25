import React from "react"
import { Github, ExternalLink } from "lucide-react"
import { MotionSection } from "@/components/animations/motion-section"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Customer Churn Analysis",
    date: "2025",
    description: "Analyzed customer churn patterns across 300+ records using Python, Pandas, and Seaborn to identify key churn drivers and recommend data-driven retention strategies.",
    image: "/images/churn.png",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    category: "data analysis",
    github: "https://github.com/anupdhojpantha/churn-analysis",
    webapp: ""
  },
 {
  id: 2,
  title: "E-Commerce ETL Pipeline with Automated Testing",
  date: "2025",
  description: "End-to-end data pipeline that ingests 50K+ records from CSV and JSON sources, with an automated pytest suite validating data integrity, schema consistency, and transformation accuracy at each pipeline stage before loading into MySQL.",
  image: "/images/etl.png", // add a screenshot of your Power BI dashboard or pipeline diagram
  tags: ["Python", "pytest", "Data Validation", "MySQL", "SQLAlchemy", "ETL", "Power BI"],
  category: "test automation",
  github: "https://github.com/anupdhojpantha/ecommerce-ETL",
  webapp: ""
},
{
  id: 3,
  title: "Playwright E2E Test Suite (Coming Soon)",
  date: "2026",
  description: "Automated UI test suite built with Playwright and TypeScript, covering login and checkout flows using the Page Object Model, with tests running in a GitHub Actions CI pipeline. Currently in progress — check back soon.",
  image: "/images/churn.png", // TODO: replace with a real screenshot/diagram once this project is built
  tags: ["Playwright", "TypeScript", "Page Object Model", "GitHub Actions"],
  category: "test automation",
  github: "",
  webapp: ""
},
]

const ProjectsSection = () => (
  <section id="projects" className="w-full py-12 md:py-16 bg-background dark:bg-zinc-950">
    <div className="container px-4 md:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          My Projects
        </h2>
        <p className="text-muted-foreground">
          A collection of my recent work and projects
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <MotionSection 
            key={project.id}
            className="group w-full h-full"
          >
            {/* Wrapping the card with anchor tag */}
            {project.webapp ? (
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row h-full p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="lg:w-1/3 w-full h-48 lg:h-auto overflow-hidden rounded-lg mb-4 lg:mb-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col ml-0 lg:ml-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 ml-2">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.webapp && (
                          <a 
                            href={project.webapp} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto mb-2">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.date && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {project.date}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ) : (
              <div className="flex flex-col lg:flex-row h-full p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
                <div className="lg:w-1/3 w-full h-48 lg:h-auto overflow-hidden rounded-lg mb-4 lg:mb-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col ml-0 lg:ml-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 ml-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto mb-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.date && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {project.date}
                    </div>
                  )}
                </div>
              </div>
            )}
          </MotionSection>
        ))}
      </div>
    </div>
  </section>
)

export default ProjectsSection