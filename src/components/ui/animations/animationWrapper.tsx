import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimationWrapperProps } from "./slideInWrapper";

const defaultTimer = 3;

const AnimationWrapper = (props: AnimationWrapperProps) => {
  const {
    timer,
    style,
    render,
    height,
    className,
    renderProps,
    animationEnd,
    animationStart,
  } = props;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const animation = useAnimation();

  const config = {
    animationStart: animationStart || {
      y: 0,
      opacity: 1,
    },
    animationEnd: animationEnd || {
      y: height || "100vh",
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("start");
    }
  }, [inView]);

  const RenderComponent = render;

  return (
    <motion.div ref={ref} layoutScroll>
      <motion.div
        className={className}
        style={style}
        variants={{
          start: config.animationStart,
          end: config.animationEnd,
        }}
        transition={{
          duration: timer || defaultTimer,
          delay: 0.2,
          type: "spring",
        }}
        animate={animation}
        initial="end"
      >
        <RenderComponent {...renderProps} />
      </motion.div>
    </motion.div>
  );
};

export default AnimationWrapper;
