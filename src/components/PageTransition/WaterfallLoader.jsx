import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "../../context/TransitionContext";

const columns = [
  { id: 1, bg: "bg-[#1b1411]", delayEnter: 0.0, delayExit: 0.0 },
  { id: 2, bg: "bg-[#261d18]", delayEnter: 0.08, delayExit: 0.08 },
  { id: 3, bg: "bg-[#7b5137]", delayEnter: 0.16, delayExit: 0.16 },
  { id: 4, bg: "bg-[#3d2e25]", delayEnter: 0.24, delayExit: 0.24 },
  { id: 5, bg: "bg-[#1b1411]", delayEnter: 0.32, delayExit: 0.32 },
];

const WaterfallLoader = () => {
  const { isTransitioning, pageTitle, pageSubtitle } = usePageTransition();

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <div className="fixed inset-0 z-[99999] pointer-events-auto overflow-hidden">
          {/* Cascading Brown Waterfall Slat Columns */}
          <div className="absolute inset-0 flex w-full h-full">
            {columns.map((col) => (
              <motion.div
                key={col.id}
                initial={{ y: "-100%" }}
                animate={{
                  y: ["-100%", "0%", "0%", "100%"],
                  transition: {
                    duration: 1.5,
                    times: [0, 0.35, 0.65, 1],
                    ease: [0.77, 0, 0.175, 1],
                    delay: col.delayEnter,
                  },
                }}
                className={`flex-1 h-full ${col.bg} border-r border-[#d8b493]/10 last:border-r-0`}
              />
            ))}
          </div>

          {/* Centered Destination Webpage Title Reveal */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.9, 1, 1, 0.95],
                y: [20, 0, 0, -20],
                transition: {
                  duration: 1.1,
                  times: [0, 0.3, 0.75, 1],
                  delay: 0.3,
                  ease: "easeInOut",
                },
              }}
              className="flex flex-col items-center max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d2e25]/80 border border-[#d8b493]/30 text-[#d8b493] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#d8b493] animate-pulse" />
                {pageSubtitle}
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#fbf8f5] font-raleway drop-shadow-2xl">
                {pageTitle}
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d8b493] to-transparent mt-6 rounded-full" />
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaterfallLoader;
