import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimationWrapper = (props: any) => {
  const ref = useRef(null);
  const { render, height } = props;
  const inView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: !height ? "100vh" : height,
        opacity: 0,
      });
    }
  }, [inView]);

  const RenderComponent = render;

  return (
    <motion.div ref={ref}>
      <motion.div
        className={props?.className}
        style={props?.style}
        animate={animation}
      >
        <RenderComponent {...props?.renderProps} />
      </motion.div>
    </motion.div>
  );
};

export default AnimationWrapper;
