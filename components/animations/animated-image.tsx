"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  delay?: number
}

export function AnimatedImage({ src, alt, width, height, className, delay = 0 }: AnimatedImageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 100, damping: 20 }}
      className={className}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="object-cover" />
    </motion.div>
  )
}
