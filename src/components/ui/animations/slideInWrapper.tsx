import { motion } from "framer-motion";
import React from "react";

interface AnimationWrapperProps {
  style?: object;
  height?: number | string;
  timer?: number;
  animationStart?: object;
  animationEnd?: object;
  className?: string;
  renderProps?: object;
  render: React.ReactElement | any;
  animationType?: string;
}

const defaultTimer = 3;

const SlideAnimationWrapper = (props: AnimationWrapperProps) => {
  const {
    timer,
    style,
    render,
    height,
    className,
    renderProps,
    animationEnd,
    animationType,
    animationStart,
  } = props;

  const config = {
    animationType: "spring" || animationType,
  };

  const RenderComponent = render;

  return (
    <motion.div
      className={className}
      style={style}
      initial={animationEnd || { x: height || "-100vh", opacity: 0 }}
      animate={animationStart || { x: 0, opacity: 1 }}
      transition={{
        type: config.animationType,
        duration: timer || defaultTimer,
      }}
    >
      <RenderComponent {...renderProps} />
    </motion.div>
  );
};

export default SlideAnimationWrapper;
