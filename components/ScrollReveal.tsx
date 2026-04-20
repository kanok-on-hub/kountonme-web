"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  // กำหนดทิศทางตอนที่มันซ่อนอยู่
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }} // ให้เล่นตอนที่เลื่อนมาเห็น 10% ของหน้าจอ
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}