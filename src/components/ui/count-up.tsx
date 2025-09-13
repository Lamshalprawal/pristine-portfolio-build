"use client"

import * as React from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

interface CountUpProps {
  number: number
  fromNumber?: number
  decimalPlaces?: number
  decimalSeparator?: string
  padStart?: number
  inView?: boolean
  className?: string
  transition?: {
    stiffness?: number
    damping?: number
    mass?: number
  }
}

export function CountUp({
  number,
  fromNumber = 0,
  decimalPlaces = 0,
  decimalSeparator = ".",
  padStart = 0,
  inView = true,
  className,
  transition = { stiffness: 90, damping: 50 },
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldAnimate = inView ? isInView : true

  const motionValue = useMotionValue(fromNumber)
  const springValue = useSpring(motionValue, transition)
  const display = useTransform(springValue, (current) => {
    const value = Number(current.toFixed(decimalPlaces))
    const formatted = value.toLocaleString("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    })
    
    if (padStart > 0) {
      return formatted.padStart(padStart, "0")
    }
    
    return formatted
  })

  React.useEffect(() => {
    if (shouldAnimate) {
      motionValue.set(number)
    }
  }, [motionValue, number, shouldAnimate])

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums", className)}
      style={{ display: "inline-block" }}
    >
      {display}
    </motion.span>
  )
}
