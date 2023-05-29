import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface AnimationWrapperProps {
  style?: object;
  height?: number | string;
  timer?: number;
  animationStart?: object;
  animationEnd?: object;
  className?: string;
  renderProps?: object;
  render: React.ReactElement | any;
}

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
  const inView = useInView(ref);
  const animation = useAnimation();

  const config = {
    animationStart: animationStart || {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: timer || defaultTimer,
      },
    },
    animationEnd: animationEnd || {
      y: height || "100vh",
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start(config.animationStart);
    }
    if (!inView) {
      animation.start(config.animationEnd);
    }
  }, [inView]);

  const RenderComponent = render;

  console.log({ inView, ref: ref.current });

  return (
    <motion.div ref={ref}>
      <motion.div className={className} style={style} animate={animation}>
        <RenderComponent {...renderProps} />
      </motion.div>
    </motion.div>
  );
};

export default AnimationWrapper;
