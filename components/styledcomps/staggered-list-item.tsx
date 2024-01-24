"use client"
import { motion } from "framer-motion";

export default function StaggeredListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  const staggeritem = {
    hidden: { opacity: 0.1 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.li variants={staggeritem} className="w-80 lg:w-1/2 staggeritem">
        {children}
      </motion.li>
    </>
  );
}
