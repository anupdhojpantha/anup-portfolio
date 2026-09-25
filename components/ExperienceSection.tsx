import React from "react"
import { MotionSection } from "@/components/animations/motion-section"
import { FlowbiteTimeline, FlowbiteTimelineItem } from "@/components/flowbite-timeline"

const ExperienceSection = () => (
  <section id="experience" className="w-full py-12">
    <div className="container px-4 md:px-6">
      <MotionSection className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="section-heading">Experience</h2>
          <p className="max-w-[700px] text-muted-foreground ">
            My professional journey and work experience
          </p>
        </div>
      </MotionSection>
      <div className="mx-auto max-w-3xl pt-12">
        <FlowbiteTimeline>
       <FlowbiteTimelineItem
  title="Data Analyst"
  organization="Angel's Heart Foundation"
  date="Feb 2025 – Present · 6 mos | Kathmandu, Bāgmatī, Nepal · On-site"
  badges={["Excel", "Power Query", "Pivot Tables", "Data Cleaning", "Reporting", "Dashboard Design", "Business Intelligence"]}
>
  <div className="font-semibold mb-1">Project: Sales & Operations Analytics</div>
  <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
    <li>Analyzed business data using advanced Excel features including Pivot Tables, VLOOKUP, and conditional formatting</li>
    <li>Built automated reporting dashboards using Power Query to track KPIs and operational metrics</li>
    <li>Cleaned and transformed raw datasets to ensure data accuracy and consistency for reporting</li>
    <li>Applied systematic data validation and quality-check processes to catch inconsistencies before reporting</li>
    <li>Skills Learned: Data modeling, business reporting, dashboard design, and Excel automation</li>
  </ul>
</FlowbiteTimelineItem>
          <FlowbiteTimelineItem
        title="Data Analyst"
        organization="Spyder's Lab Pvt. Ltd."
        date="Feb 2025 – Present · 6 mos | Remote"
         badges={["Python", "SQL", "Data Validation", "Pandas", "ETL Pipelines", "pytest", "Power BI"]}
>
        <div className="font-semibold mb-1">Project: Sales Performance Intelligence Dashboard</div>
        <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
    <li>Analyzed large datasets using Python (Pandas, NumPy) and SQL to uncover sales trends and business insights</li>
    <li>Built interactive Power BI dashboards to visualize KPIs, enabling data-driven decision-making across teams</li>
    <li>Designed and maintained ETL pipelines to automate data extraction, transformation, and loading from multiple sources, with validation checks to ensure data integrity at each stage</li>
    <li>Skills Learned: Statistical analysis, data validation, dashboard development, and cross-functional reporting</li>
  </ul>
    </FlowbiteTimelineItem>
          <FlowbiteTimelineItem
            title="Frontend Developer (Intern)"
            organization="Spyder's Lab Pvt. Ltd."
            date="Sep 2024 – Dec 2024 · 4 mos | Kathmandu, Bāgmatī, Nepal · On-site"
             badges={["React.js", "HTML", "CSS", "JavaScript", "Git", "Responsive Design", "Travel Booking Website"]}
            >
            <div className="font-semibold mb-1">Project: Travel Booking Website</div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
            <li>Designed and developed responsive web pages for a travel and trekking website using HTML, CSS, JavaScript, and React.js</li>
            <li>Implemented user-friendly interfaces for tour packages, destination listings, and trekking information</li>
            <li>Built reusable React components to improve performance and maintainability of the application</li>
            <li>Integrated navigation, image galleries, and interactive UI elements to enhance user experience</li>
            <li>Collaborated with the development team to implement new features and improve website functionality</li>
            <li>Used Git for version control and followed agile development practices for project collaboration</li>
            <li>Skills Learned: React.js, responsive UI development, component-based architecture, and teamwork in a development environment</li>
            </ul>
          </FlowbiteTimelineItem>
        </FlowbiteTimeline>
      </div>
    </div>
  </section>
)

export default ExperienceSection