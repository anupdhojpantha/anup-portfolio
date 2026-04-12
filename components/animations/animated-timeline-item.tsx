"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedTimelineItemProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedTimelineItem({ children, className, delay = 0 }: AnimatedTimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.2, type: "spring", stiffness: 200, damping: 10 }}
        className="timeline-dot"
      />
      {children}
    </motion.div>
  )
}
