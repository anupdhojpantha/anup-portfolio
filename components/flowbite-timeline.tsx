"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, ReactNode } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { StaggeredChildren } from "@/components/animations/staggered-children"
import { LucideIcon } from "lucide-react"

interface TimelineItemProps {
  title: string
  organization: ReactNode
  date: string
  children: ReactNode
  icon?: LucideIcon
  badges?: string[]
  delay?: number
  link?: {
    text: string
    url: string
  }
  isCurrent?: boolean
}

export function FlowbiteTimeline({ children }: { children: React.ReactNode }) {
  return <ol className="relative border-s border-gray-200 dark:border-gray-700">{children}</ol>
}

export function FlowbiteTimelineItem({
  title,
  organization,
  date,
  children,
  badges = [],
  delay = 0,
  link,
  isCurrent = false,
}: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 ms-4 relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.2, type: "spring", stiffness: 200, damping: 10 }}
        className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-2 ${
          isCurrent 
            ? 'bg-primary border-primary animate-pulse' 
            : 'bg-gray-200 border-white dark:border-gray-900 dark:bg-gray-700'
        }`}
        style={{
          animation: "blink 2s infinite alternate",
          left: "-1.5rem",
          top: "0.375rem",
        }}
      />
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{organization}</p>
      <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{children}</div>
      {badges.length > 0 && (
        <StaggeredChildren className="flex flex-wrap gap-2 mt-4 mb-4">
          {badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="badge-outline">
              {badge}
            </Badge>
          ))}
        </StaggeredChildren>
      )}
      {link && (
        <Link
          href={link.url}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {link.text}{" "}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      )}
    </motion.li>
  )
}
