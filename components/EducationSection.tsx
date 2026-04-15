import React from "react"
import { MotionSection } from "@/components/animations/motion-section"
import { FlowbiteTimeline, FlowbiteTimelineItem } from "@/components/flowbite-timeline"

const EducationSection = () => (
  <section id="education" className="w-full py-12  section-alt">
    <div className="container px-4 md:px-6">
      <MotionSection className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="section-heading">Education</h2>
          <p className="max-w-[700px] text-muted-foreground ">
            My academic background and qualifications
          </p>
        </div>
      </MotionSection>
      <div className="mx-auto max-w-3xl pt-12">
        <FlowbiteTimeline>
          <FlowbiteTimelineItem
            title="Bachelor of Science in Computer Science and Information Technology"
            organization="Tribhuvan University, Asian School of Management and Technology"
            date="2021 – 2025"
            badges={["Programming", "Data Structures", "Algorithms", "Database Systems", "Software Engineering","Cloud Computing","Networking"]}
            link={{ text: "Learn more", url: "https://www.asm.edu.np/" }}
          >
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Location: Kathmandu<br/>
              Status: <span className="font-semibold text-green-600">Completed (2025)</span><br/>
              Focused on software development, cloud computing, Networking, and database management. Graduated with distinction.
            </p>
          </FlowbiteTimelineItem>
          <FlowbiteTimelineItem
            title="+2 (Science)"
            organization="Kathmandu Model College, Kathmandu"
            date="Mar 2019 – Aug 2020"
            badges={["Physics", "Chemistry", "Mathematics", "Computer Science"]}
          >
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Location: Kathmandu<br/>
              Stream: Science<br/>
              Status: <span className="font-semibold text-green-600">Completed (2020)</span><br/>
            </p>
          </FlowbiteTimelineItem>
        </FlowbiteTimeline>
        
      </div>
    </div>
  </section>
)

export default EducationSection 