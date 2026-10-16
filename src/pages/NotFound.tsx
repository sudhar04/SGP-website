import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Search,
  Building2,
  Compass,
} from "lucide-react";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = shouldReduceMotion
    ? {}
    : { y: [0, -8, 0] };

  const floatTransition = {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <main
      className="
        relative isolate
        box-border
        min-h-screen
        w-full
        overflow-x-clip
        bg-slate-50
        text-slate-900
        pt-24
        sm:pt-28
        lg:pt-32
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -left-24 top-20 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96"
          animate={
            shouldReduceMotion
              ? {}
              : { x: [0, 20, 0], y: [0, 15, 0] }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-16 -right-20 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          animate={
            shouldReduceMotion
              ? {}
              : { x: [0, -15, 0], y: [0, -20, 0] }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content wrapper: stays below the navbar */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <motion.section
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 24 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        >
          {/* Building icon */}
          <motion.div
            animate={floatAnimation}
            transition={floatTransition}
            className="relative mb-6 flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-900/5 sm:mb-8 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
          >
            <div className="absolute inset-2 rounded-2xl border border-dashed border-blue-200 sm:inset-3 sm:rounded-3xl" />

            <Building2
              aria-hidden="true"
              className="h-11 w-11 text-blue-600 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
              strokeWidth={1.6}
            />

            <motion.span
              animate={
                shouldReduceMotion
                  ? {}
                  : { rotate: [0, 8, -8, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400 text-base font-bold text-slate-950 shadow-lg sm:-right-3 sm:-top-3 sm:h-10 sm:w-10 sm:rounded-2xl sm:text-xl"
            >
              ?
            </motion.span>
          </motion.div>

          {/* Error code */}
          <motion.p
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.85 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="m-0 text-7xl font-extrabold leading-none tracking-tight text-blue-600 sm:text-8xl md:text-9xl"
          >
            404
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-5 sm:text-3xl md:text-4xl lg:text-[2.65rem]"
          >
            Oops! Page not found
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 10 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 md:text-lg"
          >
            The page you are looking for may have been moved,
            deleted, or the link may be incorrect. Let’s help you
            find your way back to SGP Promoters.
          </motion.p>

          {/* Action buttons */}
          <div className="mt-7 flex w-full flex-col justify-center gap-3 min-[420px]:w-auto min-[420px]:flex-row sm:mt-9 sm:gap-4">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="w-full min-[420px]:w-auto"
            >
              <Link
                to="/"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-amber-500/20 transition-colors hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 min-[420px]:w-auto sm:px-6 sm:text-base"
              >
                <Home size={18} />
                Back to Home
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="w-full min-[420px]:w-auto"
            >
              <Link
                to="/properties"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 min-[420px]:w-auto sm:px-6 sm:text-base"
              >
                <Search size={18} />
                Explore Properties
              </Link>
            </motion.div>
          </div>

          {/* Helpful links */}
          <div className="mt-8 w-full max-w-xl border-t border-slate-200 pt-5 sm:mt-10 sm:pt-6">
            <p className="mb-4 text-sm font-medium text-slate-500 sm:text-base">
              You might want to visit
            </p>

            <nav
              aria-label="Helpful navigation"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:gap-x-7"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Compass size={16} />
                Our Services
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Building2 size={16} />
                About Us
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ArrowLeft size={16} />
                Contact Us
              </Link>
            </nav>
          </div>

          <p className="mt-7 text-xs text-slate-400 sm:mt-8 sm:text-sm">
            SGP Promoters · Let’s get you back on track.
          </p>
        </motion.section>
      </div>
    </main>
  );
}



