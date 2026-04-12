"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { forwardRef } from "react"

interface AnimatedBadgeProps extends BadgeProps {
  children: React.ReactNode
  delay?: number
}

export const AnimatedBadge = forwardRef<HTMLDivElement, AnimatedBadgeProps>(
  ({ children, className, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        <Badge ref={ref} className={className} {...props}>
          {children}
        </Badge>
      </motion.div>
    )
  },
)
AnimatedBadge.displayName = "AnimatedBadge"
