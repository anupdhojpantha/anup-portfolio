"use client"

import { useEffect, useState } from "react"

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TextScramble({ text, className, speed = 50, delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const [isScrambling, setIsScrambling] = useState(false)
  const chars = "!<>-_\\/[]{}—=+*^?#________"

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Initial delay
    timeout = setTimeout(() => {
      setIsScrambling(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!isScrambling) return

    let iteration = 0
    const finalText = text

    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index]
            }

            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(""),
      )

      if (iteration >= finalText.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, speed)

    return () => clearInterval(interval)
  }, [isScrambling, text, speed, chars])

  return <span className={className}>{displayText}</span>
}
